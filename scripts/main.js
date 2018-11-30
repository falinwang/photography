// Create a 800 x 500 drawing surface
// Create a "pen" that draws a circle at the position of the mouse. As the mouse moves, so should the pen.   
// Additional controls are:
// "b" - change pen color to blue : keyCode 66 = b B
// "g" - change pen color to green : keyCode 71 = g G
// "r" - change pen color to red : keyCode 82 = r R
// "y" - change pen color to yellow : keyCode 82 = r R
// "up arrow" - make pen size larger : keyCode 38 = Up
// "down arrow" - make pen size smaller : keyCode 40 = Down
// "space bar" - clear the canvas (other than the current pen tip) : keyCode 32 = space



// Find the canvas by using the HTML DOM method getElementById()
var canvas = document.getElementById("myCanvas");
// Create a drawing object by using getContext
var ctx = canvas.getContext("2d");

// Draw on the canvas
// https://wcc723.github.io/canvas/2014/12/09/html5-canvas-03/

// getMousePos 取得滑鼠的座標 get the position of the mouse
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    //getBoundingClientRect 取得物件完整座標資訊，包含寬高等
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
    //這個function將會傳回滑鼠在 canvas上的座標
};

function mouseMove(evt) {
    var mousePos = getMousePos(canvas, evt);
    //透過getMousePos function 去取得滑鼠座標
    //mousePos 是一個物件，包含x和y的值
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    //draw!
}

canvas.addEventListener('mousedown', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    // 從按下去就會執行第一次的座標取得
    ctx.beginPath();
    // 建立path物件
    ctx.moveTo(mousePos.x, mousePos.y);
    //每次的點用moveTo去區別開，如果用lineTo會連在一起  
    evt.preventDefault();
    canvas.addEventListener('mousemove', mouseMove, false);
    //mousemove的偵聽也在按下去的同時開啟
});

canvas.addEventListener('mouseup', function () {
    canvas.removeEventListener('mousemove', mouseMove, false);
}, false);
//如果滑鼠放開，將會停止mouseup的偵聽




document.getElementById('reset').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);

var colors = ['red', 'blue', 'green', 'yellow'];
var size = [1, 3, 5, 10, 15, 20];
var sizeNames = ['default', 'three', 'five', 'ten', 'fifteen', 'twenty'];

function listener(i) {
    document.getElementById(colors[i]).addEventListener('click', function () {
        ctx.strokeStyle = colors[i]; // 把顏色的值寫到ctx.strokeStyle
    }, false);
}

function fontSizes(i) {
    document.getElementById(sizeNames[i]).addEventListener('click', function () {
        ctx.setLineWidth(size[i]);
    }, false);
}

for (var i = 0; i < colors.length; i++) {
    listener(i);
}

for (var i = 0; i < size.length; i++) {
    fontSizes(i);
}

ctx.strokeStyle = 'red';