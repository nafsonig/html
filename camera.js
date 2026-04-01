const video = document.getElementById('videoElement');
const canvas = document.getElementById('canvasElement');
const photoResult = document.getElementById('photoResult');
const captureButton = document.getElementById('captureButton');

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.error("An error occurred: " + err);
    });

// Capture a photo
captureButton.addEventListener('click', function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL('image/png');
    photoResult.setAttribute('src', imageDataUrl);
});
