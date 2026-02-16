// Article search functionality for Knowledge Center
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('article-search');
  if (!searchInput) return;

  const categoryGrid = document.querySelector('.category-grid');
  const categoryTitle = document.querySelector('.library-section-title');
  const librarySections = document.querySelectorAll('.library-section');

  // Collect all articles from all sections
  const allArticles = [];
  const blogGrids = document.querySelectorAll('.blog-grid');

  blogGrids.forEach(grid => {
    const articles = grid.querySelectorAll('.blog-card');
    articles.forEach(article => {
      const title = article.querySelector('h2')?.textContent.toLowerCase() || '';
      const description = article.querySelector('p')?.textContent.toLowerCase() || '';
      const tags = Array.from(article.querySelectorAll('.article-tag'))
        .map(tag => tag.textContent.toLowerCase())
        .join(' ');

      allArticles.push({
        element: article.cloneNode(true), // Clone the element
        originalElement: article,
        title,
        description,
        tags,
        text: `${title} ${description} ${tags}`
      });
    });
  });

  // Create search results container
  let searchResultsSection = null;

  // Search handler
  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
      // Remove search results section
      if (searchResultsSection) {
        searchResultsSection.remove();
        searchResultsSection = null;
      }
      // Show original sections
      if (categoryGrid) categoryGrid.style.display = '';
      if (categoryTitle) categoryTitle.style.display = '';
      librarySections.forEach(section => section.style.display = '');
      return;
    }

    // Hide original sections
    if (categoryGrid) categoryGrid.style.display = 'none';
    if (categoryTitle) categoryTitle.style.display = 'none';
    librarySections.forEach(section => section.style.display = 'none');

    // Filter articles
    const matchingArticles = allArticles.filter(item => item.text.includes(query));

    // Create or update search results section
    if (!searchResultsSection) {
      searchResultsSection = document.createElement('div');
      searchResultsSection.className = 'library-section search-results-section';
      const searchContainer = document.querySelector('.search-container');
      searchContainer.insertAdjacentElement('afterend', searchResultsSection);
    }

    // Get translated strings from search input data attributes
    const resultsTitle = searchInput.dataset.resultsTitle || 'Search Results';
    const noResults = searchInput.dataset.noResults || 'No articles found for';
    const tryDifferent = searchInput.dataset.tryDifferent || 'Try different keywords.';

    if (matchingArticles.length === 0) {
      searchResultsSection.innerHTML = `
        <h2 class="library-section-title">${resultsTitle}</h2>
        <p style="text-align: center; color: rgba(232, 240, 255, 0.5); padding: 3rem 0;">
          ${noResults} "<strong>${escapeHtml(query)}</strong>". ${tryDifferent}
        </p>
      `;
    } else {
      const resultsGrid = document.createElement('div');
      resultsGrid.className = 'blog-grid';
      matchingArticles.forEach(item => {
        resultsGrid.appendChild(item.element.cloneNode(true));
      });

      searchResultsSection.innerHTML = `
        <h2 class="library-section-title">${resultsTitle} (${matchingArticles.length})</h2>
      `;
      searchResultsSection.appendChild(resultsGrid);
    }
  });

  // Helper to escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
