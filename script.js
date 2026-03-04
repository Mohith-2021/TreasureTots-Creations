// script.js - Optimized for Performance & Responsiveness

// --- DATA CONFIGURATION ---
const GALLERIES = {
  // Storybooks
  dragonadventure: ['./images/Dragon Adventure1.jpg','./images/Dragon Adventure2.jpg'],
  lordrama: ['./images/Lord Rama1.jpg','./images/Lord Rama2.jpg'],
  krishna: ['./images/Krishna1.jpg','./images/Krishna2.jpg'],
  lordshiva: ['./images/Lord Shiva1.jpg','./images/Lord Shiva2.jpg'],
  icecrystaladventure: ['./images/Ice crystal Adventure1.jpg','./images/Ice crystal Adventure2.jpg'],
  spiderman: ['./images/spiderman1.jpg','./images/spiderman2.jpg'],
  frozenprincess: ['./images/Frozen Princess1.jpg','./images/Frozen Princess2.jpg'],
  spaceadventure: ['./images/Space Adventure1.jpg','./images/Space Adventure2.jpg'],
  sanatana: ['./images/sanatana1.jpg','./images/sanatana2.jpg','./images/sanatana3.jpg'],
  kalyanam: ['./images/kalyanam1.jpg','./images/kalyanam2.jpg','./images/kalyanam3.jpg','./images/kalyanam4.jpg'],
  adaywithhanuman: ['./images/A day with Hanuman1.jpg','./images/A day with Hanuman2.jpg'],
  andal: ['./images/andal1.jpg','./images/andal2.jpg'],
  underwateradventure: ['./images/Underwater Adventure1.jpg','./images/Underwater Adventure2.jpg'],
  astronautadventure: ['./images/Astronaut Adventure1.jpg','./images/Astronaut Adventure2.jpg'],
  abhimanyu: ['./images/Abhimanyu1.jpg','./images/Abhimanyu2.jpg'],
  cindrella: ['./images/Cindrella1.jpg','./images/Cindrella2.jpg'],
  arjuna: ['./images/Arjuna1.jpg','./images/Arjuna2.jpg'],
  navadurga: ['./images/Navadurga1.jpg','./images/Navadurga2.jpg'],
  balatripurasundari: ['./images/Bala Tripura sundari1.jpg','./images/Bala Tripura sundari2.jpg'],
  magiclamp: ['./images/Magic lamp1.jpg','./images/Magic lamp2.jpg'],
  moanasadventure: ['./images/Moana\'s Adventure1.jpg','./images/Moana\'s Adventure2.jpg'],
  harrypotter: ['./images/Harry Potter1.jpg','./images/Harry Potter2.jpg'],
  hermionegranger: ['./images/Hermione Granger1.jpg','./images/Hermione Granger2.jpg'],
  cycleadventure: ['./images/Cycle Adventure1.jpg','./images/Cycle Adventure2.jpg'],
  firefighter: ['./images/Firefighter1.jpg','./images/Firefighter2.jpg'],
  seasurferer: ['./images/Sea surferer1.jpg','./images/Sea surferer2.jpg'],
  taekwondochampion: ['./images/Taekwondo Champion1.jpg','./images/Taekwondo Champion2.jpg'],
  policeofficer: ['./images/Police officer1.jpg','./images/Police officer2.jpg'],
  unicornprincess: ['./images/Unicorn Princess1.jpg','./images/Unicorn Princess2.jpg'],
  mermaid: ['./images/Mermaid1.jpg','./images/Mermaid2.jpg'],
  raceradventure: ['./images/Racer Adventure1.jpg','./images/Racer Adventure2.jpg'],
  jijabai: ['./images/Jijabai1.jpg','./images/Jijabai2.jpg'],
  avengersadvanture: ['./images/Avengers Advanture1.jpg','./images/Avengers Advanture2.jpg'],
  chatrapatishivajimaharaj: ['./images/Chatrapati Shivaji Maharaj1.jpg','./images/Chatrapati Shivaji Maharaj2.jpg'],
  journeyoffutureblackbelt: ['./images/Journey Of Future Black Belt1.jpg','./images/Journey Of Future Black Belt2.jpg'],
  lightningmcqueen: ['./images/Lightning MC Queen1.jpg','./images/Lightning MC Queen2.jpg'],
  mowglithejungleroar: ['./images/Mowgli-The Jungle Roar1.jpg','./images/Mowgli-The Jungle Roar2.jpg'],
  narutoadventure: ['./images/Naruto Adventure1.jpg','./images/Naruto Adventure2.jpg'],
  princessjijabai: ['./images/Princess Jijabai1.jpg','./images/Princess Jijabai2.jpg'],
  radha: ['./images/Radha1.jpg','./images/Radha2.jpg'],
  ranirudramadevi: ['./images/Rani  Rudramadevi1.jpg','./images/Rani  Rudramadevi2.jpg'],

  // Custom Products
  wallpaper: ['./images/wallpapers.jpg'],
  customisedtags: ['./images/customised tags1.jpg','./images/customised tags2.jpg','./images/customised tags3.jpg','./images/customised tags4.jpg','./images/customised tags5.jpg','./images/customised tags6.jpg','./images/customised tags7.jpg','./images/customised tags8.jpg'],

  // Flashcards/Other
  hanuman: ['./images/hanuman1.jpg','./images/hanuman2.jpg','./images/hanuman3.jpg','./images/hanuman4.jpg','./images/hanuman5.jpg','./images/hanuman6.jpg'],
  coloring: ['./images/coloring1.jpg','./images/coloring2.jpg','./images/coloring3.jpg'],
  balamantra: ['./images/balamantra1.jpg','./images/balamantra2.jpg','./images/balamantra3.jpg','./images/balamantra4.jpg'],
  vemana: ['./images/vemana1.jpg','./images/vemana2.jpg','./images/vemana3.jpg'],
  abc: ['./images/abc1.jpg','./images/abc2.jpg','./images/abc3.jpg','./images/abc4.jpg','./images/abc5.jpg','./images/abc6.jpg','./images/abc7.jpg'],
  telugufc: ['./images/telugufc1.jpg','./images/telugufc2.jpg','./images/telugufc3.jpg'],
  atoz: ['./images/ATOZ1.jpg','./images/ATOZ2.jpg','./images/ATOZ3.jpg','./images/ATOZ4.jpg','./images/ATOZ5.jpg'],
  godsandcolor: ['./images/godsandcolor1.jpg','./images/godsandcolor2.jpg','./images/godsandcolor3.jpg','./images/godsandcolor4.jpg','./images/godsandcolor5.jpg','./images/godsandcolor6.jpg']
};

