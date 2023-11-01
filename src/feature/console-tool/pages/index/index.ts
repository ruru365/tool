import { ref, onMounted } from 'vue'
import List from './list.vue'

interface Block {
  id: string,
  content: string,
  type: string,
}

interface BlockConfig {
  flexData: (string | string[])[],
  blocks: Block[],
}

export default {
  components: {
    List
  },
  setup() {
    const defaultBlockConfig = {
      blocks: [{
        id: '1',
        content: '<iframe src="https://google.com" style="width:100%"></iframe>',
        type: 'html',
      },{
        id: '2',
        content: '<iframe src="https://google.com" style="width:100%"></iframe>',
        type: 'html',
      },{
        id: '3',
        content: '<iframe src="https://google.com" style="width:100%"></iframe>',
        type: 'html',
      }],
      // flexData: ['row','1','2'],
      // flexData: ['col','1','2'],
      flexData: ['row',['col','1','2'],'3'],
    }
    const blockConfig = ref<BlockConfig>(defaultBlockConfig)
    const searchDom = ref<HTMLElement | null>(null)
    const searchText = ref('')

    onMounted(() => {
      searchDom.value?.focus();
    })

    function search() {
      const isURL = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(searchText.value)
      if (isURL) {
        window.open('http://' + searchText.value)
      } else {
        window.open("https://searxng.online/search?q=" + searchText.value)
      }
    }

    return {
      blockConfig,
      search,
      searchDom,
      searchText: searchText,
    }
  }
}