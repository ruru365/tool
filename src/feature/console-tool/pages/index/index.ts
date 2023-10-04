import { ref, onMounted } from 'vue'
import CodeMirror from 'codemirror'
export default {
  setup() {
    const count = ref(0)
    const editor = ref<HTMLElement | null>(null)
    const iframe = ref<HTMLElement | null>(null)
    const text = ref('')
    let codeMirror: CodeMirror.Editor | null = null

    onMounted(() => {
      if (editor.value) {
        codeMirror = initCodeMirror(editor.value)
      }
    })

    function run() {
      if (iframe.value && codeMirror) {
        exec(iframe.value, codeMirror.getDoc().getValue())
      }

    }

    return {
      iframe,
      editor,
      count,
      text,
      run
    }
  }
}

function initCodeMirror(dom: HTMLElement) {
  return CodeMirror(dom, {
    value: "function myScript(){return 1000;}\n",
    mode: "javascript"
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
    log: () => {
      oConsole.log(...arguments)
    }
  }
  ${code}
  </script>`
  return script;
}