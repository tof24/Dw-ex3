const images = document.getElementsByClassName("image")

let globalIndex = 0, last = { x: 0, y: 0};

const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    image.dataset.status = "active";
    last = {x, y};
}

const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y)
}

window.onmousemove = e => {
    if (distanceFromLast(e.clientX, e.clientY) > 180){
    const lead = images[globalIndex % images.length];

    activate(lead, e.clientX, e.clientY);

    globalIndex++
    }
    if (document.getElementById("inicio").style.display==="none"){

    }

}

const start =()=>{
    document.getElementById("inicio").style.display="none";
    document.getElementById("full").style.display="block";
}