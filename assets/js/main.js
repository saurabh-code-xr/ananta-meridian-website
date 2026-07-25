// ============================================================
// ANANTA MERIDIAN — SHARED SITE SCRIPT
// Nav scroll state, mobile menu, scroll reveal, smooth anchor
// scroll, and contact form handling. Shared across every page.
// ============================================================

// Nav scroll behavior
const nav = document.getElementById('nav');
if (nav) {
  const updateNavScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNavScroll, { passive: true });
  updateNavScroll();
}

// Mobile nav toggle
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const mobilePanel = document.querySelector('.nav-mobile-panel');
if (mobileToggle && mobilePanel) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.toggle('open');
    mobileToggle.classList.toggle('open', isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobilePanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobilePanel.classList.remove('open');
      mobileToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// Smooth scroll for same-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.length < 2) return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Contact form submission — delivered via Web3Forms
const form = document.querySelector('.contact-form');
if (form) {
  const btn = form.querySelector('button[type="submit"]');
  const btnDefaultText = btn.textContent;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (form.querySelector('[name="botcheck"]').checked) return;

    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      const result = await response.json();

      if (result.success) {
        btn.textContent = 'Enquiry Sent';
        btn.style.background = 'var(--am-midnight)';
        btn.style.color = 'var(--am-cyan)';
        btn.style.border = '1px solid var(--am-border)';
        form.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      btn.disabled = false;
      btn.textContent = 'Something went wrong — try again';
      setTimeout(() => { btn.textContent = btnDefaultText; }, 3000);
    }
  });
}
