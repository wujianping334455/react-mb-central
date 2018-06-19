(function(psdw){
  var rem=0 , scale=0;
  var htmlDOM = document.documentElement;
  var currentWidth = htmlDOM.clientWidth;
  // 计算缩小倍率
  scale = currentWidth / psdw;
  // psdw分成若干份（15）--750时的每份宽度
  rem = psdw / 15;
  // 当前屏幕宽度时的每份宽度
  rem = rem * scale;
  // 设置页面字体大小
  htmlDOM.style.fontSize = rem + 'px';
})(750)