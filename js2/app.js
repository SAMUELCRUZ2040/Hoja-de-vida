particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 600
            }
        },
        "color": {
            "value": "#D9D9D9"
        },
        "shape": {
            "type": "star",
            "stroke": {
                "width": 0,
                "color": "#5A8687"
            },
            "polygon": {
                "nb_sides": 12
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.10,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#FFF",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 900
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 20,
                "duration": 2,
                "opacity": 0.8,
                "speed": 6
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});