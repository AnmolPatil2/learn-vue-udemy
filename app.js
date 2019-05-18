new Vue({
    el: '#app',
    data: {
        message: 'whats uppp',
        value: 10
    },
    methods: {
        greet(time) {
            return `hello ${this.message} ${time}`
        },
    }

})