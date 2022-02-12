const constraints = {
    audio: false,
    video: true
}

const showVideo = document.querySelector('#showVideo').addEventListener('click', e => init(e))

async function init(e){
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log('stream', stream)
        const video = document.querySelector('video')
        video.srcObject = stream
        console.log('video', video, 'srcObject', video.srcObject)
        e.target.disabled = true;
    } catch (err){
        console.log(err)
    }
}