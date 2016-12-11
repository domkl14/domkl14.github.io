const LOAD_FADE_TIME = 1500;
const SECTION_FADE_TIME = 300;

/**
 * On DOM load
 */
document.addEventListener('DOMContentLoaded', function() {
  $('#particles-js').animate({opacity: 0.8}, LOAD_FADE_TIME, function() {
    $('.container').fadeIn(LOAD_FADE_TIME);
  });
  
  $('#bio-link').click(function() {
    if ($('#bio').css('display') == 'block') {
      hideSections();
    } else {
      hideSections(SECTION_FADE_TIME, function() {
        $('#bio').fadeIn(SECTION_FADE_TIME);
      });
    }
  });

  $('#projects-link').click(function() {
    if ($('#projects').css('display') == 'block') {
      hideSections();
    } else {
      hideSections(SECTION_FADE_TIME, function() {
        $('#projects').fadeIn(SECTION_FADE_TIME);  
      });
    }
  });

  $('#contact-link').click(function() {
    if ($('#contact').css('display') == 'block') {
      hideSections();
    } else {
      hideSections(SECTION_FADE_TIME, function() {
        $('#contact').fadeIn(SECTION_FADE_TIME);  
      });
    }
  });
});

/**
 * Hide all sections
 * @param fade time, callback function
 */
function hideSections(time, callback) {
  $('.section').fadeOut(time);  
  if (callback) {
    window.setTimeout(callback, time); 
  }
}

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#330000"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 2.5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#330000",
        "opacity": 0.4,
        "width": 0.6
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
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
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 150
        },
        "push": {
          "particles_nb": 0
        },
        "remove": {
          "particles_nb": 0
        }
      }
    },
    "retina_detect": true
  }
);