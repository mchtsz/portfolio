
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/marthinhatland/Desktop/skole/portfolio/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "03fc9776-0850-4ae3-acd2-3fb4ca10ec5b"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
