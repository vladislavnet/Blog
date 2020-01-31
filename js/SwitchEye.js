// 'use strict';
//   let head = document.head,
//       link = document.createElement('link');
//   link.rel = 'stylesheet';
//   if (localStorage.getItem('eyeStyle') === 'eyeOff') {
//     link.href = 'css/Eye-Off.css'; 
//     document.getElementById('switch-eye').setAttribute('checked', true); 
//   }
//   else {
//     link.href = 'css/Eye-On.css'; 
//   }
//   head.appendChild(link);
//   document.getElementById('switch-eye').addEventListener('change', ev => {
//     let btn = ev.target;
//     if (btn.checked) {
//       link.href = 'css/Eye-Off.css'; 
//       localStorage.setItem('eyeStyle', 'eyeOff'); 
//     }
//     else {
//       link.href = 'css/Eye-On.css'; 
//       localStorage.setItem('eyeStyle', 'eyeOn'); 
//     }
//   });
  document.getElementById('switch-eye').setAttribute('checked', true); 
  $("switch-eye").click(function () {
    $('a[href^="#Section"').css({
        'font-size': 100+'px'
    })
  })