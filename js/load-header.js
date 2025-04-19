document.addEventListener("DOMContentLoaded", () => {
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      const headerContainer = document.getElementById('header-container');
      if (headerContainer) {
        headerContainer.innerHTML = data;
      }
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
});
