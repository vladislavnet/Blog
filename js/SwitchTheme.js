'use strict';
  let head = document.head,
      link = document.createElement('link');
  link.rel = 'stylesheet';
  if (localStorage.getItem('themeStyle') === 'dark') {
    link.href = '../css/StyleDarkTheme.css'; 
    document.getElementById('switch-1').setAttribute('checked', true); 
  }
  else {
    link.href = '../css/StyleLiteTheme.css'; 
  }
  head.appendChild(link);
  document.getElementById('switch-1').addEventListener('change', ev => {
    let btn = ev.target;
    if (btn.checked) {
      link.href = '../css/StyleDarkTheme.css'; 
      localStorage.setItem('themeStyle', 'dark'); 
    }
    else {
      link.href = '../css/StyleLiteTheme.css'; 
      localStorage.setItem('themeStyle', 'light'); 
    }
  });