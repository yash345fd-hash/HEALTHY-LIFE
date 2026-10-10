/**
 * HEALTHY LIFE — Modern Minimalist Apple-Inspired Fitness Platform
 * Master JavaScript Application Controller
 * Features: Multi-Step Questionnaire, Diet Generator, Dynamic Meal Replacement,
 * Affordable Food Database, Beginner Workout Plan, Rest Timer, and Progress Dashboard.
 */

/* --------------------------------------------------------------------------
   0. FOOD DATABASE (Affordable Indian Fitness Foods with Realistic Costs & Macros)
   -------------------------------------------------------------------------- */
const FOOD_DATABASE = [
  // --- PROTEIN SOURCES ---
  {
    id: 'soya_chunks',
    name: 'Soya Chunks',
    category: 'Protein',
    diet: 'veg',
    serving: '50g (Dry)',
    price: 12,
    calories: 172,
    protein: 26.0,
    carbs: 16.0,
    fats: 0.3,
    efficiency: 21.7 // g protein per ₹10
  },
  {
    id: 'whole_eggs',
    name: 'Whole Eggs (Boiled/Omelette)',
    category: 'Protein',
    diet: 'egg',
    serving: '3 Large Eggs',
    price: 18,
    calories: 210,
    protein: 18.0,
    carbs: 1.5,
    fats: 15.0,
    efficiency: 10.0
  },
  {
    id: 'cow_milk',
    name: 'Toned Milk',
    category: 'Protein',
    diet: 'veg',
    serving: '250 ml (1 Glass)',
    price: 15,
    calories: 150,
    protein: 8.0,
    carbs: 12.0,
    fats: 7.5,
    efficiency: 5.3
  },
  {
    id: 'fresh_curd',
    name: 'Fresh Curd / Dahi',
    category: 'Protein',
    diet: 'veg',
    serving: '200g (1 Bowl)',
    price: 16,
    calories: 124,
    protein: 8.2,
    carbs: 8.8,
    fats: 6.2,
    efficiency: 5.1
  },
  {
    id: 'paneer_fresh',
    name: 'Fresh Paneer',
    category: 'Protein',
    diet: 'veg',
    serving: '100g',
    price: 40,
    calories: 265,
    protein: 18.0,
    carbs: 3.2,
    fats: 20.0,
    efficiency: 4.5
  },
  {
    id: 'yellow_dal',
    name: 'Moong / Toor Dal',
    category: 'Protein',
    diet: 'veg',
    serving: '50g dry (1 Big Bowl)',
    price: 14,
    calories: 175,
    protein: 12.0,
    carbs: 30.0,
    fats: 1.0,
    efficiency: 8.5
  },
  {
    id: 'rajma_curry',
    name: 'Rajma / Kidney Beans',
    category: 'Protein',
    diet: 'veg',
    serving: '60g dry (Cooked Curry)',
    price: 16,
    calories: 200,
    protein: 13.5,
    carbs: 36.0,
    fats: 1.0,
    efficiency: 8.4
  },
  {
    id: 'kala_chana',
    name: 'Boiled Kala Chana / Sprouts',
    category: 'Protein',
    diet: 'veg',
    serving: '60g dry',
    price: 15,
    calories: 216,
    protein: 12.5,
    carbs: 37.0,
    fats: 3.0,
    efficiency: 8.3
  },
  {
    id: 'roasted_sattu',
    name: 'Chana Sattu Drink',
    category: 'Protein',
    diet: 'veg',
    serving: '50g (2-3 Scoops)',
    price: 12,
    calories: 195,
    protein: 13.0,
    carbs: 32.0,
    fats: 2.5,
    efficiency: 10.8
  },
  {
    id: 'chicken_breast',
    name: 'Chicken Breast (Cooked)',
    category: 'Protein',
    diet: 'nonveg',
    serving: '150g',
    price: 55,
    calories: 195,
    protein: 36.0,
    carbs: 0.0,
    fats: 4.5,
    efficiency: 6.5
  },
  {
    id: 'local_fish',
    name: 'Fresh Local Fish (Curry/Pan-seared)',
    category: 'Protein',
    diet: 'nonveg',
    serving: '150g',
    price: 60,
    calories: 165,
    protein: 28.0,
    carbs: 0.0,
    fats: 5.0,
    efficiency: 4.7
  },

  // --- CARBOHYDRATES ---
  {
    id: 'white_rice',
    name: 'Steamed Rice (White/Brown)',
    category: 'Carbohydrates',
    diet: 'veg',
    serving: '75g dry (1 Full Plate)',
    price: 8,
    calories: 265,
    protein: 5.2,
    carbs: 58.0,
    fats: 0.6,
    efficiency: 6.5
  },
  {
    id: 'wheat_roti',
    name: 'Whole Wheat Roti',
    category: 'Carbohydrates',
    diet: 'veg',
    serving: '2 Medium Rotis',
    price: 6,
    calories: 180,
    protein: 6.0,
    carbs: 36.0,
    fats: 1.0,
    efficiency: 10.0
  },
  {
    id: 'rolled_oats',
    name: 'Rolled Oats (Porridge)',
    category: 'Carbohydrates',
    diet: 'veg',
    serving: '50g',
    price: 16,
    calories: 190,
    protein: 6.5,
    carbs: 33.0,
    fats: 3.5,
    efficiency: 4.1
  },
  {
    id: 'poha_veggies',
    name: 'Poha with Peanuts & Veggies',
    category: 'Carbohydrates',
    diet: 'veg',
    serving: '60g dry',
    price: 10,
    calories: 225,
    protein: 5.0,
    carbs: 46.0,
    fats: 3.0,
    efficiency: 5.0
  },
  {
    id: 'boiled_potatoes',
    name: 'Boiled Potatoes',
    category: 'Carbohydrates',
    diet: 'veg',
    serving: '200g (2 medium)',
    price: 6,
    calories: 160,
    protein: 4.0,
    carbs: 37.0,
    fats: 0.2,
    efficiency: 6.7
  },
  {
    id: 'wheat_bread',
    name: 'Whole Wheat Bread',
    category: 'Carbohydrates',
    diet: 'veg',
    serving: '3 Slices',
    price: 10,
    calories: 200,
    protein: 7.0,
    carbs: 38.0,
    fats: 2.0,
    efficiency: 7.0
  },

  // --- HEALTHY FATS ---
  {
    id: 'roasted_peanuts',
    name: 'Roasted Peanuts',
    category: 'Healthy Fats',
    diet: 'veg',
    serving: '40g (1 Handful)',
    price: 10,
    calories: 226,
    protein: 10.2,
    carbs: 6.5,
    fats: 19.5,
    efficiency: 10.2
  },
  {
    id: 'peanut_butter',
    name: 'Pure Peanut Butter',
    category: 'Healthy Fats',
    diet: 'veg',
    serving: '30g (1 Large Spoon)',
    price: 14,
    calories: 185,
    protein: 8.0,
    carbs: 6.0,
    fats: 15.0,
    efficiency: 5.7
  },
  {
    id: 'flax_chia_seeds',
    name: 'Flax & Chia Seeds',
    category: 'Healthy Fats',
    diet: 'veg',
    serving: '20g',
    price: 12,
    calories: 105,
    protein: 4.0,
    carbs: 6.0,
    fats: 8.5,
    efficiency: 3.3
  },
  {
    id: 'desi_ghee_oil',
    name: 'Desi Ghee / Mustard Oil',
    category: 'Healthy Fats',
    diet: 'veg',
    serving: '10 ml',
    price: 10,
    calories: 90,
    protein: 0.0,
    carbs: 0.0,
    fats: 10.0,
    efficiency: 0.0
  },

  // --- FRUITS & VEGETABLES ---
  {
    id: 'fresh_bananas',
    name: 'Fresh Bananas',
    category: 'Fruits & Vegetables',
    diet: 'veg',
    serving: '2 Medium Bananas',
    price: 10,
    calories: 180,
    protein: 2.2,
    carbs: 46.0,
    fats: 0.4,
    efficiency: 2.2
  },
  {
    id: 'seasonal_sabzi',
    name: 'Seasonal Mixed Vegetables',
    category: 'Fruits & Vegetables',
    diet: 'veg',
    serving: '150g Cooked Sabzi',
    price: 15,
    calories: 85,
    protein: 3.0,
    carbs: 11.0,
    fats: 3.5,
    efficiency: 2.0
  },
  {
    id: 'cucumber_tomato_salad',
    name: 'Cucumber & Tomato Salad',
    category: 'Fruits & Vegetables',
    diet: 'veg',
    serving: '1 Big Bowl',
    price: 10,
    calories: 40,
    protein: 1.8,
    carbs: 8.0,
    fats: 0.3,
    efficiency: 1.8
  },
  {
    id: 'fresh_apple',
    name: 'Fresh Apple',
    category: 'Fruits & Vegetables',
    diet: 'veg',
    serving: '1 Medium Apple',
    price: 20,
    calories: 95,
    protein: 0.5,
    carbs: 25.0,
    fats: 0.3,
    efficiency: 0.25
  },
  {
    id: 'fresh_papaya',
    name: 'Fresh Papaya Bowl',
    category: 'Fruits & Vegetables',
    diet: 'veg',
    serving: '200g Slices',
    price: 15,
    calories: 86,
    protein: 1.2,
    carbs: 21.0,
    fats: 0.4,
    efficiency: 0.8
  }
];

/* --------------------------------------------------------------------------
   1. GLOBAL APPLICATION STATE
   -------------------------------------------------------------------------- */
