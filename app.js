new Vue({
    el: '#app',
    data: {
        message: 'whats uppp',
        value: 10,
        name: 'anmol',
        coords: {
            x: 0,
            y: 0

        },

    },
    methods: {
        greet() {
            this.value++
        }, logEvent(e) {
            console.log(e);
        },
        logCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e) {
            console.log(e.target.value)
        }
    }

})