/* for starry background */
let resizeTimeout;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const totalStars = Math.floor((windowHeight * windowWidth)/32000);

/* for navbar */
let lastScrollY = window.scrollY;
const scrollThreshold = 5; // Minimum scroll distance to trigger hiding

function redrawStars() {
    const stars = document.getElementsByClassName('star');
    for (let star of stars) {
        star.remove(); // Remove existing stars
    }
    generateStars('comet');
    generateStars('move');
}

function generateStars(className) {
    for (let i = 1; i < totalStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        if (className === 'comet') {
            star.classList.add('comet');
        } else if (className === 'move') {
            star.classList.add('move');
        } else {
            console.log("Invalid class name provided");
        }

        const top = getRandomInt(0, windowHeight + 50); // Random top position within window height
        const left = getRandomInt(0, windowWidth + 50); // Random left position within window width

        star.style.top = `${top}px`;
        star.style.left = `${left}px`;
        star.style.opacity = `${Math.random()}`; // Random opacity for variation
        star.style.animationDelay = `${Math.random()}s`; // Random delay for animation
        star.style.zIndex = '1'; // Ensure stars are not hidden

        // Append to the background container
        document.getElementById('background').appendChild(star);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
  
    if (currentScrollY <= 0 || currentScrollY >= maxScrollY) {
      return;
    }
  
    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.style.animation = 'scaleCollapse 0.5s ease-in forwards';
      } else {
        // Scrolling up
        navbar.style.animation = 'scaleExpand 0.8s ease forwards';
      }
    }
  
    lastScrollY = currentScrollY;
}

function gotoBlog() {
    window.location = "./blog.html";
}

// Trigger initial star generation and redraw on resize
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        redrawStars();
    }, 300);
});
  
window.addEventListener('scroll', handleScroll);

generateStars('comet');
generateStars('move');

window.addEventListener('popstate', () => {
    const currentPath = window.location.pathname;
    
    // Check if the URL path is '/blog/'
    if (currentPath === '/blog/') {
        document.getElementById('blog').checked = true;
    } else if (window.location.hash.trim() === '#projects-section') {
        document.getElementById('projects').checked = true;
    } else {
        document.getElementById('home').checked = true;
    }
});

function gotoProjects() {
    window.location.hash = '#projects-section';
    document.getElementById('projects').checked = true;
}

function goHome() {
    window.location.hash = '#background';
    document.getElementById('home').checked = true;
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.trim(); // Ensure no extra whitespace
    if (hash === '#projects-section') {
        document.getElementById('projects').checked = true;
    } else if (hash === '#background') {
        document.getElementById('home').checked = true;
    } else {
        console.warn('Unknown hash:', hash);
        // Optional: Set a default radio button if the hash doesn't match
        document.getElementById('home').checked = true;
    }
});

function cmpe165() {
    window.open("https://github.com/GreenXDShadow/CMPE165HotelProject", '_blank'); // '_blank' ensures it opens in a new tab
}

function cmpe172() {
    window.open("https://github.com/griffindavidson/172project", '_blank'); // '_blank' ensures it opens in a new tab
}

function cmpe195() {
    window.open("https://github.com/griffindavidson/cmpe195a-project", '_blank'); // '_blank' ensures it opens in a new tab
}