const APP_STATE = {
  profile: {
    name: 'Alex',
    age: 20,
    gender: 'male',
    height: 175,
    weight: 68,
    activity: 'light',
    experience: 'beginner',
    goal: 'muscle_gain',
    budget: 250,
    diet: 'eggetarian',
    mealsCount: 4,
    workoutLoc: 'gym',
    equipment: 'full_gym',
    days: 4,
    allergies: 'none',
    dislikes: ''
  },
  currentPlan: null,
  restTimer: {
    duration: 60,
    remaining: 60,
    interval: null,
    isRunning: false
  },
  progress: {
    weightHistory: [
      { date: '2026-09-01', weight: 66.5, change: '0.0' },
      { date: '2026-09-08', weight: 67.0, change: '+0.5' },
      { date: '2026-09-15', weight: 67.4, change: '+0.4' },
      { date: '2026-09-22', weight: 67.8, change: '+0.4' },
      { date: '2026-09-28', weight: 68.0, change: '+0.2' }
    ],
    expenses: [
      { id: 1, name: 'Breakfast (Eggs, Roti, Milk)', cost: 55 },
      { id: 2, name: 'Lunch (Rice, Dal, Curd, Sabzi)', cost: 65 },
      { id: 3, name: 'Evening Snack (Banana & Peanuts)', cost: 30 },
      { id: 4, name: 'Dinner (Rotis & Soya Chunks)', cost: 75 }
    ],
    habits: [
      { day: 'Mon', diet: true, workout: true },
      { day: 'Tue', diet: true, workout: true },
      { day: 'Wed', diet: true, workout: false },
      { day: 'Thu', diet: true, workout: true },
      { day: 'Fri', diet: true, workout: true },
      { day: 'Sat', diet: false, workout: true },
      { day: 'Sun', diet: true, workout: false }
    ],
    workoutCompletedCount: 0
  }
};

/* --------------------------------------------------------------------------
   2. INITIALIZATION ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromLocalStorage();
  initTheme();
  initNavigation();
  initWizard();
  initFoodDatabase();
  initWorkoutSection();
  initRestTimer();
  initDashboard();
  initContactForm();
  initSmoothScroll();
  generateAndRenderPlan();
});

/* --------------------------------------------------------------------------
   3. LOCAL STORAGE PERSISTENCE
   -------------------------------------------------------------------------- */
function saveStateToLocalStorage() {
  try {
    localStorage.setItem('healthylife_profile', JSON.stringify(APP_STATE.profile));
    localStorage.setItem('healthylife_progress', JSON.stringify(APP_STATE.progress));
    if (APP_STATE.currentPlan) {
      localStorage.setItem('healthylife_plan', JSON.stringify(APP_STATE.currentPlan));
    }
  } catch (e) {
    console.warn('LocalStorage unavailable:', e);
  }
}

function loadStateFromLocalStorage() {
  try {
    const savedProfile = localStorage.getItem('healthylife_profile');
    const savedProgress = localStorage.getItem('healthylife_progress');
    const savedPlan = localStorage.getItem('healthylife_plan');

    if (savedProfile) APP_STATE.profile = Object.assign(APP_STATE.profile, JSON.parse(savedProfile));
    if (savedProgress) APP_STATE.progress = Object.assign(APP_STATE.progress, JSON.parse(savedProgress));
    if (savedPlan) APP_STATE.currentPlan = JSON.parse(savedPlan);
  } catch (e) {
    console.warn('Failed to parse localStorage:', e);
  }
}

/* --------------------------------------------------------------------------
   4. THEME & NAVIGATION
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('healthylife_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('healthylife_theme', nextTheme);
      showToast(`Switched to ${nextTheme.toUpperCase()} theme`);
    });
  }
}

function initNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta');

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    backdrop.classList.toggle('open', isOpen);
    mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (mobileBtn) mobileBtn.addEventListener('click', () => toggleMenu());
  if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
  if (backdrop) backdrop.addEventListener('click', () => toggleMenu(false));

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE MULTI-STEP WIZARD (CREATE MY PLAN)
   -------------------------------------------------------------------------- */
