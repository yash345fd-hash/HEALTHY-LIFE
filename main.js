/**
 * HEALTHY LIFE — Modern Minimalist Premium Fitness Nutrition
 * Main JavaScript Interactions & State Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initNavbarScroll();
  initMobileNav();
  initScrollSpy();
  initIntersectionObserver();
  initFlavorSelector();
  initProductFilter();
  initProductModal();
  initMacroEstimator();
  initCopyEmail();
  initContactForm();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   0. THEME / PALETTE SWITCHER
   -------------------------------------------------------------------------- */
function initThemeSwitcher() {
  const themeBtns = document.querySelectorAll('[data-set-theme]');
  const savedTheme = localStorage.getItem('healthy_life_theme') || 'sandstone';

  function applyTheme(theme) {
    if (theme === 'sandstone') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    try {
      localStorage.setItem('healthy_life_theme', theme);
    } catch (e) {
      // Ignore if localStorage unavailable
    }

    themeBtns.forEach(btn => {
      const isSelected = btn.getAttribute('data-set-theme') === theme;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
  }

  themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const theme = btn.getAttribute('data-set-theme');
      applyTheme(theme);
    });
  });

  applyTheme(savedTheme);
}

/* --------------------------------------------------------------------------
   1. NAVBAR SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE DRAWER NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta');

  if (!toggleBtn || !drawer || !backdrop) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    backdrop.classList.toggle('open', isOpen);
    toggleBtn.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  backdrop.addEventListener('click', () => toggleMenu(false));

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL SPY FOR ACTIVE NAV LINKS
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-links .nav-link');

  if (!sections.length || !desktopLinks.length) return;

  const onScroll = () => {
    const scrollY = window.scrollY + 160;

    sections.forEach(sec => {
      const sectionTop = sec.offsetTop;
      const sectionHeight = sec.offsetHeight;
      const sectionId = sec.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   4. INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initIntersectionObserver() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE PROTEIN FLAVOR BROWSER
   -------------------------------------------------------------------------- */
const WHEY_FLAVORS = {
  chocolate: {
    name: 'Rich Chocolate',
    image: 'assets/whey-chocolate.jpg',
    badge: 'Chocolate',
    desc: 'A smooth, everyday protein designed to complement your training routine with deep cocoa and clean mixability.',
    key: 'whey-chocolate'
  },
  vanilla: {
    name: 'Smooth Vanilla',
    image: 'assets/whey-vanilla.jpg',
    badge: 'Vanilla',
    desc: 'Silky Madagascar vanilla bean profile for your everyday fitness journey and breakfast oats.',
    key: 'whey-vanilla'
  },
  mocha: {
    name: 'Café Mocha',
    image: 'assets/whey-chocolate.jpg',
    badge: 'Café Mocha',
    desc: 'Artisan roast espresso blended with dark cocoa and ultra-filtered whey isolate for a morning training boost.',
    key: 'whey-mocha'
  },
  cookies: {
    name: 'Cookies & Cream',
    image: 'assets/whey-vanilla.jpg',
    badge: 'Cookies & Cream',
    desc: 'Gourmet cookie crumble texture with velvety cream for a deeply satisfying post-workout shake.',
    key: 'whey-cookies'
  },
  mango: {
    name: 'Mango Delight',
    image: 'assets/whey-vanilla.jpg',
    badge: 'Mango Delight',
    desc: 'Refreshing tropical Alphonso mango blend with natural fruit notes and ultra-smooth texture.',
    key: 'whey-mango'
  },
  unflavored: {
    name: 'Pure Raw Isolate',
    image: 'assets/whey-vanilla.jpg',
    badge: 'Raw Isolate',
    desc: '100% pure instantized whey protein isolate with zero flavorings, zero sweeteners, and 27g protein.',
    key: 'whey-unflavored'
  }
};

