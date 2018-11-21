

require('./bootstrap');

window.Vue = require('vue');



// Vue.component({
//     'example-component': require('./components/ExampleComponent.vue'),
// 'NavBar': require('./components/layouts/MasterNav.vue')
// });

// let Mnav = require('./components/layouts/MasterNav.vue');
let Madmin = require('./components/AdminApp.vue');

// let Lpanel = require('./components/admin/panel/LeftPanel.vue');
// let Rpanel = require('./components/admin/panel/RightPanel.vue');

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })



const app = new Vue({
    el: '#app',
    components: { Madmin },
    data: {
        message: "halo world"
    },
    created() {
        console.log('hallo nanas');
    }
});
