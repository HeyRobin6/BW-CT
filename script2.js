function fadeIn(element) {
    let level = 0;
    element.style.opacity = level + "%";
    intervalID2 = setInterval(opacityLeveler, 20);
    
    function opacityLeveler() {
        if(level<101) {
            level=level+1
            element.style.opacity = level + "%";
        } else {
            clearInterval(intervalID2);
        }
    }
}

function doubleFadeIn(element1, element2) {
    let level = 0;
    element1.style.opacity = level + "%";
    element2.style.opacity = level + "%";
    intervalID2 = setInterval(opacityLeveler, 20);
    function opacityLeveler() {
        if(level<101) {
            level=level+1
            element1.style.opacity = level + "%";
            element2.style.opacity = level + "%";
        } else {
            clearInterval(intervalID2);
        }
    }
}