function initFlavorSelector() {
  const flavorChips = document.querySelectorAll('.flavor-chip');
  const wheyCard = document.querySelector('[data-product-card="whey"]');
  if (!wheyCard || !flavorChips.length) return;

  const cardImg = wheyCard.querySelector('.product-image');
  const cardBadge = wheyCard.querySelector('.product-flavor-badge');
  const cardDesc = wheyCard.querySelector('.product-desc');
  const activeNameLabel = wheyCard.querySelector('.flavor-active-name');
  const exploreBtn = wheyCard.querySelector('[data-product-key]');

  flavorChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      flavorChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const flavorKey = chip.getAttribute('data-flavor');
      const flavorData = WHEY_FLAVORS[flavorKey];
      if (!flavorData) return;

      cardImg.src = flavorData.image;
      cardBadge.textContent = flavorData.badge;
      cardDesc.textContent = flavorData.desc;
      if (activeNameLabel) activeNameLabel.textContent = flavorData.name;
      exploreBtn.setAttribute('data-product-key', flavorData.key);
    });
  });
}

/* --------------------------------------------------------------------------
   6. PRODUCT FILTERING
   -------------------------------------------------------------------------- */
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. PRODUCT QUICK VIEW MODAL & DATA
   -------------------------------------------------------------------------- */
