function hover(elem) {
    elem.src="images/assets/succulents-2.jpg";
}

function mouseOut(elem) {
    elem.src="images/assets/succulents-1.jpg";
}

function removePopup(elem) {
    console.log(elem.parentNode);
    elem.parentNode.remove();
}