function initWizard() {
  let currentStep = 1;
  const totalSteps = 7;
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const submitBtn = document.getElementById('wizard-submit-btn');
  const progressFill = document.getElementById('wizard-progress-fill');
  const stepIndicators = document.querySelectorAll('.step-indicator');
  const panels = document.querySelectorAll('.wizard-step-panel');
  const form = document.getElementById('plan-wizard-form');

  // Workout location toggle equipment box
  const workoutLocRadios = document.querySelectorAll('input[name="workout_loc"]');
  const gymEquipBox = document.getElementById('gym-equipment-box');
  const homeEquipBox = document.getElementById('home-equipment-box');

  workoutLocRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const isGym = e.target.value === 'gym';
      if (gymEquipBox) gymEquipBox.classList.toggle('hidden', !isGym);
      if (homeEquipBox) homeEquipBox.classList.toggle('hidden', isGym);
    });
  });

  // Selectable card click styling
  document.querySelectorAll('.selectable-card').forEach(card => {
    card.addEventListener('click', function() {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        const name = radio.getAttribute('name');
        document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
          r.closest('.selectable-card')?.classList.remove('active');
        });
        this.classList.add('active');
        radio.checked = true;
      }
    });
  });

  // Budget Chips & Range Slider sync
  const budgetInput = document.getElementById('input-budget');
  const budgetSlider = document.getElementById('slider-budget');
  const budgetChips = document.querySelectorAll('.budget-chip');
  const budgetInsightText = document.getElementById('budget-insight-text');

  function updateBudgetDisplay(val) {
    const amount = parseInt(val, 10) || 250;
    if (budgetInput) budgetInput.value = amount;
    if (budgetSlider) budgetSlider.value = amount;

    budgetChips.forEach(chip => {
      chip.classList.toggle('active', parseInt(chip.getAttribute('data-budget'), 10) === amount);
    });

    if (budgetInsightText) {
      if (amount < 200) {
        budgetInsightText.innerHTML = `<strong>₹${amount} / day (Hostel Budget):</strong> High focus on Soya Chunks (₹12), Eggs (₹18), Dal (₹14), and Bananas (₹10) for maximum protein per Rupee.`;
      } else if (amount <= 300) {
        budgetInsightText.innerHTML = `<strong>₹${amount} / day (Smart Student):</strong> Optimal sweet spot! Allows high protein meals with eggs/paneer, milk, soya chunks, peanuts, oats, curd, and seasonal fruits.`;
      } else {
        budgetInsightText.innerHTML = `<strong>₹${amount} / day (Surplus Budget):</strong> Premium options including Chicken Breast, Fish, Paneer, Mixed Nuts, and Whey Protein choices.`;
      }
    }
  }

  budgetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-budget');
      updateBudgetDisplay(val);
    });
  });

  if (budgetSlider) {
    budgetSlider.addEventListener('input', (e) => updateBudgetDisplay(e.target.value));
  }
  if (budgetInput) {
    budgetInput.addEventListener('input', (e) => updateBudgetDisplay(e.target.value));
  }

  function showStep(step) {
    currentStep = step;
    panels.forEach(p => p.classList.remove('active'));
    const activePanel = document.querySelector(`.wizard-step-panel[data-step="${step}"]`);
    if (activePanel) activePanel.classList.add('active');

    // Update progress bar & indicators
    const pct = Math.round((step / totalSteps) * 100);
    if (progressFill) progressFill.style.width = `${pct}%`;

    stepIndicators.forEach(ind => {
      const s = parseInt(ind.getAttribute('data-step'), 10);
      ind.classList.toggle('active', s === step);
      ind.classList.toggle('completed', s < step);
    });

    // Buttons visibility
    if (prevBtn) prevBtn.disabled = step === 1;
    if (step === totalSteps) {
      if (nextBtn) nextBtn.classList.add('hidden');
      if (submitBtn) submitBtn.classList.remove('hidden');
    } else {
      if (nextBtn) nextBtn.classList.remove('hidden');
      if (submitBtn) submitBtn.classList.add('hidden');
    }
  }

  stepIndicators.forEach(ind => {
    ind.addEventListener('click', () => {
      const targetStep = parseInt(ind.getAttribute('data-step'), 10);
      showStep(targetStep);
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        showStep(currentStep + 1);
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      collectFormData();
      generateAndRenderPlan();
      saveStateToLocalStorage();
      showToast('🚀 Your Personalized Plan Has Been Generated!');
      const dietSec = document.getElementById('diet-plan');
      if (dietSec) dietSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Populate initial values into form
  populateFormFromState();
}

function populateFormFromState() {
  const p = APP_STATE.profile;
  const nameInput = document.getElementById('input-name');
  const ageInput = document.getElementById('input-age');
  const heightInput = document.getElementById('input-height');
  const weightInput = document.getElementById('input-weight');
  const activitySelect = document.getElementById('select-activity');

  if (nameInput) nameInput.value = p.name;
  if (ageInput) ageInput.value = p.age;
  if (heightInput) heightInput.value = p.height;
  if (weightInput) weightInput.value = p.weight;
  if (activitySelect) activitySelect.value = p.activity;

  // Radios
  ['gender', 'experience', 'goal', 'diet', 'meals_count', 'workout_loc'].forEach(name => {
    const val = name === 'meals_count' ? p.mealsCount.toString() : p[name === 'workout_loc' ? 'workoutLoc' : name];
    const r = document.querySelector(`input[name="${name}"][value="${val}"]`);
    if (r) {
      r.checked = true;
      r.closest('.selectable-card')?.classList.add('active');
    }
  });

  const budgetInput = document.getElementById('input-budget');
  if (budgetInput) budgetInput.value = p.budget;
}

function collectFormData() {
  const p = APP_STATE.profile;
  p.name = document.getElementById('input-name')?.value.trim() || 'Alex';
  p.age = parseInt(document.getElementById('input-age')?.value, 10) || 20;
  p.height = parseInt(document.getElementById('input-height')?.value, 10) || 175;
  p.weight = parseFloat(document.getElementById('input-weight')?.value) || 68;
  p.activity = document.getElementById('select-activity')?.value || 'light';

  p.gender = document.querySelector('input[name="gender"]:checked')?.value || 'male';
  p.experience = document.querySelector('input[name="experience"]:checked')?.value || 'beginner';
  p.goal = document.querySelector('input[name="goal"]:checked')?.value || 'muscle_gain';
  p.budget = parseInt(document.getElementById('input-budget')?.value, 10) || 250;
  p.diet = document.querySelector('input[name="diet"]:checked')?.value || 'eggetarian';
  p.mealsCount = parseInt(document.querySelector('input[name="meals_count"]:checked')?.value, 10) || 4;
  p.workoutLoc = document.querySelector('input[name="workout_loc"]:checked')?.value || 'gym';

  if (p.workoutLoc === 'gym') {
    p.equipment = document.getElementById('select-gym-equipment')?.value || 'full_gym';
  } else {
    p.equipment = document.getElementById('select-home-equipment')?.value || 'bodyweight';
  }

  p.days = parseInt(document.getElementById('select-days')?.value, 10) || 4;
  p.allergies = document.getElementById('input-allergies')?.value || 'none';
  p.dislikes = document.getElementById('input-dislikes')?.value.trim() || '';
}

/* --------------------------------------------------------------------------
   6. NUTRITION & PLAN GENERATOR ENGINE
   -------------------------------------------------------------------------- */
function calculateNutritionMetrics(p) {
  // Mifflin-St Jeor Equation
  let bmr = 10 * p.weight + 6.25 * p.height - 5 * p.age;
  bmr += (p.gender === 'female') ? -161 : 5;

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725
  };
  const tdee = Math.round(bmr * (activityMultipliers[p.activity] || 1.375));

  let targetCalories = tdee;
  let proteinTarget = Math.round(p.weight * 1.5);

  if (p.goal === 'muscle_gain') {
    targetCalories = tdee + 350;
    proteinTarget = Math.round(p.weight * 1.75);
  } else if (p.goal === 'fat_loss') {
    targetCalories = Math.max(1400, tdee - 400);
    proteinTarget = Math.round(p.weight * 1.9);
  } else {
    targetCalories = tdee;
    proteinTarget = Math.round(p.weight * 1.3);
  }

  // Macronutrient calculation
  const fatsTarget = Math.round((targetCalories * 0.25) / 9);
  const remainingCals = targetCalories - (proteinTarget * 4 + fatsTarget * 9);
  const carbsTarget = Math.max(100, Math.round(remainingCals / 4));

  return { bmr, tdee, targetCalories, proteinTarget, carbsTarget, fatsTarget };
}

function generateDietPlanStructure(profile, metrics) {
  const { diet, budget, mealsCount } = profile;
  const isVeg = diet === 'vegetarian';
  const isEgg = diet === 'eggetarian';
  const isNonVeg = diet === 'non_vegetarian';

  const meals = [];

  // 1. Breakfast Blueprint
  let bfastItems = [];
  let bfastCost = 55;
  let bfastPro = 30;
  let bfastCal = 520;

  if (isNonVeg || isEgg) {
    bfastItems = [
      { name: '3 Whole Boiled Eggs (or Omelette)', cost: 18, pro: 18, cal: 210 },
      { name: '2 Whole Wheat Rotis / 3 Bread Slices', cost: 10, pro: 6, cal: 180 },
      { name: '1 Glass Toned Milk (250ml)', cost: 15, pro: 8, cal: 150 },
      { name: '1 Medium Banana', cost: 5, pro: 1, cal: 90 }
    ];
    bfastCost = 48;
    bfastPro = 33;
    bfastCal = 630;
  } else {
    bfastItems = [
      { name: 'Rolled Oats (50g) in Warm Milk (250ml)', cost: 30, pro: 14.5, cal: 340 },
      { name: 'Roasted Peanuts (30g) + 1 Banana', cost: 12, pro: 8.5, cal: 260 },
      { name: '1 Spoon Chia/Flax Seeds', cost: 6, pro: 2, cal: 50 }
    ];
    bfastCost = 48;
    bfastPro = 25;
    bfastCal = 650;
  }

  meals.push({
    id: 'meal_breakfast',
    title: 'Breakfast',
    time: '8:00 AM — 9:00 AM',
    items: bfastItems,
    cost: bfastCost,
    protein: bfastPro,
    calories: bfastCal,
    carbs: 70,
    fats: 18,
    icon: '🍳'
  });

  // 2. Mid-Morning Snack (if 5 meals)
  if (mealsCount === 5) {
    meals.push({
      id: 'meal_midmorning',
      title: 'Mid-Morning Fuel',
      time: '11:00 AM',
      items: [
        { name: 'Roasted Chana Sattu Drink (40g) with Lemon', cost: 12, pro: 10, cal: 150 },
        { name: '1 Seasonal Fruit (Papaya / Apple)', cost: 15, pro: 1, cal: 85 }
      ],
      cost: 27,
      protein: 11,
      calories: 235,
      carbs: 42,
      fats: 2,
      icon: '🥤'
    });
  }

  // 3. Lunch Blueprint
  let lunchItems = [];
  let lunchCost = 65;
  let lunchPro = 32;
  let lunchCal = 680;

  if (isNonVeg && budget >= 300) {
    lunchItems = [
      { name: 'Chicken Breast (150g cooked)', cost: 55, pro: 36, cal: 195 },
      { name: 'Steamed Rice (1 Bowl / 75g raw)', cost: 8, pro: 5, cal: 265 },
      { name: 'Cucumber & Tomato Salad', cost: 8, pro: 1.5, cal: 35 },
      { name: 'Fresh Curd / Dahi (100g)', cost: 8, pro: 4, cal: 62 }
    ];
    lunchCost = 79;
    lunchPro = 46.5;
    lunchCal = 557;
  } else {
    lunchItems = [
      { name: 'Thick Moong/Toor Dal (1 Big Bowl)', cost: 14, pro: 12, cal: 175 },
      { name: 'Fresh Curd / Dahi (200g)', cost: 16, pro: 8.2, cal: 124 },
      { name: 'Steamed Rice or 3 Rotis', cost: 10, pro: 7, cal: 270 },
      { name: 'Seasonal Green Vegetable Sabzi', cost: 15, pro: 3, cal: 85 }
    ];
    lunchCost = 55;
    lunchPro = 30.2;
    lunchCal = 654;
  }

  meals.push({
    id: 'meal_lunch',
    title: 'Lunch',
    time: '1:30 PM — 2:30 PM',
    items: lunchItems,
    cost: lunchCost,
    protein: lunchPro,
    calories: lunchCal,
    carbs: 85,
    fats: 16,
    icon: '🍛'
  });

  // 4. Evening Pre-Workout Snack (if 4 or 5 meals)
  if (mealsCount >= 4) {
    meals.push({
      id: 'meal_snack',
      title: 'Evening Snack / Pre-Workout',
      time: '5:30 PM — 6:30 PM',
      items: [
        { name: '2 Medium Bananas', cost: 10, pro: 2.2, cal: 180 },
        { name: 'Roasted Peanuts (40g) / Peanut Butter', cost: 10, pro: 10.2, cal: 226 },
        { name: 'Warm Black Coffee / Water', cost: 4, pro: 0, cal: 5 }
      ],
      cost: 24,
      protein: 12.4,
      calories: 411,
      carbs: 52,
      fats: 19.5,
      icon: '🍌'
    });
  }

  // 5. Dinner Blueprint
  let dinnerItems = [];
  let dinnerCost = 65;
  let dinnerPro = 36;
  let dinnerCal = 620;

  if (isVeg || isEgg || isNonVeg) {
    dinnerItems = [
      { name: 'High-Protein Soya Chunks Curry (50g dry)', cost: 12, pro: 26, cal: 172 },
      { name: '2 Whole Wheat Rotis', cost: 6, pro: 6, cal: 180 },
      { name: 'Fresh Paneer (50g) or Boiled Dal', cost: 20, pro: 9, cal: 132 },
      { name: 'Fresh Green Salad with Lemon', cost: 8, pro: 1.5, cal: 35 }
    ];
    dinnerCost = 46;
    dinnerPro = 42.5;
    dinnerCal = 519;
  }

  meals.push({
    id: 'meal_dinner',
    title: 'Dinner',
    time: '8:30 PM — 9:30 PM',
    items: dinnerItems,
    cost: dinnerCost,
    protein: dinnerPro,
    calories: dinnerCal,
    carbs: 65,
    fats: 15,
    icon: '🍲'
  });

  // Calculate total daily cost & macros
  const totalCost = meals.reduce((sum, m) => sum + m.cost, 0);
  const totalPro = Math.round(meals.reduce((sum, m) => sum + m.protein, 0));
  const totalCal = Math.round(meals.reduce((sum, m) => sum + m.calories, 0));
  const remaining = Math.max(0, budget - totalCost);

  return {
    metrics,
    meals,
    totalCost,
    remaining,
    totalPro,
    totalCal
  };
}

function generateAndRenderPlan() {
  const metrics = calculateNutritionMetrics(APP_STATE.profile);
  APP_STATE.currentPlan = generateDietPlanStructure(APP_STATE.profile, metrics);
  renderDietPlan(APP_STATE.currentPlan, APP_STATE.profile);
  renderWorkoutPlan(APP_STATE.profile);
  updateDashboardFromPlan();
}

/* --------------------------------------------------------------------------
   7. RENDER PERSONALIZED DIET PLAN
   -------------------------------------------------------------------------- */
function renderDietPlan(plan, profile) {
  const { metrics, meals, totalCost, remaining, totalPro, totalCal } = plan;

  // Header Title & Meta
  const goalNames = {
    muscle_gain: 'Muscle Gain',
    fat_loss: 'Fat Loss',
    general_fitness: 'General Fitness'
  };
  const userTitle = document.getElementById('plan-user-title');
  const userMeta = document.getElementById('plan-user-meta');
  if (userTitle) userTitle.textContent = `${profile.name}'s ${goalNames[profile.goal]} Diet Plan`;
  if (userMeta) {
    userMeta.innerHTML = `Goal: <strong>${goalNames[profile.goal]}</strong> • Daily Food Budget: <strong>₹${profile.budget}</strong> • Estimated Calories: <strong>~${metrics.targetCalories.toLocaleString()} kcal</strong>`;
  }

  // Macro Overview Cards
  const calEl = document.getElementById('macro-calories');
  const proEl = document.getElementById('macro-protein');
  const carbEl = document.getElementById('macro-carbs');
  const fatEl = document.getElementById('macro-fats');
  const tdeeNote = document.getElementById('macro-tdee-note');
  const proNote = document.getElementById('macro-pro-kg-note');

  if (calEl) calEl.innerHTML = `${metrics.targetCalories.toLocaleString()} <small>kcal</small>`;
  if (proEl) proEl.textContent = `~${metrics.proteinTarget}g`;
  if (carbEl) carbEl.textContent = `~${metrics.carbsTarget}g`;
  if (fatEl) fatEl.textContent = `~${metrics.fatsTarget}g`;
  if (tdeeNote) tdeeNote.textContent = `BMR: ${metrics.bmr} • TDEE: ${metrics.tdee}`;
  if (proNote) proNote.textContent = `~${(metrics.proteinTarget / profile.weight).toFixed(2)}g per kg bodyweight`;

  // Budget Tracker Progress Bar
  const estCostEl = document.getElementById('plan-est-cost');
  const limitCostEl = document.getElementById('plan-limit-cost');
  const savingsBadge = document.getElementById('plan-savings-badge');
  const budgetFill = document.getElementById('budget-bar-fill');
  const maxLimitLbl = document.getElementById('budget-max-lbl');
  const midpointLbl = document.getElementById('budget-midpoint-lbl');

  if (estCostEl) estCostEl.textContent = `₹${totalCost}`;
  if (limitCostEl) limitCostEl.textContent = `₹${profile.budget}`;
  if (savingsBadge) {
    if (remaining >= 0) {
      savingsBadge.innerHTML = `🎉 ₹${remaining} Under Daily Budget`;
      savingsBadge.className = 'budget-savings-badge';
    } else {
      savingsBadge.innerHTML = `⚠️ ₹${Math.abs(remaining)} Over Budget`;
      savingsBadge.style.color = '#EF4444';
      savingsBadge.style.background = 'rgba(239, 68, 68, 0.15)';
    }
  }

  const spendPct = Math.min(100, Math.round((totalCost / profile.budget) * 100));
  if (budgetFill) budgetFill.style.width = `${spendPct}%`;
  if (maxLimitLbl) maxLimitLbl.textContent = `₹${profile.budget} Max Limit`;
  if (midpointLbl) midpointLbl.textContent = `₹${Math.round(profile.budget / 2)} (50%)`;

  // Render Meal Cards
  const container = document.getElementById('meals-container');
  if (!container) return;
  container.innerHTML = '';

  meals.forEach((meal, idx) => {
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.innerHTML = `
      <div class="meal-card-header">
        <div class="meal-card-title-group">
          <span class="meal-slot-icon">${meal.icon}</span>
          <div>
            <h4 class="meal-name">${meal.title}</h4>
            <span style="font-size: 0.75rem; color: var(--text-tertiary);">${meal.time}</span>
          </div>
        </div>
        <div class="meal-cost-badge">Est. Cost: ₹${meal.cost}</div>
      </div>

      <div class="meal-items-list">
        ${meal.items.map(item => `
          <div class="meal-item-row">
            <div class="meal-item-name">
              <span class="item-bullet">●</span>
              <span>${item.name}</span>
            </div>
            <span class="meal-item-cost">₹${item.cost}</span>
          </div>
        `).join('')}
      </div>

      <div class="meal-macros-row">
        <span class="meal-macro-chip">🔥 ${meal.calories} kcal</span>
        <span class="meal-macro-chip">🥩 ${Math.round(meal.protein)}g Protein</span>
        <span class="meal-macro-chip">🌾 ${meal.carbs}g Carbs</span>
        <span class="meal-macro-chip">🥑 ${meal.fats}g Fats</span>
      </div>

      <button type="button" class="btn-replace-meal" data-meal-id="${meal.id}">
        <span>🔄 Replace Meal</span>
      </button>
    `;
    container.appendChild(card);
  });

  // Attach Replace Meal Listeners
  document.querySelectorAll('.btn-replace-meal').forEach(btn => {
    btn.addEventListener('click', () => {
      const mealId = btn.getAttribute('data-meal-id');
      openMealReplacementModal(mealId);
    });
  });

  // Print & Regenerate Handlers
  const printBtn = document.getElementById('btn-print-plan');
  if (printBtn) {
    printBtn.onclick = () => window.print();
  }

  const regenBtn = document.getElementById('btn-regenerate-diet');
  if (regenBtn) {
    regenBtn.onclick = () => {
      generateAndRenderPlan();
      showToast('🔄 Meal Plan Regenerated with Fresh Variations!');
    };
  }
}

/* --------------------------------------------------------------------------
   8. DYNAMIC MEAL REPLACEMENT MODAL SYSTEM
   -------------------------------------------------------------------------- */
function openMealReplacementModal(mealId) {
  const modal = document.getElementById('meal-replace-modal');
  const titleEl = document.getElementById('replace-modal-meal-name');
  const container = document.getElementById('alternatives-container');
  const closeBtn = document.getElementById('modal-close-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');

  const currentMeal = APP_STATE.currentPlan.meals.find(m => m.id === mealId);
  if (!currentMeal || !modal) return;

  if (titleEl) titleEl.textContent = `Replace ${currentMeal.title}`;

  // Generate 3-4 tailored alternatives matching diet preference & budget
  const alternatives = generateMealAlternatives(currentMeal, APP_STATE.profile);

  if (container) {
    container.innerHTML = '';
    alternatives.forEach((alt, i) => {
      const optionLetter = String.fromCharCode(65 + i); // A, B, C, D
      const altCard = document.createElement('div');
      altCard.className = 'alternative-card';
      altCard.innerHTML = `
        <div class="alt-top-row">
          <span class="alt-name">Option ${optionLetter}: ${alt.title}</span>
          <span class="alt-cost">₹${alt.cost}</span>
        </div>
        <div class="alt-items">
          ${alt.items.map(it => `<span>• ${it.name}</span>`).join(' ')}
        </div>
        <div class="alt-macros">
          <span>🔥 ~${alt.calories} kcal</span> •
          <span style="color: var(--color-green-light); font-weight:700;">🥩 ~${alt.protein}g Protein</span> •
          <span>🌾 ~${alt.carbs}g Carbs</span> •
          <span>⚡ Est: ₹${alt.cost}</span>
        </div>
      `;

      altCard.addEventListener('click', () => {
        applyMealReplacement(mealId, alt);
        closeModal();
      });

      container.appendChild(altCard);
    });
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function generateMealAlternatives(meal, profile) {
  const isEggOrNonVeg = profile.diet !== 'vegetarian';

  if (meal.id === 'meal_breakfast') {
    return [
      {
        title: 'Boiled Eggs + Whole Wheat Roti + Milk',
        items: [
          { name: '3 Whole Eggs', cost: 18, pro: 18, cal: 210 },
          { name: '2 Rotis', cost: 6, pro: 6, cal: 180 },
          { name: '1 Glass Milk (250ml)', cost: 15, pro: 8, cal: 150 }
        ],
        cost: 39,
        protein: 32,
        calories: 540,
        carbs: 48,
        fats: 23,
        icon: '🍳'
      },
      {
        title: 'Poha with Roasted Peanuts + Curd + Banana',
        items: [
          { name: 'Poha with Veggies (60g)', cost: 10, pro: 5, cal: 225 },
          { name: 'Roasted Peanuts (30g)', cost: 8, pro: 7.5, cal: 170 },
          { name: 'Fresh Curd (200g)', cost: 16, pro: 8.2, cal: 124 },
          { name: '1 Banana', cost: 5, pro: 1, cal: 90 }
        ],
        cost: 39,
        protein: 21.7,
        calories: 609,
        carbs: 85,
        fats: 18,
        icon: '🥣'
      },
      {
        title: 'Rolled Oats + Warm Milk + Banana + Peanuts',
        items: [
          { name: 'Rolled Oats (50g)', cost: 16, pro: 6.5, cal: 190 },
          { name: '1 Glass Milk (250ml)', cost: 15, pro: 8, cal: 150 },
          { name: '1 Banana + Peanuts (30g)', cost: 13, pro: 8.5, cal: 260 }
        ],
        cost: 44,
        protein: 23,
        calories: 600,
        carbs: 82,
        fats: 19,
        icon: '🌾'
      },
      {
        title: 'Soya Bhurji (40g) + 2 Whole Wheat Rotis',
        items: [
          { name: 'Soya Chunks Bhurji with Onion & Tomatoes', cost: 12, pro: 21, cal: 150 },
          { name: '2 Rotis', cost: 6, pro: 6, cal: 180 },
          { name: '1 Glass Buttermilk / Chaas', cost: 10, pro: 4, cal: 60 }
        ],
        cost: 28,
        protein: 31,
        calories: 390,
        carbs: 46,
        fats: 8,
        icon: '🌱'
      }
    ];
  } else if (meal.id === 'meal_lunch') {
    return [
      {
        title: 'Rice + Moong Dal + Curd + Green Sabzi',
        items: [
          { name: 'Steamed Rice (1 Bowl)', cost: 8, pro: 5, cal: 265 },
          { name: 'Thick Moong Dal (1 Bowl)', cost: 14, pro: 12, cal: 175 },
          { name: 'Fresh Curd (200g)', cost: 16, pro: 8.2, cal: 124 },
          { name: 'Mixed Veg Sabzi', cost: 15, pro: 3, cal: 85 }
        ],
        cost: 53,
        protein: 28.2,
        calories: 649,
        carbs: 98,
        fats: 14,
        icon: '🍛'
      },
      {
        title: 'Rajma Chawal + Fresh Salad + Curd',
        items: [
          { name: 'Steamed White Rice', cost: 8, pro: 5, cal: 265 },
          { name: 'Punjabi Rajma Curry (60g dry)', cost: 16, pro: 13.5, cal: 200 },
          { name: 'Fresh Curd (150g)', cost: 12, pro: 6.2, cal: 95 },
          { name: 'Cucumber Salad', cost: 8, pro: 1.5, cal: 35 }
        ],
        cost: 44,
        protein: 26.2,
        calories: 595,
        carbs: 95,
        fats: 10,
        icon: '🍲'
      },
      {
        title: isEggOrNonVeg ? 'Chicken Breast (150g) + Steamed Rice + Salad' : 'Paneer Bhurji (100g) + 3 Rotis + Salad',
        items: isEggOrNonVeg ? [
          { name: 'Chicken Breast Curry', cost: 55, pro: 36, cal: 195 },
          { name: 'Steamed Rice', cost: 8, pro: 5, cal: 265 },
          { name: 'Salad', cost: 8, pro: 1.5, cal: 35 }
        ] : [
          { name: 'Fresh Paneer Bhurji (100g)', cost: 40, pro: 18, cal: 265 },
          { name: '3 Whole Wheat Rotis', cost: 9, pro: 9, cal: 270 },
          { name: 'Salad', cost: 8, pro: 1.5, cal: 35 }
        ],
        cost: isEggOrNonVeg ? 71 : 57,
        protein: isEggOrNonVeg ? 42.5 : 28.5,
        calories: isEggOrNonVeg ? 495 : 570,
        carbs: 65,
        fats: isEggOrNonVeg ? 6 : 22,
        icon: isEggOrNonVeg ? '🍗' : '🧀'
      }
    ];
  } else {
    // Dinner alternatives
    return [
      {
        title: 'Soya Chunks Curry + 3 Rotis + Fresh Salad',
        items: [
          { name: 'Soya Chunks Curry (50g dry)', cost: 12, pro: 26, cal: 172 },
          { name: '3 Whole Wheat Rotis', cost: 9, pro: 9, cal: 270 },
          { name: 'Fresh Salad', cost: 8, pro: 1.5, cal: 35 }
        ],
        cost: 29,
        protein: 36.5,
        calories: 477,
        carbs: 68,
        fats: 6,
        icon: '🌱'
      },
      {
        title: 'Kala Chana Curry + 2 Rotis + Curd',
        items: [
          { name: 'Kala Chana Curry (60g dry)', cost: 15, pro: 12.5, cal: 216 },
          { name: '2 Rotis', cost: 6, pro: 6, cal: 180 },
          { name: 'Fresh Curd (150g)', cost: 12, pro: 6.2, cal: 95 }
        ],
        cost: 33,
        protein: 24.7,
        calories: 491,
        carbs: 72,
        fats: 11,
        icon: '🥣'
      },
      {
        title: 'Egg Bhurji (3 Eggs) + 3 Rotis + Green Salad',
        items: [
          { name: '3 Whole Eggs Bhurji', cost: 18, pro: 18, cal: 210 },
          { name: '3 Rotis', cost: 9, pro: 9, cal: 270 },
          { name: 'Salad', cost: 8, pro: 1.5, cal: 35 }
        ],
        cost: 35,
        protein: 28.5,
        calories: 515,
        carbs: 58,
        fats: 18,
        icon: '🍳'
      }
    ];
  }
}

function applyMealReplacement(mealId, newMealData) {
  const mealIdx = APP_STATE.currentPlan.meals.findIndex(m => m.id === mealId);
  if (mealIdx === -1) return;

  const originalTime = APP_STATE.currentPlan.meals[mealIdx].time;
  const originalTitle = APP_STATE.currentPlan.meals[mealIdx].title;

  APP_STATE.currentPlan.meals[mealIdx] = {
    id: mealId,
    title: originalTitle,
    time: originalTime,
    items: newMealData.items,
    cost: newMealData.cost,
    protein: newMealData.protein,
    calories: newMealData.calories,
    carbs: newMealData.carbs,
    fats: newMealData.fats,
    icon: newMealData.icon
  };

  // Recalculate totals
  const totalCost = APP_STATE.currentPlan.meals.reduce((sum, m) => sum + m.cost, 0);
  const totalPro = Math.round(APP_STATE.currentPlan.meals.reduce((sum, m) => sum + m.protein, 0));
  const totalCal = Math.round(APP_STATE.currentPlan.meals.reduce((sum, m) => sum + m.calories, 0));
  const remaining = Math.max(0, APP_STATE.profile.budget - totalCost);

  APP_STATE.currentPlan.totalCost = totalCost;
  APP_STATE.currentPlan.totalPro = totalPro;
  APP_STATE.currentPlan.totalCal = totalCal;
  APP_STATE.currentPlan.remaining = remaining;

  // Re-render
  renderDietPlan(APP_STATE.currentPlan, APP_STATE.profile);
  saveStateToLocalStorage();
  showToast(`✅ ${originalTitle} updated to "${newMealData.title}"! Budget updated: ₹${totalCost} / ₹${APP_STATE.profile.budget}`);
}

/* --------------------------------------------------------------------------
   9. AFFORDABLE FOOD DATABASE
   -------------------------------------------------------------------------- */
function initFoodDatabase() {
  const searchInput = document.getElementById('food-search-input');
  const catButtons = document.querySelectorAll('.food-cat-btn');
  const dietSelect = document.getElementById('food-diet-filter');
  const sortSelect = document.getElementById('food-sort-filter');

  function filterAndRender() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeCatBtn = document.querySelector('.food-cat-btn.active');
    const category = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : 'all';
    const diet = dietSelect ? dietSelect.value : 'all';
    const sortBy = sortSelect ? sortSelect.value : 'value';

    let filtered = FOOD_DATABASE.filter(food => {
      // Category match
      if (category !== 'all' && food.category !== category) return false;
      // Diet match
      if (diet === 'veg' && food.diet !== 'veg') return false;
      if (diet === 'egg' && food.diet === 'nonveg') return false;
      if (diet === 'nonveg' && food.diet !== 'nonveg') return false;
      // Search match
      if (query && !food.name.toLowerCase().includes(query) && !food.category.toLowerCase().includes(query)) return false;
      return true;
    });

    // Sort
    if (sortBy === 'value') {
      filtered.sort((a, b) => b.efficiency - a.efficiency);
    } else if (sortBy === 'price_low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'protein_high') {
      filtered.sort((a, b) => b.protein - a.protein);
    } else if (sortBy === 'calories_low') {
      filtered.sort((a, b) => a.calories - b.calories);
    }

    renderFoodCards(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterAndRender);
  if (dietSelect) dietSelect.addEventListener('change', filterAndRender);
  if (sortSelect) sortSelect.addEventListener('change', filterAndRender);

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterAndRender();
    });
  });

  filterAndRender();
}

