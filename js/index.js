
window.onload=function () {
    // 导航栏渐显
    searchshow();

    // 轮播图
    banner();

    //倒计时
    downTime();
}
let searchshow = function () {
    let nav = document.querySelector('.jd_search_box');
    window.onscroll = function () {
        let scrollTop = window.pageYOffset;
        let opacity = 0;
        if (scrollTop < 170) {
            opacity = scrollTop / 170 * 0.85;
        } else {
            opacity = 0.85;
        }
        nav.style.background = 'rgba(201,21,35,' + opacity + ')';
    }

};
let banner=function () {

};
let downTime=function () {

};
