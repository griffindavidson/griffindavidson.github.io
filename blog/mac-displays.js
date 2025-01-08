function updateThemeColor() {
    const metaThemeColor = document.getElementById('theme-color');
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkMode) {
      // Set theme color for dark mode
      metaThemeColor.setAttribute('content', '#121212');  // Dark mode theme color (black)
    } else {
      // Set theme color for light mode
      metaThemeColor.setAttribute('content', '#eeeeee');  // Light mode theme color (white)
    }
  }

  // Call the function to set theme color on page load
  updateThemeColor();

  // Listen for changes in the system's color scheme (e.g., if the user switches themes)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeColor);