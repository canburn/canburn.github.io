const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var nav = document.getElementById('nav');
      var yztext = document.getElementById('yztext');
  
      if (nav && yztext) {
        if (window.scrollY > 0) {
          nav.style.height = '40px';
          yztext.classList.add('small');
        } else {
          nav.style.height = '80px';
          yztext.classList.remove('small');
        }
      }
    });
  });
  
  
  