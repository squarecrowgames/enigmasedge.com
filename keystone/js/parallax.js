function initializeParallax() {
    window.addEventListener('scroll', handleParallaxScroll);
}

function handleParallaxScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    const parallaxElements = document.querySelectorAll('.parallax-effect');

    parallaxElements.forEach(element => {
        const speedFactor = element.getAttribute('data-speed');
        const translateY = -(scrollOffset * speedFactor / 100);
        element.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
    });
}

function removeParallax() {
    document.getElementById('static-background').style.display = 'block';
    document.getElementById('parallax-background').style.display = 'none';
}

function enableSmoothScrolling() {
    $.srSmoothscroll({
        step: 80,
        speed: 300,
        ease: 'linear'
    });
}

function onPageLoad() {
    const devicePlatform = navigator.platform.toLowerCase();

    if (devicePlatform.includes('ipad') || devicePlatform.includes('iphone')) {
        removeParallax();
    } else {
        initializeParallax();
    }
}

window.onload = onPageLoad;