window.onload = function () {
    new IScroll(document.querySelector('.sort-main-left'),{
        scrollX:true,
        scrollY:true
    });
    new IScroll(document.querySelector('.sort-main-right'),{
        scrollX:true,
        scrollY:false
    });
}