function renderFoodCards(foods) {
  const container = document.getElementById('food-cards-container');
  if (!container) return;
  container.innerHTML = '';

  if (foods.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; color: var(--text-tertiary);">No budget fitness foods matched your search criteria.</div>`;
    return;
  }

  foods.forEach(food => {
    const card = document.createElement('div');
    card.className = 'food-card';

    let badgeClass = 'badge-veg';
    let badgeText = 'Vegetarian';
    if (food.diet === 'egg') { badgeClass = 'badge-egg'; badgeText = 'Eggetarian'; }
    if (food.diet === 'nonveg') { badgeClass = 'badge-nonveg'; badgeText = 'Non-Veg'; }

    card.innerHTML = `
      <div class="food-card-top">
        <span class="food-diet-badge ${badgeClass}">${badgeText}</span>
        <span style="font-size: 0.72rem; color: var(--text-tertiary);">${food.category}</span>
      </div>

      <h4 class="food-title">${food.name}</h4>
      <span class="food-serving">${food.serving}</span>

      <div class="food-price-tag">₹${food.price} <small style="font-size: 0.75rem; color: var(--text-secondary); font-weight: normal;">approx.</small></div>

      <div class="food-macros-grid">
        <div>
          <span class="f-macro-val">${food.calories}</span>
          <span class="f-macro-lbl">kcal</span>
        </div>
        <div>
          <span class="f-macro-val" style="color: var(--color-green);">${food.protein}g</span>
          <span class="f-macro-lbl">Protein</span>
        </div>
        <div>
          <span class="f-macro-val">${food.carbs}g</span>
          <span class="f-macro-lbl">Carbs</span>
        </div>
        <div>
          <span class="f-macro-val">${food.fats}g</span>
          <span class="f-macro-lbl">Fats</span>
        </div>
      </div>

      <div class="food-value-badge">
        ⚡ Value: ${food.efficiency.toFixed(1)}g Protein per ₹10
      </div>
    `;

    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   10. BEGINNER-FRIENDLY WORKOUT PLAN GENERATOR
   -------------------------------------------------------------------------- */
function initWorkoutSection() {
  const dayTabs = document.querySelectorAll('.w-day-tab');
  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const days = parseInt(tab.getAttribute('data-days'), 10);
      APP_STATE.profile.days = days;
      renderWorkoutPlan(APP_STATE.profile);
    });
  });
}

