particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#1e88e5" // Particle color
        },
        "shape": {
            "type": "circle", // Particle shape
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://reactjsexample.com/content/images/2022/07/Code-2022-23-29-03.jpg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.5,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1e88e5", // Line color
            "opacity": 0.4,
            "width": 2 // Bold lines
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true, 
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Repulse mode on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Push mode on click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 40,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 40,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 2
            },
            "repulse": {
                "distance": 100 // Repulse distance
            },
            "push": {
                "particles_nb": 4 // Number of particles to push
            },
            "remove": {
                "particles_nb": 2 // Number of particles to remove
            }
        }
    },
    "retina_detect": true
});

//Light mode and Dark Mode
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
body.classList.toggle('light-theme');
body.classList.toggle('dark-theme');

if (body.classList.contains('dark-theme')) {
toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; 
document.querySelectorAll('header').forEach(element => {
    element.style.color = 'white';
    element.style.backgroundColor = 'rgba(30, 30, 30, 0.9)'; 
});
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#1e88e5" // Particle color
        },
        "shape": {
            "type": "circle", // Particle shape
            "stroke": {
                "width": 0,
                "color": "#1e88e5"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://reactjsexample.com/content/images/2022/07/Code-2022-23-29-03.jpg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.5,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#2e74d2", // Line color
            "opacity": 0.4,
            "width": 2 // Bold lines
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true, // Enable attract mode
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Repulse mode on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Push mode on click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 2
            },
            "repulse": {
                "distance": 300 // Repulse distance
            },
            "push": {
                "particles_nb": 4 // Number of particles to push
            },
            "remove": {
                "particles_nb": 2 // Number of particles to remove
            }
        }
    },
    "retina_detect": true
});
} else {
toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark theme
document.querySelectorAll('header').forEach(element => {
    element.style.color = '#333';
    element.style.backgroundColor = 'rgba(240, 240, 240, 0.9)'; // Light header background
});
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#1e88e5" // Particle color
        },
        "shape": {
            "type": "circle", // Particle shape
            "stroke": {
                "width": 0,
                "color": "#1e88e5"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://reactjsexample.com/content/images/2022/07/Code-2022-23-29-03.jpg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.5,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1e88e5", // Line color
            "opacity": 0.4,
            "width": 2// Bold lines
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true, // Enable attract mode
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Repulse mode on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Push mode on click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 40,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 2
            },
            "repulse": {
                "distance": 300 // Repulse distance
            },
            "push": {
                "particles_nb": 4 // Number of particles to push
            },
            "remove": {
                "particles_nb": 2 // Number of particles to remove
            }
        }
    },
    "retina_detect": true
});
}
});