particlesJS('particles-js', {
    particles: {
        number: {
            value: 80, // تعداد ذرات
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff' // رنگ ذرات (سفید)
        },
        shape: {
            type: 'circle', // شکل ذرات
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: false // خطوط بین ذرات غیرفعال
        },
        move: {
            enable: true,
            speed: 2, // سرعت حرکت ذرات
            direction: 'none',
            random: true,
            straight: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse' // ذرات با ماوس فراری می‌شن
            },
            onclick: {
                enable: true,
                mode: 'push' // کلیک باعث اضافه شدن ذرات می‌شه
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});