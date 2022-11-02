const menu = document.querySelector('#navbar-menu');
  const menuToggle = document.querySelector('.navbar-toggle');
  
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
  
    if (window.getComputedStyle(menu).display === 'grid') {
      menu.style.display = 'none';
    } else  {
      menu.style.display = 'grid';
    }
  });
