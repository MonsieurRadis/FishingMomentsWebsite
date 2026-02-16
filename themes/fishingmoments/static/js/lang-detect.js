// Automatic language detection and redirection
(function() {
  // Only run on first visit or if user hasn't made a manual choice
  const userLangChoice = localStorage.getItem('fishing-moments-lang-choice');

  // If user has already made a choice, respect it
  if (userLangChoice) {
    return;
  }

  // Get browser language preference
  const browserLang = navigator.language || navigator.userLanguage;
  const prefersFrench = browserLang.toLowerCase().startsWith('fr');

  // Get current path
  const currentPath = window.location.pathname;
  const isOnFrenchSite = currentPath.startsWith('/fr');
  const isOnEnglishSite = !isOnFrenchSite;

  // Redirect logic
  if (prefersFrench && isOnEnglishSite) {
    // User prefers French but is on English site - redirect to French
    const frenchPath = '/fr' + currentPath;
    window.location.href = frenchPath;
  } else if (!prefersFrench && isOnFrenchSite) {
    // User prefers English but is on French site - redirect to English
    const englishPath = currentPath.replace(/^\/fr/, '') || '/';
    window.location.href = englishPath;
  }
})();

// Track manual language changes via the language switcher
document.addEventListener('DOMContentLoaded', function() {
  const langSwitcher = document.querySelectorAll('.lang-link');

  langSwitcher.forEach(link => {
    link.addEventListener('click', function() {
      // User manually chose a language - remember this
      localStorage.setItem('fishing-moments-lang-choice', 'manual');
    });
  });
});