function renderWorkoutPlan(profile) {
  const metaGoal = document.getElementById('workout-meta-goal');
  const metaLoc = document.getElementById('workout-meta-loc');
  const metaExp = document.getElementById('workout-meta-exp');
  const container = document.getElementById('workout-schedule-container');

  const goalNames = {
    muscle_gain: 'Goal: Muscle Gain & Hypertrophy',
    fat_loss: 'Goal: Fat Loss & Conditioning',
    general_fitness: 'Goal: General Functional Fitness'
  };

  if (metaGoal) metaGoal.textContent = goalNames[profile.goal];
  if (metaLoc) metaLoc.textContent = `Location: ${profile.workoutLoc === 'gym' ? 'College/Gym Workout' : 'Home Workout'}`;
  if (metaExp) metaExp.textContent = `Level: ${profile.experience.toUpperCase()}`;

  // Sync active day tab
  document.querySelectorAll('.w-day-tab').forEach(tab => {
    tab.classList.toggle('active', parseInt(tab.getAttribute('data-days'), 10) === profile.days);
  });

  if (!container) return;
  container.innerHTML = '';

  const workoutDays = generateWorkoutRoutineDays(profile);

  workoutDays.forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.className = 'workout-day-card';

    dayCard.innerHTML = `
      <div class="w-day-header">
        <div>
          <h3 class="w-day-title">${day.title}</h3>
          <span class="w-day-focus">${day.focus}</span>
        </div>
        <span style="font-size: 0.8rem; color: var(--text-tertiary);">${day.exercises.length} Exercises</span>
      </div>

      <div class="exercises-grid">
        ${day.exercises.map(ex => `
          <div class="exercise-card">
            <div class="ex-top-row">
              <h4 class="ex-title">${ex.name}</h4>
              <span class="ex-muscle-tag">${ex.muscle}</span>
            </div>

            <div class="ex-stats-row">
              <span>Sets & Reps: <strong>${ex.setsReps}</strong></span>
              <span>• Rest: ${ex.rest}s</span>
            </div>

            <p class="ex-instructions">${ex.instructions}</p>

            <div class="ex-actions-row">
              <button type="button" class="btn-rest-timer" data-rest="${ex.rest}">
                ⏱️ ${ex.rest}s Rest Timer
              </button>
              <label class="ex-complete-label">
                <input type="checkbox" class="ex-checkbox" data-ex-name="${ex.name}">
                <span>Completed</span>
              </label>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(dayCard);
  });

  // Attach Rest Timer trigger
  document.querySelectorAll('.btn-rest-timer').forEach(btn => {
    btn.addEventListener('click', () => {
      const restSec = parseInt(btn.getAttribute('data-rest'), 10) || 60;
      openRestTimer(restSec);
    });
  });

  // Attach Exercise Checkboxes
  document.querySelectorAll('.ex-checkbox').forEach(chk => {
    chk.addEventListener('change', () => {
      const checkedBoxes = document.querySelectorAll('.ex-checkbox:checked').length;
      APP_STATE.progress.workoutCompletedCount = checkedBoxes;
      updateWorkoutDashboardCard();
    });
  });
}

