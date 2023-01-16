window.addEventListener('camera-init', (data) => {
    var root = document.getElementById("root")
    root.style.visibility = 'hidden'
})

AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;

        marker.addEventListener('markerFound', function() {
            var root = document.getElementById("root")
            root.style.visibility = 'visible'

            var alert = document.getElementById("alert")
            alert.style.visibility = 'hidden'

            var bgm = document.querySelector('[sound]')
            bgm.components.sound.playSound()
        });

        marker.addEventListener('markerLost', function() {
            var bgm = document.querySelector('[sound]')
            bgm.components.sound.stopSound()
        });
    }
});

AFRAME.registerComponent('random-animation', {
    schema: {
        size: {type: 'number', default: 1.0}
    },

    init: function () {
        var element = this.el;
        element.setAttribute('scale', {
            x: this.data.size,
            y: this.data.size,
            z: this.data.size
        });
        var rdX = Math.random() * 5;
        var rdY = Math.random() * 5 + 1;
        var rdZ = Math.random() * 5 + 1.5;
        var dur = Math.random() * (5000-2300) + 2300;
        element.setAttribute('animation', {
            property: 'position',
            from: '0 1 0',
            to: rdX + ' ' + rdY + ' ' + rdZ,
            dur: dur,
            easing: 'linear',
            loop: true
        });
    }
})