// --- DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimations();
  initCarousel();
  initModal();
  initReviewsCarousel();
  initTouchGestures();
});

// --- MOBILE MENU ---
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  const links = document.querySelectorAll('.nav-link');
  let scrollPosition = 0;

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isActive = !nav.classList.contains('active');

      if (isActive) {
        // Opening menu - save scroll position and lock body
        scrollPosition = window.scrollY;
        document.body.classList.add('menu-open');
        document.body.style.top = `-${scrollPosition}px`;
        nav.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-expanded', 'true');

        // Animate hamburger to X
        const spans = toggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        closeMenu(nav, toggle, scrollPosition);
      }
    }, { passive: true });

    links.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu(nav, toggle, scrollPosition);
      }, { passive: true });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        closeMenu(nav, toggle, scrollPosition);
      }
    });

    // Handle resize - close menu if switching to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && nav.classList.contains('active')) {
        document.body.classList.remove('menu-open');
        document.body.style.top = '';
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        const spans = toggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
}

function closeMenu(nav, toggle, scrollPosition) {
  nav.classList.remove('active');
  nav.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-expanded', 'false');

  const spans = toggle.querySelectorAll('span');
  spans[0].style.transform = 'none';
  spans[1].style.opacity = '1';
  spans[2].style.transform = 'none';

  // Restore scroll position smoothly
  document.body.classList.remove('menu-open');
  const top = document.body.style.top;
  document.body.style.top = '';
  if (top) {
    window.scrollTo(0, parseInt(top.slice(1)) * -1);
  }
}

// --- SCROLL ANIMATIONS (Single IntersectionObserver) ---
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  elements.forEach(el => observer.observe(el));
}

// --- CAROUSEL LOGIC ---
function initCarousel() {
  // Hide carousel nav buttons on mobile (handled by CSS too)
  const isMobile = window.innerWidth <= 768;
  
  if (!isMobile) {
    initCarouselInstance('storybooks-track', 'sb-prev', 'sb-next');
    initCarouselInstance('other-books-track', 'ld-prev', 'ld-next');
  }
  initCardImageClick();
  
  // Re-check on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const mobileNow = window.innerWidth <= 768;
      if (mobileNow !== isMobile) {
        location.reload(); // Reload to reinitialize carousels properly
      }
    }, 250);
  });
}

function initReviewsCarousel() {
  const track = document.getElementById('reviews-track');
  const container = document.getElementById('reviews-track-container');
  const prevBtn = document.getElementById('reviews-prev');
  const nextBtn = document.getElementById('reviews-next');

  if (!track || !container) return;

  const slides = track.querySelectorAll('.review-card');

  nextBtn.addEventListener('click', () => {
    const slideWidth = slides[0].offsetWidth + 24;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  });

  prevBtn.addEventListener('click', () => {
    const slideWidth = slides[0].offsetWidth + 24;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft <= 10) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  });
}

