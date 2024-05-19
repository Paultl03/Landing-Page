document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[data-nav]');
    const navbarList = document.getElementById('navbar__list');
  
    // Create navigation items dynamically
    sections.forEach(function (section) {
      const navItem = document.createElement('li');
      const sectionId = section.getAttribute('id');
      const sectionName = section.getAttribute('data-nav');
  
      // Create anchor element
      const anchor = document.createElement('a');
      anchor.textContent = sectionName;
      anchor.setAttribute('href', `#${sectionId}`);
  
      // Append anchor to list item
      navItem.appendChild(anchor);
  
      // Append list item to navigation bar
      navbarList.appendChild(navItem);
    });
  
    // Smooth scrolling to anchor links
    navbarList.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.tagName === 'A') {
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  // Highlight active section while scrolling
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.6 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const navItem = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
          entry.target.classList.add('your-active-class');
          if (navItem) {
            navItem.classList.add('active');
          }
        } else {
          entry.target.classList.remove('your-active-class');
          if (navItem) {
            navItem.classList.remove('active');
          }
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
