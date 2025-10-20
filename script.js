document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  btn && btn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) menu.classList.remove('hidden');
    else menu.classList.add('hidden');
  });
});