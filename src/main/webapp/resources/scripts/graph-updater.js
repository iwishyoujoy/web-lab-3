function clearGraph(){
    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot =>{
        dot.remove();
    })
}

function getR(){
    return parseFloat(document.getElementById("form:R-value").value);
}

function getCoordsFromScreen(c){
    return{
        x: ((c.x - 150)/50).toFixed(2),
        y: ((150-c.y)/50).toFixed(2)
    };
}

function getCoordsToScreen(c){
    return{
        x: (150 + 50 * c.x).toFixed(2),
        y: (150 - 50 * c.y).toFixed(2)
    };
}

function changeCoordsForDot(c){
    return {
        x: Math.max(-2, Math.min(2, Math.round((c.x)*2)/2)),
        y: Math.max(-3, Math.min(3, Math.round((c.y) * 1000) / 1000))
    };
}

function setX(x){
    let id = "form:value" + String(x).replace(".", "x");
    document.getElementById(id).click();
}

function setY(y){
    let element = document.getElementById("form:Y-value");
    element.value = String(y);
    element.onchange(undefined);
}

function mousemoveGraphListener(event){
    let map = document.getElementById("graph");

    let rect = map.getBoundingClientRect();
    let coords = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };

    let dot = document.getElementById("dot");
    let cursor = document.getElementById("cursor");

    let dotCoords = getCoordsToScreen(changeCoordsForDot(getCoordsFromScreen(coords)));

    dot.setAttribute("cx", String(dotCoords.x));
    dot.setAttribute("cy", String(dotCoords.y));

    cursor.setAttribute("cx", String(coords.x));
    cursor.setAttribute("cy", String(coords.y));
}

function onclickGraphListener(event){
    let r = getR();
    if (r<1 || r>4) return;
    let map = document.getElementById("graph");

    let rect = map.getBoundingClientRect();
    let coords = changeCoordsForDot(getCoordsFromScreen({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }));

    setX(coords.x);
    setY(coords.y);
    document.getElementById("check").click();
}

function updateMapWithR(){
    let r = getR();

    if (r>4 || r<1) return;
    let triangle = document.getElementById("triangle");
    let rectangle = document.getElementById("rectangle");
    let circle = document.getElementById("circle");

    let newTriangleCoords = "150,150 " + String(150+r*25) + ",150 150," + String(150-r*25);
    triangle.setAttribute("points", newTriangleCoords);

    let start = 150-r*50;
    let newRectangleCoords = String(start) + ",150 150,150 150," + String(150+r*25) + " " + String(start) + "," + String(150+r*25);
    rectangle.setAttribute("points", newRectangleCoords);

    let newCircleCoords = "M" + String(150+r*25) + ",150 A" + String(r*25) + "," + String(r*25) + " 90 0,1 150," + String(150+r*25) + " L 150,150 Z";
    circle.setAttribute("d", newCircleCoords);
}