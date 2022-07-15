import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'
import store from './store'

const i18nStrings = {
  en: {
    hi: 'Hello!',
    save: 'Save'
  },
  ko: {
    hi: '안녕하새요',
    save: '저장'
  }
}

createApp(App).use(router).mixin(mixins).directive('focus', {
  mounted(el) {
    el.focus()
  }
}).use(i18nPlugin, i18nStrings).use(store).mount('#app')
