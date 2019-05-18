new Vue({
    el: '#app',
    data: {
        show: true,
        age: true,
        name: 'l',


    },
    methods: {
        toggle() {
            this.show = !this.show
        },
        toggle1() {
            this.age = !this.age
        }
    }


})