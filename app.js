new Vue({
    el: '#app',
    data: {
        message: 'whats uppp'
    },
    methods: {
        greet(time) {
            return `hello ${this.message} ${time}`
        },
    }

})