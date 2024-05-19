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
    window.addEventListener('scroll', function () {
      sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add('your-active-class');
          const correspondingNavItem = document.querySelector(`a[href="#${section.getAttribute('id')}"]`);
          correspondingNavItem.classList.add('active');
        } else {
          section.classList.remove('your-active-class');
          const correspondingNavItem = document.querySelector(`a[href="#${section.getAttribute('id')}"]`);
          correspondingNavItem.classList.remove('active');
        }
      });
    });
  });
  