function generateWorkoutRoutineDays(profile) {
  const isGym = profile.workoutLoc === 'gym';
  const days = profile.days;

  if (isGym) {
    if (days === 3) {
      return [
        {
          title: 'DAY 1 — FULL BODY STRENGTH',
          focus: 'Foundation Compounds: Chest, Back, Legs & Core',
          exercises: [
            { name: 'Barbell / Goblet Squats', muscle: 'Quads & Glutes', setsReps: '3 × 10', rest: 90, instructions: 'Keep your chest tall, drive knees outwards, and push firmly through your mid-foot.' },
            { name: 'Push-ups / Flat Dumbbell Press', muscle: 'Chest & Triceps', setsReps: '3 × 8–12', rest: 60, instructions: 'Retract your shoulder blades, lower dumbbells under control, and press upward.' },
            { name: 'Lat Pulldown (or Assisted Pull-up)', muscle: 'Lats & Upper Back', setsReps: '3 × 10', rest: 60, instructions: 'Pull the bar down toward your upper chest while driving elbows downward.' },
            { name: 'Dumbbell Overhead Shoulder Press', muscle: 'Shoulders', setsReps: '3 × 10', rest: 60, instructions: 'Press weights overhead without arching your lower back.' },
            { name: 'Dumbbell Biceps Curl', muscle: 'Biceps', setsReps: '2 × 12', rest: 45, instructions: 'Keep your elbows tucked at your sides and squeeze biceps at the top.' },
            { name: 'Forearm Plank', muscle: 'Core Stability', setsReps: '3 × 30-45s', rest: 45, instructions: 'Engage your glutes and brace your core tightly as if preparing for a punch.' }
          ]
        },
        {
          title: 'DAY 2 — REST & RECOVERY',
          focus: 'Active Mobility & 7,000 Steps Daily Walk',
          exercises: [
            { name: 'Light Campus Walking', muscle: 'Cardiovascular', setsReps: '20–30 mins', rest: 0, instructions: 'Easy steady stroll to improve blood flow and muscle recovery.' },
            { name: 'Hamstring & Hip Mobility Stretch', muscle: 'Flexibility', setsReps: '2 × 60s', rest: 30, instructions: 'Gentle hamstring, hip flexor, and thoracic spine stretches.' }
          ]
        },
        {
          title: 'DAY 3 — FULL BODY HYPERTROPHY',
          focus: 'Posterior Chain, Back, Chest & Delts',
          exercises: [
            { name: 'Romanian Deadlift (Dumbbells)', muscle: 'Hamstrings & Glutes', setsReps: '3 × 10', rest: 90, instructions: 'Hinge back at hips with a flat back until you feel a deep hamstring stretch.' },
            { name: 'Seated Cable Row / Dumbbell Row', muscle: 'Middle Back & Lats', setsReps: '3 × 10', rest: 60, instructions: 'Pull weight towards your belly button while squeezing shoulder blades together.' },
            { name: 'Incline Dumbbell Chest Press', muscle: 'Upper Chest', setsReps: '3 × 10', rest: 60, instructions: 'Set bench to 30 degrees for targeted upper pectoral engagement.' },
            { name: 'Dumbbell Lateral Raises', muscle: 'Side Deltoids', setsReps: '3 × 12–15', rest: 45, instructions: 'Raise arms out to sides until parallel to floor; control the lowering phase.' },
            { name: 'Triceps Cable Rope Pushdowns', muscle: 'Triceps', setsReps: '3 × 12', rest: 45, instructions: 'Keep elbows fixed at sides and fully extend arms downward.' },
            { name: 'Hanging / Lying Knee Raises', muscle: 'Lower Abs', setsReps: '3 × 12', rest: 45, instructions: 'Curl pelvis upward toward your chest without swinging.' }
          ]
        }
      ];
    } else {
      // 4-Day Upper / Lower Split (Default standard)
      return [
        {
          title: 'DAY 1 — UPPER BODY POWER',
          focus: 'Chest, Back, Shoulders & Arms',
          exercises: [
            { name: 'Flat Dumbbell / Barbell Bench Press', muscle: 'Chest & Triceps', setsReps: '3 × 8–10', rest: 90, instructions: 'Controlled descent, pause slightly at chest, press upward with authority.' },
            { name: 'Lat Pulldown / Wide Grip Cable Row', muscle: 'Lats & Back', setsReps: '3 × 10', rest: 60, instructions: 'Engage lats first before pulling bar smooth down to chest level.' },
            { name: 'Standing Dumbbell Overhead Press', muscle: 'Shoulders', setsReps: '3 × 10', rest: 60, instructions: 'Brace your glutes and core to keep your lower back protected.' },
            { name: 'Dumbbell Biceps Curls', muscle: 'Biceps', setsReps: '3 × 12', rest: 45, instructions: 'Strict form with full extension at bottom and contraction at top.' },
            { name: 'Cable Triceps Rope Extension', muscle: 'Triceps', setsReps: '3 × 12', rest: 45, instructions: 'Flare rope slightly at bottom for maximal triceps contraction.' }
          ]
        },
        {
          title: 'DAY 2 — LOWER BODY & CORE',
          focus: 'Quads, Hamstrings, Calves & Abs',
          exercises: [
            { name: 'Barbell Back Squats / Goblet Squats', muscle: 'Quads & Glutes', setsReps: '3 × 8–10', rest: 90, instructions: 'Squat to parallel depth, push knees out, drive up through heels.' },
            { name: 'Dumbbell Romanian Deadlifts', muscle: 'Hamstrings & Glutes', setsReps: '3 × 10', rest: 90, instructions: 'Push hips backward while keeping weights close to your shins.' },
            { name: 'Walking Dumbbell Lunges', muscle: 'Quads & Balance', setsReps: '3 × 10 / leg', rest: 60, instructions: 'Take a confident step forward and lower rear knee toward floor.' },
            { name: 'Standing Calf Raises', muscle: 'Calves', setsReps: '3 × 15', rest: 45, instructions: 'Pause for 1 second at the peak contraction on toes.' },
            { name: 'Plank Hold', muscle: 'Core Stability', setsReps: '3 × 45s', rest: 45, instructions: 'Maintain straight alignment from your heels to your shoulders.' }
          ]
        },
        {
          title: 'DAY 3 — UPPER BODY HYPERTROPHY',
          focus: 'Incline Press, Rows, Lateral Raises & Arms',
          exercises: [
            { name: 'Incline Dumbbell Press', muscle: 'Upper Chest', setsReps: '3 × 10–12', rest: 75, instructions: 'Slow 2-second negative to stimulate maximum hypertrophy.' },
            { name: 'One-Arm Dumbbell Rows', muscle: 'Lats & Rhomboids', setsReps: '3 × 10 / arm', rest: 60, instructions: 'Pull dumbbell toward your hip crease, keeping back parallel to floor.' },
            { name: 'Dumbbell Lateral Raises', muscle: 'Side Delts', setsReps: '4 × 12–15', rest: 45, instructions: 'Lead with elbows and avoid swinging momentum from hips.' },
            { name: 'Hammer Curls', muscle: 'Brachialis & Forearms', setsReps: '3 × 12', rest: 45, instructions: 'Palms facing each other throughout the lift.' },
            { name: 'Bench Dips / Skull Crushers', muscle: 'Triceps', setsReps: '3 × 12', rest: 45, instructions: 'Keep elbows tucked in and push up through palms.' }
          ]
        },
        {
          title: 'DAY 4 — LOWER BODY & POSTERIOR CHAIN',
          focus: 'Leg Press, Hamstring Curls & Core',
          exercises: [
            { name: 'Leg Press Machine / Front Squats', muscle: 'Quads', setsReps: '3 × 10–12', rest: 90, instructions: 'Feet shoulder-width on platform; do not lock knees at the top.' },
            { name: 'Lying / Seated Leg Curls', muscle: 'Hamstrings', setsReps: '3 × 12', rest: 60, instructions: 'Squeeze hamstrings tightly and control the weight returning down.' },
            { name: 'Glute Bridges (with Dumbbell)', muscle: 'Glutes & Core', setsReps: '3 × 12', rest: 60, instructions: 'Drive hips to full extension and squeeze glutes hard for 2 seconds.' },
            { name: 'Hanging / Lying Knee Raises', muscle: 'Abdominals', setsReps: '3 × 15', rest: 45, instructions: 'Exhale fully as knees curl toward your chest.' }
          ]
        }
      ];
    }
  } else {
    // HOME WORKOUT ROUTINE (Bodyweight / Dumbbells / Bands)
    return [
      {
        title: 'DAY 1 — HOME FULL BODY BURN',
        focus: 'Chest, Quads, Back & Core (No Gym Needed)',
        exercises: [
          { name: 'Push-ups (or Knee Push-ups)', muscle: 'Chest & Triceps', setsReps: '3 × 8–12', rest: 60, instructions: 'Keep body in a rigid plank line. Lower chest to floor and push up.' },
          { name: 'Bodyweight Air Squats', muscle: 'Quads & Glutes', setsReps: '3 × 15', rest: 60, instructions: 'Sit back as if sitting in a chair, keep chest high and heels pinned.' },
          { name: 'Doorframe / Towel Rows', muscle: 'Upper Back', setsReps: '3 × 12', rest: 60, instructions: 'Grip a sturdy doorframe or towel, lean back, and pull chest to door.' },
          { name: 'Plank Hold', muscle: 'Core', setsReps: '3 × 30-45s', rest: 45, instructions: 'Squeeze abs and glutes, keep neck neutral.' },
          { name: 'Glute Bridges', muscle: 'Glutes & Lower Back', setsReps: '3 × 15', rest: 45, instructions: 'Lie on back, bend knees, drive through heels to raise hips high.' }
        ]
      },
      {
        title: 'DAY 2 — ACTIVE RECOVERY & MOBILITY',
        focus: 'Hostel Room Mobility & Light Cardio',
        exercises: [
          { name: 'Brisk Walk / Campus Jog', muscle: 'Cardiovascular', setsReps: '20 mins', rest: 0, instructions: 'Steady heart rate elevation.' },
          { name: 'Full Body Dynamic Stretching', muscle: 'Mobility', setsReps: '10 mins', rest: 30, instructions: 'Cat-cow, shoulder dislocates, hip openers.' }
        ]
      },
      {
        title: 'DAY 3 — HOME UPPER & ABS FOCUSED',
        focus: 'Shoulders, Arms, Chest & Core Strength',
        exercises: [
          { name: 'Pike Push-ups (or Elevated Push-ups)', muscle: 'Shoulders', setsReps: '3 × 8–10', rest: 60, instructions: 'Hips high in the air, lower crown of head towards the floor.' },
          { name: 'Chair / Bed Triceps Dips', muscle: 'Triceps', setsReps: '3 × 12', rest: 45, instructions: 'Lower your body off the edge of a chair and push up through palms.' },
          { name: 'Mountain Climbers', muscle: 'Core & Conditioning', setsReps: '3 × 20 / leg', rest: 45, instructions: 'In push-up stance, drive knees rapidly toward your chest.' },
          { name: 'Reverse Lunges', muscle: 'Glutes & Legs', setsReps: '3 × 12 / leg', rest: 60, instructions: 'Step backward smoothly to protect your front knee.' },
          { name: 'Bicycle Crunches', muscle: 'Obliques & Abs', setsReps: '3 × 15 / side', rest: 45, instructions: 'Opposite elbow to opposite knee with controlled rotation.' }
        ]
      }
    ];
  }
}

