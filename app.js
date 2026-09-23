// ==========================================================================
// Sainath Reddy C Portfolio - Interactive Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initMetricCounters();
  initCopyEmail();
  initActiveNavOnScroll();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('btn-mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close mobile menu when any nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

/**
 * Animated Number Counters for Impact Metrics
 */
function initMetricCounters() {
  const counters = document.querySelectorAll('.metric-number');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => animateCounter(counter));
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.getElementById('metrics');
  if (metricsSection) {
    observer.observe(metricsSection);
  } else {
    counters.forEach(counter => animateCounter(counter));
  }
}

function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'), 10);
  if (isNaN(target)) return;

  const duration = 1600; // ms
  const frameRate = 30; // updates per sec
  const totalFrames = Math.round((duration / 1000) * frameRate);
  let frame = 0;

  const timer = setInterval(() => {
    frame++;
    // Easing: easeOutExpo
    const progress = frame / totalFrames;
    const current = Math.round(target * (progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)));

    counter.textContent = current;

    if (frame >= totalFrames) {
      counter.textContent = target;
      clearInterval(timer);
    }
  }, 1000 / frameRate);
}

/**
 * Copy Email to Clipboard with Visual Feedback
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const copyText = document.getElementById('copy-btn-text');
  const emailVal = 'sainathc786@gmail.com';

  if (!copyBtn || !copyText) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailVal);
      const originalText = copyText.textContent;
      copyText.textContent = 'Copied!';
      copyBtn.style.borderColor = '#10b981';
      copyBtn.style.color = '#10b981';

      setTimeout(() => {
        copyText.textContent = originalText;
        copyBtn.style.borderColor = '';
        copyBtn.style.color = '';
      }, 2200);
    } catch (err) {
      // Fallback
      window.location.href = `mailto:${emailVal}`;
    }
  });
}

/**
 * Highlight active nav link on scroll
 */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