function initCarouselInstance(trackId, prevBtnId, nextBtnId) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!track || !prevBtn || !nextBtn) return;
  const container = track.parentElement;

  // Drag detection for this track
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleDragStart = (e) => {
    isDragging = false;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    scrollLeft = container.scrollLeft;
  };

  const handleDragMove = (e) => {
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 10) isDragging = true;
  };

  track.addEventListener('mousedown', handleDragStart, { passive: true });
  track.addEventListener('mousemove', handleDragMove, { passive: true });
  track.addEventListener('touchstart', handleDragStart, { passive: true });
  track.addEventListener('touchmove', handleDragMove, { passive: true });

  // Store isDragging on container for card-image click detection
  container._isDragging = () => isDragging;

  nextBtn.addEventListener('click', () => {
    const slide = track.querySelector('.carousel-slide');
    if (!slide) return;
    const slideWidth = slide.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    const scrollAmount = slideWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, { passive: true });

  prevBtn.addEventListener('click', () => {
    const slide = track.querySelector('.carousel-slide');
    if (!slide) return;
    const slideWidth = slide.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    const scrollAmount = slideWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft <= 10) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }, { passive: true });
}

// --- TOUCH GESTURES FOR MODAL ---
function initTouchGestures() {
  const modal = document.getElementById('image-modal');
  if (!modal) return;

  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeImage(1); // Swipe left - next image
      } else {
        changeImage(-1); // Swipe right - previous image
      }
    }
  }
}

// --- CARD IMAGE CLICK HANDLER (with drag detection) ---
function initCardImageClick() {
  document.querySelectorAll('.card-image[onclick*="openGallery"]').forEach(card => {
    card.addEventListener('click', function(e) {
      // Find the track container and check if user was dragging
      const trackContainer = this.closest('.carousel-track-container');
      if (trackContainer && trackContainer._isDragging && trackContainer._isDragging()) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      // Extract gallery key from onclick attribute
      const onclickAttr = this.getAttribute('onclick');
      const match = onclickAttr.match(/openGallery\('([^']+)'|\s*"([^"]+)"\s*,/);
      const key = match ? (match[1] || match[2]) : null;
      if (key) {
        e.preventDefault();
        openGallery(key, 0);
      }
    });
  });
}

// --- MODAL / GALLERY LOGIC ---
let currentGalleryKey = null;
let currentGalleryIndex = 0;
let galleryTimeout;
let modalInitialized = false;
let modalElements = {};

function initModal() {
  if (modalInitialized) return;
  modalInitialized = true;

  modalElements = {
    modal: document.getElementById('image-modal'),
    closeBtn: document.getElementById('modal-close'),
    prevBtn: document.getElementById('gallery-prev'),
    nextBtn: document.getElementById('gallery-next'),
    img: document.getElementById('gallery-img'),
    counter: document.getElementById('gallery-counter')
  };

  const { modal, closeBtn, prevBtn, nextBtn } = modalElements;
  if (!modal || !closeBtn || !prevBtn || !nextBtn) return;

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-body')) closeModal();
  });

  document.addEventListener('keydown', handleKeydown);
  prevBtn.addEventListener('click', () => changeImage(-1));
  nextBtn.addEventListener('click', () => changeImage(1));
}

function handleKeydown(e) {
  const { modal } = modalElements;
  if (!modal || !modal.classList.contains('show')) return;

  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') changeImage(-1);
  if (e.key === 'ArrowRight') changeImage(1);
}

window.openGallery = function(key, index) {
  const images = GALLERIES[key];
  if (!images || images.length === 0) return;

  currentGalleryKey = key;
  currentGalleryIndex = index;

  const { modal, img, counter } = modalElements;
  if (!modal || !img || !counter) return;

  img.src = images[currentGalleryIndex];
  counter.textContent = `${currentGalleryIndex + 1} / ${images.length}`;

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
};

function closeModal() {
  const { modal } = modalElements;
  if (!modal) return;

  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

function changeImage(direction) {
  const images = GALLERIES[currentGalleryKey];
  if (!images) return;

  currentGalleryIndex = (currentGalleryIndex + direction + images.length) % images.length;

  const { img, counter } = modalElements;
  if (!img || !counter) return;

  clearTimeout(galleryTimeout);
  img.style.opacity = '0';
  img.style.transform = 'translateZ(0)';

  galleryTimeout = setTimeout(() => {
    img.src = images[currentGalleryIndex];
    counter.textContent = `${currentGalleryIndex + 1} / ${images.length}`;
    img.style.opacity = '1';
  }, 150);
}