/* --------------------------------------------------------------------------
   11. INTERACTIVE REST TIMER
   -------------------------------------------------------------------------- */
function initRestTimer() {
  const modal = document.getElementById('rest-timer-widget');
  const closeBtn = document.getElementById('rest-timer-close');
  const toggleBtn = document.getElementById('rest-timer-toggle');
  const resetBtn = document.getElementById('rest-timer-reset');
  const digitsEl = document.getElementById('rest-timer-digits');
  const presetBtns = document.querySelectorAll('.rest-preset-btn');

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const time = parseInt(btn.getAttribute('data-time'), 10);
      setTimerDuration(time);
    });
  });

  function setTimerDuration(time) {
    clearInterval(APP_STATE.restTimer.interval);
    APP_STATE.restTimer.duration = time;
    APP_STATE.restTimer.remaining = time;
    APP_STATE.restTimer.isRunning = false;
    if (digitsEl) digitsEl.textContent = time;
    if (toggleBtn) toggleBtn.textContent = 'Start Timer';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (APP_STATE.restTimer.isRunning) {
        // Pause
        clearInterval(APP_STATE.restTimer.interval);
        APP_STATE.restTimer.isRunning = false;
        toggleBtn.textContent = 'Resume Timer';
      } else {
        // Start
        APP_STATE.restTimer.isRunning = true;
        toggleBtn.textContent = 'Pause Timer';

        APP_STATE.restTimer.interval = setInterval(() => {
          APP_STATE.restTimer.remaining--;
          if (digitsEl) digitsEl.textContent = APP_STATE.restTimer.remaining;

          if (APP_STATE.restTimer.remaining <= 0) {
            clearInterval(APP_STATE.restTimer.interval);
            APP_STATE.restTimer.isRunning = false;
            toggleBtn.textContent = 'Start Timer';
            showToast('⏰ Rest Time Over! Ready for Next Set! 💪');
            playBeepSound();
          }
        }, 1000);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      setTimerDuration(APP_STATE.restTimer.duration);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (modal) modal.classList.remove('open');
    });
  }
}

function openRestTimer(seconds) {
  const modal = document.getElementById('rest-timer-widget');
  const digitsEl = document.getElementById('rest-timer-digits');
  const toggleBtn = document.getElementById('rest-timer-toggle');

  clearInterval(APP_STATE.restTimer.interval);
  APP_STATE.restTimer.duration = seconds;
  APP_STATE.restTimer.remaining = seconds;
  APP_STATE.restTimer.isRunning = false;

  document.querySelectorAll('.rest-preset-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-time'), 10) === seconds);
  });

  if (digitsEl) digitsEl.textContent = seconds;
  if (toggleBtn) toggleBtn.textContent = 'Start Timer';

  if (modal) modal.classList.add('open');
}

function playBeepSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (e) {
    // Audio context not allowed without interaction, ignore safely
  }
}

/* --------------------------------------------------------------------------
   12. PROGRESS DASHBOARD & INTERACTIVE CANVAS CHART
   -------------------------------------------------------------------------- */
function initDashboard() {
  renderWeightHistoryTable();
  drawWeightProgressChart();
  renderHabitsGrid();
  renderExpenseTracker();

  // Add Weight Log
  const addWeightBtn = document.getElementById('btn-add-weight');
  const weightInput = document.getElementById('input-log-weight');
  const dateInput = document.getElementById('input-log-date');

  // Default date to today
  if (dateInput) dateInput.valueAsDate = new Date();

  if (addWeightBtn) {
    addWeightBtn.addEventListener('click', () => {
      const wt = parseFloat(weightInput.value);
      const dt = dateInput.value;
      if (!wt || !dt) {
        showToast('Please enter both weight and date');
        return;
      }

      const prevWt = APP_STATE.progress.weightHistory.length > 0
        ? APP_STATE.progress.weightHistory[APP_STATE.progress.weightHistory.length - 1].weight
        : wt;
      const diff = (wt - prevWt).toFixed(1);
      const changeStr = diff > 0 ? `+${diff}` : `${diff}`;

      APP_STATE.progress.weightHistory.push({ date: dt, weight: wt, change: changeStr });
      APP_STATE.profile.weight = wt;

      renderWeightHistoryTable();
      drawWeightProgressChart();
      saveStateToLocalStorage();
      weightInput.value = '';
      showToast(`Logged: ${wt} kg on ${dt}`);
    });
  }

  // Add Expense Log
  const addExpBtn = document.getElementById('btn-add-expense');
  const expNameInput = document.getElementById('input-exp-name');
  const expCostInput = document.getElementById('input-exp-cost');

  if (addExpBtn) {
    addExpBtn.addEventListener('click', () => {
      const name = expNameInput.value.trim() || 'Food Item';
      const cost = parseInt(expCostInput.value, 10);
      if (!cost) {
        showToast('Please enter the ₹ amount spent');
        return;
      }

      APP_STATE.progress.expenses.push({ id: Date.now(), name, cost });
      renderExpenseTracker();
      saveStateToLocalStorage();
      expNameInput.value = '';
      expCostInput.value = '';
      showToast(`Logged ₹${cost} for ${name}`);
    });
  }

  // Sample Data & Reset
  const sampleBtn = document.getElementById('btn-load-sample-dash');
  if (sampleBtn) {
    sampleBtn.onclick = () => {
      APP_STATE.progress.weightHistory = [
        { date: '2026-09-01', weight: 66.5, change: '0.0' },
        { date: '2026-09-08', weight: 67.0, change: '+0.5' },
        { date: '2026-09-15', weight: 67.4, change: '+0.4' },
        { date: '2026-09-22', weight: 67.8, change: '+0.4' },
        { date: '2026-09-28', weight: 68.0, change: '+0.2' }
      ];
      renderWeightHistoryTable();
      drawWeightProgressChart();
      renderHabitsGrid();
      showToast('Sample Progress Data Loaded!');
    };
  }

  const resetBtn = document.getElementById('btn-reset-dash');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm('Are you sure you want to reset your logged progress data?')) {
        APP_STATE.progress.weightHistory = [{ date: new Date().toISOString().split('T')[0], weight: APP_STATE.profile.weight, change: '0.0' }];
        APP_STATE.progress.expenses = [];
        renderWeightHistoryTable();
        drawWeightProgressChart();
        renderExpenseTracker();
        saveStateToLocalStorage();
        showToast('Progress Data Reset');
      }
    };
  }
}

