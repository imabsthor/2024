document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.load-content');
    
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.closest('a').getAttribute('data-url');
        loadContent(url);
      });
    });
  });
  
  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById('main-content').innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  }
  