new Vue({
    el: '#app',
    data: {
        message: 'whats uppp',
        value: 10
    },
    methods: {
        greet() {
            this.value++
        },
    }

})