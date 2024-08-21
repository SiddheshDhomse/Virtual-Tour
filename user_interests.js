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
                    "value": "#1e88e5" // Particle color for light theme
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
                        "src": "img/github.svg",
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
                        "opacity_min": 0.1,
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
                    "color": "#1e88e5", // Line color for light theme
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

        // Dark And Light
        const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;

        toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    document.querySelector('header').classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; 
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
                    "value": "#1e88e5" // Particle color for dark theme
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
                        "src": "img/github.svg",
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
                        "opacity_min": 0.1,
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
                    "color": "#1e88e5", // Line color for dark theme
                    "opacity": 0.4,
                    "width": 1 // Bold lines
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
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark theme
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
                    "value": "#1e88e5" // Particle color for light theme
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
                        "src": "img/github.svg",
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
                        "opacity_min": 0.1,
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
                    "color": "#1e88e5", // Line color for light theme
                    "opacity": 0.4,
                    "width": 1 // Bold lines
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
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const skipBtn = document.getElementById('skip-btn');
    let currentQuestionIndex = 0;

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.style.display = i === index ? 'block' : 'none';
        });
    }

    //  answerQuestion as a global function
    window.answerQuestion = function(index, answer) {
        console.log(`Question ${index} answered with: ${answer}`);
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            window.location.href = 'main.html'; 
        } else {
            showQuestion(currentQuestionIndex);
        }
    }

    skipBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            window.location.href = 'main.html'; 
        } else {
            showQuestion(currentQuestionIndex);
        }
    });

    showQuestion(currentQuestionIndex);
});


let currentQuestion = 1;
const totalQuestions = 4;

function answerQuestion(questionNumber, answer) {
    // Ithe ajun logic nahi lehela 
    showNextQuestion();
}

function skipQuestion() {
    // Skip cha pan logic gandty 
    showNextQuestion();
}

function showNextQuestion() {
    document.getElementById(`question${currentQuestion}`).style.display = 'none';

    currentQuestion++;

    if (currentQuestion > totalQuestions) {
        window.location.href = 'main.html';
    } else {
        // Show next question
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
        updateProgressBar();
    }
}

