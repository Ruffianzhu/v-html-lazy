import VHtmlLazy from './vHtmlLazy'

function install(Vue, props) {
  Vue.mixin(VHtmlLazy(props))
}

export default install
export { VHtmlLazy }