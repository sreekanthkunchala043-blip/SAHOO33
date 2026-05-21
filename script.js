// Highly Optimized Cinematic Particle Constellations
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 90, "density": { "enable": true, "value_area": 1000 } },
        "color": { "value": "#00ffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.35, "random": true, "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 2, "random": true, "anim": { "enable": true, "speed": 1.2, "size_min": 0.4, "sync": false } },
        "line_linked": { "enable": true, "distance": 110, "color": "#00ffff", "opacity": 0.05, "width": 1 },
        "move": { "enable": true, "speed": 0.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "resize": true },
        "modes": { "grab": { "distance": 120, "line_linked": { "opacity": 0.2 } } }
    },
    "retina_detect": true
});

// Dynamic width execution for skill matrices with animated fill transition
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
        // Targets the second span inside skill-info containing percentages (e.g., "90%")
        const targetPercentage = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        
        // Trigger layout reflow to ensure the initial 0% width is registered by browser
        requestAnimationFrame(() => {
            bar.style.width = targetPercentage;
        });
    });
});