const PRODUCT_DATA = {
  'whey-chocolate': {
    title: 'Healthy Life Whey Protein',
    subtitle: 'Rich Chocolate Flavor',
    category: 'Protein',
    price: '₹2,499',
    image: 'assets/whey-chocolate.jpg',
    description: 'A smooth, everyday protein designed to complement your training routine with clean macro efficiency and great mixability.',
    facts: [
      { val: '25g', lbl: 'Protein' },
      { val: '5.5g', lbl: 'BCAAs' },
      { val: '0g', lbl: 'Added Sugar' }
    ],
    details: [
      'Pure instantized Whey Blend (Isolate & Concentrate)',
      'Rich cocoa flavor naturally sweetened without artificial aftertaste',
      'Ultra-filtered for rapid digestion and everyday training recovery',
      'Net Weight: 1 kg (2.2 lbs) / 30 Servings'
    ]
  },
  'whey-vanilla': {
    title: 'Healthy Life Whey Protein',
    subtitle: 'Smooth Vanilla Blend',
    category: 'Protein',
    price: '₹2,499',
    image: 'assets/whey-vanilla.jpg',
    description: 'Clean, simple nutrition for your everyday fitness journey. Crafted for smooth consistency in water, milk, or breakfast oats.',
    facts: [
      { val: '25g', lbl: 'Protein' },
      { val: '5.4g', lbl: 'BCAAs' },
      { val: '120', lbl: 'Calories' }
    ],
    details: [
      'Simple, transparent formula with no unnecessary fillers',
      'Silky Madagascar vanilla bean profile',
      'Easily blends with fruits, oats, and morning shakes',
      'Net Weight: 1 kg (2.2 lbs) / 30 Servings'
    ]
  },
  'whey-mocha': {
    title: 'Healthy Life Whey Protein',
    subtitle: 'Café Mocha Roast',
    category: 'Protein',
    price: '₹2,499',
    image: 'assets/whey-chocolate.jpg',
    description: 'Artisan roast espresso infused with Belgian dark cocoa and 25g pure whey protein for an energizing training session.',
    facts: [
      { val: '25g', lbl: 'Protein' },
      { val: '5.5g', lbl: 'BCAAs' },
      { val: '35mg', lbl: 'Nat. Caffeine' }
    ],
    details: [
      'Real coffee extract combined with micro-filtered whey protein',
      'Smooth mocha taste with zero bitter aftertaste',
      'Perfect pre-morning workout or post-training refresher',
      'Net Weight: 1 kg (2.2 lbs) / 30 Servings'
    ]
  },
  'whey-cookies': {
    title: 'Healthy Life Whey Protein',
    subtitle: 'Cookies & Cream Gourmet',
    category: 'Protein',
    price: '₹2,499',
    image: 'assets/whey-vanilla.jpg',
    description: 'Crisp cookie crumble notes blended into a rich sweet-cream whey matrix for a guilt-free gourmet experience.',
    facts: [
      { val: '25g', lbl: 'Protein' },
      { val: '5.5g', lbl: 'BCAAs' },
      { val: '1g', lbl: 'Total Fat' }
    ],
    details: [
      'Gourmet dessert-grade flavor without excessive sugar or heavy syrups',
      'Ultra-micronized texture that dissolves cleanly in a shaker bottle',
      'Net Weight: 1 kg (2.2 lbs) / 30 Servings'
    ]
  },
  'whey-mango': {
    title: 'Healthy Life Whey Protein',
    subtitle: 'Alphonso Mango Delight',
    category: 'Protein',
    price: '₹2,499',
    image: 'assets/whey-vanilla.jpg',
    description: 'Refreshing tropical Alphonso mango blend with natural fruit extracts and light, thirst-quenching mouthfeel.',
    facts: [
      { val: '25g', lbl: 'Protein' },
      { val: '5.4g', lbl: 'BCAAs' },
      { val: '118', lbl: 'Calories' }
    ],
    details: [
      'Natural mango fruit extract powder',
      'Light, crisp shake texture ideal for warm-weather training sessions',
      'Net Weight: 1 kg (2.2 lbs) / 30 Servings'
    ]
  },
  'whey-unflavored': {
    title: 'Healthy Life Whey Protein',
    subtitle: '100% Pure Raw Isolate',
    category: 'Protein',
    price: '₹2,599',
    image: 'assets/whey-vanilla.jpg',
    description: 'Zero sweeteners, zero flavors, zero gums. Pure instantized cold-filtered whey isolate delivering maximum protein purity.',
    facts: [
      { val: '27g', lbl: 'Protein' },
      { val: '6.0g', lbl: 'BCAAs' },
      { val: '0g', lbl: 'Carbs & Sugar' }
    ],
    details: [
      'Single ingredient: 100% Instantized Whey Protein Isolate',
      'Effortlessly blends into smoothies, pancakes, baking, and homemade shakes',
      'Net Weight: 1 kg (2.2 lbs) / 33 Servings'
    ]
  },
  'creatine': {
    title: 'Healthy Life Performance Creatine',
    subtitle: '300g Micronized Monohydrate',
    category: 'Performance',
    price: '₹1,299',
    image: 'assets/creatine.jpg',
    description: 'A simple addition to a consistent strength and performance routine. 100% pure micronized creatine monohydrate for cellular energy.',
    facts: [
      { val: '5g', lbl: 'Per Serving' },
      { val: '100%', lbl: 'Pure Monohydrate' },
      { val: '60', lbl: 'Servings' }
    ],
    details: [
      'Ultra-fine micronized mesh (200 mesh) for effortless dissolvability',
      'Unflavored — easily mixes into whey protein, pre-workout, or water',
      'Zero carbs, zero sugar, zero fillers',
      'Net Quantity: 300g (0.66 lbs)'
    ]
  },
  'multivitamins': {
    title: 'Healthy Life Daily Multivitamins',
    subtitle: '24 Essential Micronutrients Complex',
    category: 'Wellness',
    price: '₹899',
    image: 'assets/greens.jpg',
    description: 'An essential daily micronutrient blend designed for active individuals, supporting daily energy, immune defense, and cellular health.',
    facts: [
      { val: '24', lbl: 'Vitamins & Minerals' },
      { val: '100%', lbl: 'RDA Coverage' },
      { val: '60', lbl: 'Vegan Capsules' }
    ],
    details: [
      'Chelated minerals with superior bioavailability',
      'High-potency B-complex vitamins for metabolic energy and stamina',
      'Antioxidant shield: Vitamin C, D3, Zinc, and Selenium',
      'Dosage: 1 Capsule daily with breakfast'
    ]
  },
  'fish-oil': {
    title: 'Healthy Life Triple Strength Omega-3',
    subtitle: '1000mg Active EPA + DHA',
    category: 'Wellness',
    price: '₹1,199',
    image: 'assets/creatine.jpg',
    description: 'Purified, pharmaceutical-grade essential fatty acids supporting joint mobility, heart health, and muscle recovery after hard training.',
    facts: [
      { val: '1000mg', lbl: 'EPA + DHA' },
      { val: '3X', lbl: 'Concentration' },
      { val: '60', lbl: 'Softgels' }
    ],
    details: [
      'Molecularly distilled for absolute purity from heavy metals and contaminants',
      'Enteric-coated softgels with zero fishy burps or reflux',
      'Essential support for cardiovascular vitality and post-workout joint recovery',
      'Dosage: 1 Softgel daily with meals'
    ]
  },
  'greens': {
    title: 'Healthy Life Daily Greens',
    subtitle: 'Green Apple Crisp Superfood Blend',
    category: 'Wellness',
    price: '₹999',
    image: 'assets/greens.jpg',
    description: 'A refreshing daily wellness blend designed for an active lifestyle. An easy way to support your daily micronutrient and antioxidant intake.',
    facts: [
      { val: '30+', lbl: 'Superfoods' },
      { val: '100%', lbl: 'Plant-Based' },
      { val: '1 Scoop', lbl: 'Daily Habit' }
    ],
    details: [
      'Spirulina, chlorella, spinach, wheatgrass & organic matcha blend',
      'Crisp green apple flavor that actually tastes refreshing',
      'Digestive enzyme support for smooth gut comfort',
      'Net Quantity: 250g (30 Servings)'
    ]
  }
};

