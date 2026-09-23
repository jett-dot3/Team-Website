/**
 * Matthew Jett — Portfolio & Resume Website
 * Interactivity: Contact Modal, Mobile Navigation, Email/Phone Copy, Print Trigger
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Contact Modal Setup ---
  const contactModal = document.getElementById('contactModal');
  const openModalBtns = document.querySelectorAll('.js-open-contact');
  const closeModalBtn = document.getElementById('closeModalBtn');

  function openModal() {
    if (contactModal) {
      contactModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (contactModal) {
      contactModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal && contactModal.classList.contains('active')) {
      closeModal();
    }
  });

  // --- Copy To Clipboard Helpers ---
  function copyTextToClipboard(text, feedbackElement, successMessage = 'Copied!') {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = feedbackElement.textContent;
      feedbackElement.textContent = successMessage;
      feedbackElement.style.color = '#10b981';
      setTimeout(() => {
        feedbackElement.textContent = originalText;
        feedbackElement.style.color = '';
      }, 2200);
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
    });
  }

  // Hero Quick Copy Email Pill
  const copyEmailPill = document.getElementById('heroCopyEmail');
  if (copyEmailPill) {
    copyEmailPill.addEventListener('click', () => {
      const statusSpan = copyEmailPill.querySelector('.copy-status-text');
      copyTextToClipboard('matthewpjett@gmail.com', statusSpan, '✓ Copied!');
    });
  }

  // Modal Copy Email
  const copyModalEmailBtn = document.getElementById('copyModalEmailBtn');
  if (copyModalEmailBtn) {
    copyModalEmailBtn.addEventListener('click', () => {
      copyTextToClipboard('matthewpjett@gmail.com', copyModalEmailBtn, 'Copied!');
    });
  }

  // Modal Copy Phone
  const copyModalPhoneBtn = document.getElementById('copyModalPhoneBtn');
  if (copyModalPhoneBtn) {
    copyModalPhoneBtn.addEventListener('click', () => {
      copyTextToClipboard('(225) 788-1050', copyModalPhoneBtn, 'Copied!');
    });
  }

  // --- Print Resume Trigger ---
  const printResumeBtns = document.querySelectorAll('.js-print-resume');
  printResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // --- Mobile Navbar Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const expanded = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Navbar Scroll Shadow ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // --- Active Nav Highlighting on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- Theme Toggle (Classic Paper vs Dark Resume) ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    // Check saved preference
    const savedTheme = localStorage.getItem('mj_resume_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-resume');
    }

    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-resume');
      const isDark = document.body.classList.contains('dark-resume');
      localStorage.setItem('mj_resume_theme', isDark ? 'dark' : 'light');
    });
  }

  window.addEventListener('scroll', highlightNavigation);
});
