window.onload = function () {
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
let banner = function () {
    let bannerBox = document.querySelector('.jd_banner');
    let imgBox = document.querySelector('.jd_banner>ul:first-child');
    let circleBox = document.querySelectorAll('.jd_banner>ul:last-child>li');
    let addTranslation = function () {
        imgBox.style.transition = 'all 0.2s';
        imgBox.style.webkitTransition = 'all 0.2s';
    };
    let removeTransition = function () {
        imgBox.style.transition = 'none';
        imgBox.style.webkitTransition = 'none';
    };

    let settanslateX = function (translateX) {
        imgBox.style.transform = 'translateX(' + translateX + 'px)';
        imgBox.style.webkitTransform = 'translateX(' + translateX + 'px)';
    };


    let index = 1;
    let timer = setInterval(function () {
        let width = bannerBox.offsetWidth;
        index++;
        addTranslation();
        // console.log('index:'+index);
        // console.log('width:'+width);
        let translateX = -width * index;
        // console.log('translateX:'+translateX);
        settanslateX(translateX);
    }, 1500);


    imgBox.addEventListener('transitionend', function () {
        // console.log('外面index:' + index);
        if (index >= 9) {
            let width = bannerBox.offsetWidth;
            index = 1;
            removeTransition();
            let translateX = -width * index;
            settanslateX(translateX);
        } else if (index <= 0) {
            let width = bannerBox.offsetWidth;
            index = 8;
            removeTransition();
            let translateX = -width * index;
            settanslateX(translateX);
        }
        setpoint();

    });
    // 设置点的方法
    let setpoint = function () {
        for (let i = 0; i < circleBox.length; i++) {
            let obj = circleBox[i];
            obj.classList.remove('now');
        }
        ;
        circleBox[index - 1].classList.add('now');

    };
    let startX = 0;
    let distanceX = 0;
    let isMove = false;
    imgBox.addEventListener('touchstart', function (e) {
        clearInterval(timer);
        startX = e.touches[0].clientX;
    })
    imgBox.addEventListener('touchmove', function (e) {
        let moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        let width = bannerBox.offsetWidth;
        let translateX = -width * index + distanceX;
        settanslateX(translateX);
        isMove = true;
    })
    imgBox.addEventListener('touchend', function (e) {
        if (isMove) {
            let width = bannerBox.offsetWidth;
            if (Math.abs(distanceX) < width / 3) {
                addTranslation();
                let translateX = -width * index;
                settanslateX(translateX);
            } else {
                if (distanceX > 0) {
                    index--;

                } else {
                    index++;
                }
                addTranslation();
                let translateX = -width * index;
                settanslateX(translateX);
            }
            startX = 0;
            distanceX = 0;
            clearInterval(timer);
            timer = setInterval(function () {
                let width = bannerBox.offsetWidth;
                index++;
                addTranslation();
                let translateX = -width * index;
                settanslateX(translateX);
            }, 1500);
        }
    })
};
let downTime = function () {
      let time=2*60*60;
      let timesecks=document.querySelectorAll('.time-seck');
      let timer=setInterval(function () {
              time--;
              // console.log(time);
              let hour=Math.floor(time/3600);
              let minite=Math.floor(time%3600/60);
              let second=time%60;
              // console.log(minite);
              timesecks[0].innerHTML=Math.floor(hour/10);
              timesecks[1].innerHTML=Math.floor(hour%10);

              timesecks[2].innerHTML=Math.floor(minite/10);
              timesecks[3].innerHTML=Math.floor(minite%10);

              timesecks[4].innerHTML=Math.floor(second/10);
              timesecks[5].innerHTML=Math.floor(second%10);
          if(time<=0){
              clearInterval(timer);
          }
          // console.log(hour);
      },1000);

};
