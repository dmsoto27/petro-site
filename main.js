(function(){var b=document.querySelector('.menu-btn'),l=document.getElementById('nav-links');
if(b&&l){b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o);});}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();})();
