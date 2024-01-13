import React from 'react'
function webcam (){
    let video = document.getElementById("vid");

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        })
        .catch(function (error) {
        console.log("Something went wrong!");
        });
    }
return video;
}
const Video = () => {
    console.log(webcam())
  return (
    <div></div>
  )
}

export default Video