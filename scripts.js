flexFont = function () {
    var divs = document.getElementsByClassName("flexfont");
    for (var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetWidth * 0.08;
        divs[i].style.fontSize = relFontsize + 'px';
    }
};

window.onload = function (event) {
    if (window.innerWidth > 1000) {
        flexFont();
    }
};
window.onresize = function (event) {
    if (window.innerWidth > 1000) {
        flexFont();
    }
};