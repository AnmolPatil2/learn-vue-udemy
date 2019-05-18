new Vue({
    el: '#app',
    data: {
        message: 'whats uppp',
        value: 10,
        coords: {
            x: 0,
            y: 0

        }
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
        }
    }

})