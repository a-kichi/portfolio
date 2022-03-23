// window.onload = function() {
//     const spinner = document.getElementById('loading');
//     spinner.classList.add('loaded');
//   }

var images = document.getElementsByTagName('img');
var loadingBar = document.getElementById('loading_bar');
var loadingWrap = document.getElementById('loading_barWrap');
var loadingArea = document.getElementById('loading');

var imgLen = images.length;
var barLen = 100 / imgLen;
console.log(barLen);
var barWidth = 0;

for (var i = 0; i < imgLen; i++) {
    images[i].onload = function() {
        barWidth = barWidth + barLen;
        loadingBar.style.width = barWidth + '%';
    }
}

function loadLen() {
    if (!loadingArea.classList.contains('loadingNone')) {
        if (loadingBar.clientWidth === loadingWrap.clientWidth) {
            loadingArea.classList.add('loadingNone');
        } else {
            setTimeout(loadLen, 1000);
        }
    }
}

// 100%にならなかった時用の処理
window.addEventListener('load', function(){
  if (!loadingArea.classList.contains('loadingNone')) {
    loadingBar.style.width = '100%';
    setTimeout(function(){
      loadingArea.classList.add('loadingNone');
    }, 1000);
  }
});

$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 500) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});