function initProductModal() {
  const modalOverlay = document.getElementById('product-modal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  const modalImg = modalOverlay.querySelector('#modal-img');
  const modalCategory = modalOverlay.querySelector('#modal-category');
  const modalTitle = modalOverlay.querySelector('#modal-title');
  const modalSubtitle = modalOverlay.querySelector('#modal-subtitle');
  const modalPrice = modalOverlay.querySelector('#modal-price');
  const modalDesc = modalOverlay.querySelector('#modal-desc');
  const modalFactsGrid = modalOverlay.querySelector('#modal-facts');
  const modalDetailsList = modalOverlay.querySelector('#modal-details-list');

  function openModal(key) {
    const data = PRODUCT_DATA[key];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalPrice.textContent = data.price;
    modalDesc.textContent = data.description;

    // Render Facts
    modalFactsGrid.innerHTML = data.facts.map(f => `
      <div class="fact-item">
        <div class="fact-val">${f.val}</div>
        <div class="fact-lbl">${f.lbl}</div>
      </div>
    `).join('');

    // Render Details
    modalDetailsList.innerHTML = data.details.map(d => `
      <li style="display:flex; align-items:flex-start; gap:0.5rem; font-size:0.875rem; color:var(--text-secondary); margin-bottom:0.4rem;">
        <span style="color:var(--accent-green-bright); font-weight:bold;">✓</span> ${d}
      </li>
    `).join('');

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const exploreBtn = e.target.closest('[data-product-key]');
    if (exploreBtn) {
      e.preventDefault();
      const key = exploreBtn.getAttribute('data-product-key');
      openModal(key);
    }
  });

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   8. DAILY PROTEIN & MACRO ESTIMATOR WIDGET
   -------------------------------------------------------------------------- */
function initMacroEstimator() {
  const weightSlider = document.getElementById('calc-weight');
  const weightDisplay = document.getElementById('calc-weight-val');
  const intensityBtns = document.querySelectorAll('.calc-pill-btn');
  const proteinResult = document.getElementById('calc-protein-res');
  const waterResult = document.getElementById('calc-water-res');
  const scoopsResult = document.getElementById('calc-scoops-res');

  if (!weightSlider || !proteinResult) return;

  let currentMultiplier = 1.8;

  function calculate() {
    const weight = parseFloat(weightSlider.value) || 70;
    weightDisplay.textContent = `${weight} kg`;

    const totalProtein = Math.round(weight * currentMultiplier);
    const suggestedWater = (weight * 0.04).toFixed(1);
    const suggestedScoops = totalProtein >= 130 ? '1–2' : '1';

    proteinResult.textContent = `${totalProtein}g`;
    waterResult.textContent = `${suggestedWater}L`;
    scoopsResult.textContent = `${suggestedScoops} Scoop/day`;
  }

  weightSlider.addEventListener('input', calculate);

  intensityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      intensityBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMultiplier = parseFloat(btn.getAttribute('data-multiplier')) || 1.6;
      calculate();
    });
  });

  calculate();
}

/* --------------------------------------------------------------------------
   9. COPY EMAIL & TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn, .btn-copy-action');
  const toast = document.getElementById('toast');
  const emailText = 'yash345fd@gmail.com';

  if (!copyBtns.length || !toast) return;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(emailText);
        showToast('Email copied to clipboard: ' + emailText);
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Email copied: ' + emailText);
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   10. QUICK CONTACT FORM HANDLING
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('quick-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !message) return;

    const mailtoUrl = `mailto:yash345fd@gmail.com?subject=Healthy Life Collaboration - ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;

    showToast(`Thank you, ${name}! Opening your email client...`);
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   11. SMOOTH SCROLLING FOR ALL INTERNAL LINKS
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
