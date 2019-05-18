new Vue({
    el: '#app',
    data: {
        message: 'whats uppp',
        name: 'anmol',
        class_n: 'b1'
    },
    methods: {
        greet(time) {
            return `hello ${this.message} ${time}`
        },
    }

})