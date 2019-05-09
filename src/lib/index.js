import ToastComponent from './vue-toast.vue'

let Toast = {}

Toast.install = function (Vue, options) {
    var opt = {
        duration: 3000	
    }
    Vue.prototype.$toast = function (message, option) { // 在vue原型上扩展$toast方法
        if (typeof option == 'object') {
            for(var key in options) {
                opt[key] = options[key]
            }
        }
    
        const ToastController = Vue.extend(ToastComponent) // 通过Vue.extend继承组件实例最后得到一个全新的组件实例
        // vue实例对象挂载到新创建的div上
        const instance = new ToastController().$mount(document.createElement('div'))
        instance.message = message;
        instance.visible = true;

        // 先进行插入
        document.body.appendChild(instance.$el)

        // 隔三秒隐藏
        setTimeout(() => {
            instance.visible = false; // 隐藏
            document.body.removeChild(instance.$el) // 移除
        }, opt.duration)
    },
    Vue.prototype.$toast['show'] = function (message, option) {
        Vue.prototype.$toast(message, option)
    },
    Vue.prototype.$toast['hide'] = function (message, option) {
        Vue.prototype.$toast(message, option)
    },
    Vue.prototype.$toast['info'] = function (message, option) {
        Vue.prototype.$toast(message, option)
    },
    Vue.prototype.$toast['debug'] = function (message, option) {
        Vue.prototype.$toast(message, option)
    }
} // 静态类  

if (window.Vue) {
    Vue.use(Toast)
}

export default Toast
