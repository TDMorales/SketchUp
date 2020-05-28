import React from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image"; 

const saveImage = () => {
    //save the entire canvas
    let canvas = layerEl.current.canvas._canvas
    console.log("Im the canvas", canvas)
    var dataURL = canvas.toDataURL();
    console.log("Im the dataUrl", dataURL)
  var blobBin = atob(dataURL.split(',')[1]);
  console.log("blobBin", blobBin)
  var array = [];
  for(var i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
  }
  console.log("array", array)
  var file=new Blob([new Uint8Array(array)], {type: 'image/png'});
  console.log("file", file)

  let body = new FormData()
  console.log("body", body)
  body.append("newImage", file)
  fetch('http://localhost:3000/images/create', {
    method: 'POST',
    body: body, 
    credentials: 'include'
    })
  }
