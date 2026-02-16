// Dynamic language switcher - changes text without page reload
(function() {
  const STORAGE_KEY = 'fishing-moments-lang';
  const DEFAULT_LANG = 'en';

  // Get translations data injected by Hugo
  let translations = window.FISHING_MOMENTS_I18N || {};

  // Get current language from localStorage or default
  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  // Set current language
  function setCurrentLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  // Translate a single element
  function translateElement(element) {
    const key = element.getAttribute('data-i18n');
    if (!key) return;

    const lang = getCurrentLang();
    const translation = translations[lang] && translations[lang][key];

    if (translation) {
      if (element.hasAttribute('data-i18n-html')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  }

  // Translate all elements on page
  function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(translateElement);

    // Translate placeholder attributes
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (!key) return;

      const lang = getCurrentLang();
      const translation = translations[lang] && translations[lang][key];

      if (translation) {
        element.placeholder = translation;
      }
    });

    // Update lang attribute
    document.documentElement.lang = getCurrentLang();

    // Update lang switcher button
    updateLangButton();
  }

  // Update language switcher button
  function updateLangButton() {
    const langLink = document.querySelector('.lang-link');
    if (!langLink) return;

    const currentLang = getCurrentLang();
    const targetLang = currentLang === 'en' ? 'fr' : 'en';

    if (targetLang === 'fr') {
      langLink.textContent = '🇫🇷';
      langLink.title = 'Français';
    } else {
      langLink.textContent = '🇬🇧';
      langLink.title = 'English';
    }
  }

  // Toggle language
  function toggleLanguage(e) {
    e.preventDefault();

    const currentLang = getCurrentLang();
    const newLang = currentLang === 'en' ? 'fr' : 'en';

    setCurrentLang(newLang);
    translatePage();
  }

  // Initialize
  function init() {
    // Apply saved language on page load
    translatePage();

    // Attach click handler to language switcher
    const langLink = document.querySelector('.lang-link');
    if (langLink) {
      langLink.addEventListener('click', toggleLanguage);
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