function updateDashboardFromPlan() {
  const p = APP_STATE.profile;
  const plan = APP_STATE.currentPlan;
  if (!plan) return;

  const goalEl = document.getElementById('dash-goal-text');
  const goalSub = document.getElementById('dash-goal-sub');
  const budgetEl = document.getElementById('dash-budget-text');
  const spentEl = document.getElementById('dash-spent-text');
  const spentSub = document.getElementById('dash-spent-sub');
  const proEl = document.getElementById('dash-protein-text');
  const currentWt = document.getElementById('dash-current-wt');

  const goalLabels = {
    muscle_gain: 'Muscle Gain',
    fat_loss: 'Fat Loss',
    general_fitness: 'General Fitness'
  };

  if (goalEl) goalEl.textContent = goalLabels[p.goal];
  if (goalSub) goalSub.textContent = p.goal === 'muscle_gain' ? 'Hypertrophy & Surplus' : 'Calorie Control & Activity';
  if (budgetEl) budgetEl.textContent = `₹${p.budget}`;
  if (spentEl) spentEl.textContent = `₹${plan.totalCost} / ₹${p.budget}`;
  if (spentSub) {
    const rem = p.budget - plan.totalCost;
    spentSub.textContent = rem >= 0 ? `₹${rem} Under Budget Today` : `₹${Math.abs(rem)} Over Budget`;
  }
  if (proEl) proEl.textContent = `~${plan.metrics.proteinTarget}g`;
  if (currentWt) currentWt.textContent = `${p.weight} kg`;

  updateWorkoutDashboardCard();
}

function updateWorkoutDashboardCard() {
  const workoutEl = document.getElementById('dash-workout-text');
  const statusEl = document.getElementById('dash-workout-status');
  if (workoutEl) workoutEl.textContent = `${APP_STATE.profile.workoutLoc === 'gym' ? 'Full Body' : 'Home Routine'} — Day 1`;
  if (statusEl) {
    statusEl.textContent = `⚡ ${APP_STATE.progress.workoutCompletedCount} Exercises Completed`;
  }
}

function renderWeightHistoryTable() {
  const tbody = document.getElementById('weight-history-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const list = [...APP_STATE.progress.weightHistory].reverse();
  list.forEach((entry, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.date}</td>
      <td><strong>${entry.weight} kg</strong></td>
      <td style="color: ${parseFloat(entry.change) >= 0 ? 'var(--color-green-light)' : '#EF4444'}">${entry.change} kg</td>
      <td><button type="button" class="btn-text-muted" data-del-idx="${APP_STATE.progress.weightHistory.length - 1 - idx}">✕</button></td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('[data-del-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-del-idx'), 10);
      APP_STATE.progress.weightHistory.splice(idx, 1);
      renderWeightHistoryTable();
      drawWeightProgressChart();
      saveStateToLocalStorage();
    });
  });
}

function drawWeightProgressChart() {
  const canvas = document.getElementById('weight-chart-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height;
  ctx.clearRect(0, 0, width, height);

  const history = APP_STATE.progress.weightHistory;
  if (history.length === 0) return;

  const padding = { top: 25, right: 30, bottom: 35, left: 45 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const weights = history.map(h => h.weight);
  const minW = Math.floor(Math.min(...weights) - 1);
  const maxW = Math.ceil(Math.max(...weights) + 1);

  // Draw Grid Lines & Labels
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
  ctx.fillStyle = '#64748B';
  ctx.font = '11px Inter, sans-serif';
  ctx.lineWidth = 1;

  const ySteps = 4;
  for (let i = 0; i <= ySteps; i++) {
    const yVal = minW + ((maxW - minW) / ySteps) * i;
    const y = padding.top + chartH - (i / ySteps) * chartH;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartW, y);
    ctx.stroke();
    ctx.fillText(`${yVal.toFixed(1)}kg`, 6, y + 4);
  }

  // Calculate Points
  const points = history.map((h, i) => {
    const x = padding.left + (i / Math.max(1, history.length - 1)) * chartW;
    const yPct = (h.weight - minW) / (maxW - minW);
    const y = padding.top + chartH - yPct * chartH;
    return { x, y, date: h.date, weight: h.weight };
  });

  // Draw Gradient Fill Area
  const grad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
  grad.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
  grad.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, padding.top + chartH);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Draw Main Line
  ctx.beginPath();
  ctx.strokeStyle = '#10B981';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();

  // Draw Data Points & Date Labels
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#080B11';
    ctx.fill();
    ctx.strokeStyle = '#34D399';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Date Label on X axis
    const shortDate = p.date.substring(5);
    ctx.fillStyle = '#94A3B8';
    ctx.textAlign = 'center';
    ctx.fillText(shortDate, p.x, height - 10);
  });
}

function renderExpenseTracker() {
  const totalDisplay = document.getElementById('exp-total-display');
  const limitDisplay = document.getElementById('exp-limit-display');
  const remDisplay = document.getElementById('exp-rem-display');
  const statusPill = document.getElementById('budget-status-pill');

  const budget = APP_STATE.profile.budget;
  const spent = APP_STATE.progress.expenses.reduce((sum, e) => sum + e.cost, 0);
  const remaining = budget - spent;

  if (totalDisplay) totalDisplay.textContent = `₹${spent}`;
  if (limitDisplay) limitDisplay.textContent = `₹${budget}`;
  if (remDisplay) {
    remDisplay.textContent = `₹${remaining}`;
    remDisplay.className = remaining >= 0 ? 'text-green' : 'text-red';
  }
  if (statusPill) {
    if (remaining >= 0) {
      statusPill.textContent = 'Within Budget';
      statusPill.style.color = '#34D399';
      statusPill.style.background = 'rgba(16, 185, 129, 0.15)';
    } else {
      statusPill.textContent = 'Over Budget Limit';
      statusPill.style.color = '#F87171';
      statusPill.style.background = 'rgba(239, 68, 68, 0.15)';
    }
  }
}

function renderHabitsGrid() {
  const container = document.getElementById('habit-days-container');
  if (!container) return;
  container.innerHTML = '';

  APP_STATE.progress.habits.forEach((h, idx) => {
    const col = document.createElement('div');
    col.className = 'habit-day-col';
    col.innerHTML = `
      <span class="h-day-name">${h.day}</span>
      <button type="button" class="h-check-btn ${h.diet ? 'checked' : ''}" data-type="diet" data-idx="${idx}" title="Diet Checked">
        ✓
      </button>
      <span style="font-size: 0.6rem; color: var(--text-tertiary);">Diet</span>
      <button type="button" class="h-check-btn ${h.workout ? 'checked' : ''}" data-type="workout" data-idx="${idx}" title="Workout Checked" style="margin-top: 0.5rem;">
        ✓
      </button>
      <span style="font-size: 0.6rem; color: var(--text-tertiary);">Lift</span>
    `;
    container.appendChild(col);
  });

  container.querySelectorAll('.h-check-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      APP_STATE.progress.habits[idx][type] = !APP_STATE.progress.habits[idx][type];
      btn.classList.toggle('checked', APP_STATE.progress.habits[idx][type]);
      saveStateToLocalStorage();
    });
  });
}

/* --------------------------------------------------------------------------
   13. CONTACT FORM CONTROLLER
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success-box');
  const sendAnotherBtn = document.getElementById('btn-send-another');
  const copyEmailBtn = document.getElementById('founder-email-copy');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const msg = document.getElementById('contact-msg')?.value.trim();

      if (!name || !email || !msg) {
        showToast('Please fill in your name, email, and message.');
        return;
      }

      form.classList.add('hidden');
      if (successBox) successBox.classList.remove('hidden');
      showToast('Message sent! Yashvardhan will respond shortly.');
    });
  }

  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
      if (form) {
        form.reset();
        form.classList.remove('hidden');
      }
      if (successBox) successBox.classList.add('hidden');
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('yash345fd@gmail.com').then(() => {
        showToast('📋 Copied yash345fd@gmail.com to clipboard!');
      }).catch(() => {
        window.location.href = 'mailto:yash345fd@gmail.com';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   14. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
