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

            var bgm = document.getElementById('bgm')
            bgm.play()
        });

        marker.addEventListener('markerLost', function() {
            var bgm = document.getElementById('bgm')
            bgm.pause()
            bgm.currentTime = 0;
        });
    }
});
