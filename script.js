    const sections = document.querySelectorAll('.section');
    const scrollNav = document.getElementById('scrollNav');

    sections.forEach((section, index) => {
      const btn = document.createElement('button');
      btn.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
      });
      scrollNav.appendChild(btn);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const button = scrollNav.children[index];
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          button.classList.add('active');
        } else {
          entry.target.classList.remove('active');
          button.classList.remove('active');
        }
      });
    }, { threshold: 0.6 });

    sections.forEach((section) => observer.observe(section));

    document.addEventListener('keydown', (e) => {
      const current = [...sections].findIndex(sec => sec.classList.contains('active'));
      if (e.key === 'ArrowDown' && current < sections.length - 1) {
        sections[current + 1].scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' && current > 0) {
        sections[current - 1].scrollIntoView({ behavior: 'smooth' });
      }
    });