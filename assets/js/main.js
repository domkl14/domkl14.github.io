const LOAD_FADE_TIME = 1500;
const SECTION_FADE_TIME = 300;

/**
 * On DOM load
 */
document.addEventListener('DOMContentLoaded', function() {
  $('#particles-js').animate({opacity: 1}, LOAD_FADE_TIME, function() {
    $('.container').fadeIn(LOAD_FADE_TIME);
  });
  
  $('#bio-link').click(function() {clickHandler($('#bio-link'), $('#bio'))});
  $('#projects-link').click(function() {clickHandler($('#projects-link'), $('#projects'))});
  $('#contact-link').click(function() {clickHandler($('#contact-link'), $('#contact'))});
});

/**
 * Click handler
 * @param jquery element for section link and section
 */
function clickHandler(sectionLink, section) {
  resetSectionLinks();
  if (section.css('display') == 'block') {
    hideSections();
  } else {
    sectionLink.css('color', '#640000').unbind('mouseenter mouseleave');
    hideSections(SECTION_FADE_TIME, function() {
      section.fadeIn(SECTION_FADE_TIME);  
    });
  }
}

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

/**
 * Reset section link colors
 */
function resetSectionLinks() {
  $('.section-link').css({'color': '#000000'}).hover(function() {
    $(this).css('color', '#640000')}, function() {$(this).css({'color': '#000000'})});
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
        "value": "#500000"
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
        "color": "#500000",
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