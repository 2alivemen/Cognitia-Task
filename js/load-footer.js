document.addEventListener("DOMContentLoaded", () => {
  // Dynamically add Tailwind CSS script if not already present
  if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);
  }

  // Dynamically add Merriweather font link if not already present
  if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Merriweather"]')) {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap';
    document.head.appendChild(fontLink);
  }

  // Dynamically add FontAwesome CSS if not already present
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(faLink);
  }

  console.log('Loading footer: fetching footer.html');
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Footer fetched successfully');
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const bodyContent = doc.body.innerHTML;
      const footerContainer = document.getElementById('footer-container');
      if (footerContainer) {
        footerContainer.innerHTML = bodyContent;
      }
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
});
