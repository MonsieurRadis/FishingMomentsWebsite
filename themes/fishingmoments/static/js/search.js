// Article search functionality for Knowledge Center
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('article-search');
  if (!searchInput) return;

  const blogGrids = document.querySelectorAll('.blog-grid');
  const categoryCards = document.querySelectorAll('.category-card');
  const pillarSection = document.querySelector('.library-section');
  const latestSection = document.querySelectorAll('.library-section')[1];

  // Collect all searchable items
  const allArticles = [];
  blogGrids.forEach(grid => {
    const articles = grid.querySelectorAll('.blog-card');
    articles.forEach(article => {
      const title = article.querySelector('h3')?.textContent.toLowerCase() || '';
      const description = article.querySelector('p')?.textContent.toLowerCase() || '';
      const tags = Array.from(article.querySelectorAll('.blog-card-tag'))
        .map(tag => tag.textContent.toLowerCase())
        .join(' ');

      allArticles.push({
        element: article,
        title,
        description,
        tags,
        text: `${title} ${description} ${tags}`
      });
    });
  });

  // Search handler
  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
      // Show everything when search is empty
      allArticles.forEach(item => item.element.style.display = '');
      categoryCards.forEach(card => card.style.display = '');
      if (pillarSection) pillarSection.style.display = '';
      if (latestSection) latestSection.style.display = '';
      return;
    }

    // Hide categories and sections when searching
    categoryCards.forEach(card => card.style.display = 'none');
    if (pillarSection) pillarSection.style.display = 'none';
    if (latestSection) latestSection.style.display = 'none';

    // Filter articles
    let visibleCount = 0;
    allArticles.forEach(item => {
      if (item.text.includes(query)) {
        item.element.style.display = '';
        visibleCount++;
      } else {
        item.element.style.display = 'none';
      }
    });

    // Show a "no results" message if needed
    const existingNoResults = document.querySelector('.search-no-results');
    if (visibleCount === 0 && !existingNoResults) {
      const noResults = document.createElement('div');
      noResults.className = 'search-no-results';
      noResults.innerHTML = `
        <p style="text-align: center; color: rgba(232, 240, 255, 0.5); padding: 3rem 0;">
          No articles found for "<strong>${escapeHtml(query)}</strong>". Try different keywords.
        </p>
      `;
      searchInput.parentElement.insertAdjacentElement('afterend', noResults);
    } else if (visibleCount > 0 && existingNoResults) {
      existingNoResults.remove();
    } else if (existingNoResults) {
      existingNoResults.querySelector('strong').textContent = query;
    }
  });

  // Helper to escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
