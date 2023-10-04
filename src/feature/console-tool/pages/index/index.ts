import { ref, onMounted } from 'vue'
import CodeMirror from 'codemirror'
import { Subject } from 'rxjs'
declare global {
  interface Window { IframeSub: Subject<any>; }
}
window.IframeSub = new Subject();
window.IframeSub.next

export default {
  setup() {
    const count = ref(0)
    const editor = ref<HTMLElement | null>(null)
    const iframe = ref<HTMLElement | null>(null)
    const result = ref<HTMLElement | null>(null)
    let editorCM: CodeMirror.Editor | null = null
    let resultCM: CodeMirror.Editor | null = null

    onMounted(() => {
      if (editor.value) {
        editorCM = initCodeMirror(editor.value)
      }
      if (result.value) {
        resultCM = initCodeMirror(result.value)
      }
      window.IframeSub.subscribe({
        next: (log: any[]) => {
          const result = log.map(item => JSON.stringify(item)).join('\n');
          resultCM?.setValue(result)
        }
      })
    })

    function run() {
      if (iframe.value && editorCM) {
        exec(iframe.value, editorCM.getDoc().getValue())
      }

    }

    return {
      iframe,
      editor,
      count,
      result,
      run
    }
  }
}


function initCodeMirror(dom: HTMLElement) {
  return CodeMirror(dom, {
    value: "console.log(123)\n",
    mode: {name: "javascript", json: true},
    lineNumbers: true
  });
}

function exec(iframeDom: HTMLElement, code: string) {
  iframeDom.innerHTML = "<iframe></iframe>";
  const iframe = document.querySelector('iframe') as HTMLIFrameElement;
  const iframeDoc = iframe.contentDocument;
  if (iframeDoc) {
    iframeDoc.open();
    iframeDoc.write(wrapCode(code));
    iframeDoc.close();
  }
}

function wrapCode(code: string) {
  const script =
    `<script>
  let oConsole = window.console;
  window.console = {
    log: (...arguments) => {
      top.IframeSub && top.IframeSub.next(arguments)
      oConsole.log(...arguments)
    }
  }
  ${code}
  </script>`
  return script;
}