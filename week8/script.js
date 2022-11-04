const canvas = document.querySelector("#myCanvas");
const canvas2 = document.querySelector("#myCanvas2");
function drawPattern() {
    const context = canvas.getContext("2d");
    context.strokeStyle = "red";
    context.strokeRect(50, 50, 100, 100);

    const img = new Image();
    img.src = "../images/clock.png";
    img.onload = () => {
        const pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(30, 30, 140, 140);
    }
}
function drawGradient() {
    const canvas = document.querySelector("#myCanvas");
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, 100, 100);
    gradient.addColorStop(0, "rgba(0, 0 ,0, 0)"); 
    gradient.addColorStop(1, "rgba(225, 225, 225, 0.5)"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 90, 90); 
    context.strokeRect(10, 10, 90, 90); 
}
drawPattern();
drawGradient();


function drawCircle(x, y, color) {
    const context = canvas2.getContext("2d");
    context.beginPath();
    context.arc(x, y, 30, 0, 6.4, true);
    context.closePath();
    context.strokeStyle = color;
    context.lineWidth = 3; 
    context.stroke(); 
}

drawCircle(50, 50, "red");
drawCircle(100, 100, "green");
drawCircle(50, 150, "blue");

function saveDrawing() {
    window.open(canvas.toDataURL("image/png"));
}

const button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing);

// Create video element
const video = document.createElement("video");
const source = document.createElement("source");
video.setAttribute("width", "300");
video.setAttribute("height", "220");
video.setAttribute("controls", "true");
video.appendChild(document.createTextNode("Your browser does not support the video tag"))
source.setAttribute("src", "../images/video.mp4")
source.setAttribute("type", "video/mp4")
video.appendChild(source)

function makeVideoOldTimey() {
    const context = canvas3.getContext("2d"); 
    draw(video,context,canvas);               
}

function draw(video, context, canvas) {
    if (video.paused || video.ended) return false;
    
    drawOneFrame(video, context, canvas);
    
    setTimeout(function(){ draw(video, context, canvas); }, 0);
}
function drawOneFrame(video, context, canvas){
    // draw the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    try{
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    console.log(imageData)
    var pixelData = imageData.data; 
    // Loop through the red, green and blue pixels, 
    // turning them grayscale
    
    let  red, green, blue, greyscale;  
    for (var i = 0; i < pixelData.length; i += 4) {
    red = pixelData[i];
    green = pixelData[i + 1];
    blue = pixelData[i + 2];
    grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        
    pixelData[i] = grayscale;
    pixelData[i + 1] = grayscale;
    pixelData[i + 2] = grayscale;
    }
            
    context.putImageData(imageData, 0, 0); 
    }catch {

    }
    context.clearRect(0,0,canvas.width,canvas.height);
    canvas.style.backgroundColor = "transparent";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.font = "18px LeagueGothic, Tahoma, Geneva, sans-serif";
    context.fillText("There was an error rendering ", 10, 20);  
    context.fillText("the video to the canvas.", 10, 40);
    context.fillText("Perhaps you are viewing this page from", 10, 70);
    context.fillText("a file on your computer?", 10, 90);
    context.fillText("Try viewing this page online instead.", 10, 130); 

    return false; 
}

makeVideoOldTimey();