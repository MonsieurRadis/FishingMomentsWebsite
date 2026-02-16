// Automatic language detection - NO REDIRECT, just detect preference
(function() {
  const STORAGE_KEY = 'fishing-moments-lang';

  // Check if user already has a language preference
  const savedLang = localStorage.getItem(STORAGE_KEY);

  if (!savedLang) {
    // First visit - detect from browser
    const browserLang = navigator.language || navigator.userLanguage;
    const defaultLang = browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
    localStorage.setItem(STORAGE_KEY, defaultLang);
  }
})();
