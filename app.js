window.addEventListener('camera-init', (data) => {
    var root = document.getElementById("root")
    root.style.visibility = 'hidden'
})

AFRAME.registerComponent('marker-anchor', {
    init: function () {
        var marker = this.el;
        var isPlaying = false;
        marker.addEventListener('markerFound', function () {
            var root = document.getElementById("root")
            root.style.visibility = 'visible'

            var alert = document.getElementById("alert")
            alert.style.visibility = 'hidden'

            if (isPlaying === false) {
                var bgm = document.querySelector('a-sound')
                bgm.components.sound.playSound()
            }

            // var character = document.getElementById("character")
            // var plane = document.getElementById("plane")
            // var marker = document.querySelector('a-marker')
            // var position = marker.getAttribute('position')
            // var rotation = marker.getAttribute('rotation')
            // character.setAttribute('position', position)
            // character.setAttribute('rotation', rotation)

            // var planeRotation = rotation;
            // planeRotation.x = rotation.x - 90;
            // plane.setAttribute('position', position)
            // plane.setAttribute('rotation', rotation)
            isPlaying = true;
        });
    },
    tick: function () {
        var character = document.getElementById("character")
        var plane = document.getElementById("plane")
        var marker = document.querySelector('a-marker')
        var position = marker.getAttribute('position')
        var rotation = marker.getAttribute('rotation')
        character.setAttribute('position', position)
        character.setAttribute('rotation', rotation)

        var planeRotation = rotation;
        planeRotation.x = rotation.x - 90;
        plane.setAttribute('position', position)
        plane.setAttribute('rotation', rotation)

    }
});

AFRAME.registerComponent('random-animation', {
    schema: {
        size: { type: 'number', default: 1.0 }
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
        var dur = Math.random() * (5000 - 2300) + 2300;
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
