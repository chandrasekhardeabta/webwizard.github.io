(function($) {
    "use strict";
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass('show');
        });
        return false;
    });
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
    $(document).on('ready', function() {
        $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });
    $('.sidebar-btn').on('click', function() {
        $('.sidebar-popup').addClass('open');
        $('.sidebar-wrapper').addClass('open');
    });
    $('.close-sidebar-popup, .sidebar-popup').on('click', function() {
        $('.sidebar-popup').removeClass('open');
        $('.sidebar-wrapper').removeClass('open');
    });
    new WOW().init();
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
        onInitialized: function(event) {
            var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
            doAnimations($firstAnimatingElements);
        },
        onChanged: function(event) {
            var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
            doAnimations($firstAnimatingElements);
        }
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationDuration = $this.data('duration');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay,
                'animation-duration': $animationDuration,
                '-webkit-animation-duration': $animationDuration,
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 70,
        nav: false,
        navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");
    });
    $('.counter').countTo();
    $('.counter-box').appear(function() {
        $('.counter').countTo();
    }, {
        accY: -100
    });
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });
    // $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    //     type: "iframe",
    //     mainClass: "mfp-fade",
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });
    $(window).scroll(function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").addClass('active');
        } else {
            $("#scroll-top").removeClass('active');
        }
    });
    $("#scroll-top").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 140) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });
    $('[data-countdown]').each(function() {
        let finalDate = $(this).data('countdown');
        $(this).countdown(finalDate, function(event) {
            $(this).html(event.strftime('<div class="time-wrap">' + '<span class="time"><span>%-D</span><span class="unit">Day%!D</span></span>' + ' <span class="divider">:</span> ' + '<span class="time"><span>%H</span><span class="unit">Hour%!H</span></span>' + ' <span class="divider">:</span> ' + '<span class="time"><span>%M</span><span class="unit">Min%!M</span></span>' + ' <span class="divider">:</span> ' + '<span class="time"><span>%S</span><span class="unit">Sec%!S</span></span>' + '</div>'));
        });
    });
    let date = new Date().getFullYear();
    $("#date").html(date);
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
    const siteNav = document.getElementById('siteNav');  // Adjusted to match your nav ID
    const logo = document.querySelector('.custom-logo-link img');  // Adjusted to select the image inside the custom-logo-link
    const navbarHeight = siteNav.offsetHeight;  // Get the height of the navbar

    if (window.scrollY > 50) {
      siteNav.classList.add('fixed-top');
      // Add padding top to show content behind navbar
      document.body.style.paddingTop = `${navbarHeight}px`;
      // Change logo URL to dark version
      logo.src = logo.src.replace('tecLogo_Light', 'tecLogo_Dark');
    } else {
      siteNav.classList.remove('fixed-top');
      // Remove padding top from body
      document.body.style.paddingTop = '0';
      // Revert logo URL to light version
      logo.src = logo.src.replace('tecLogo_Dark', 'tecLogo_Light');
    }
  });
});



document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Technovation 3.0", "Empowering the Future.", "Innovate Beyond Limits."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1.hero-title").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 500);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 800);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

// Function to animate the counter
function animateCounter(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let obj = document.getElementById(id);
  let timer = setInterval(function() {
      current += increment;
      obj.textContent = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

// Get the visitor count from the hidden span
let visitorCount = parseInt(document.getElementById('visitor-count').textContent, 10);

// Start the animated counter from 0 to the visitor count
animateCounter('animated-counter', 0, visitorCount, 2000); // Duration: 2000ms (2 seconds)




$(document).ready(function() {
  $('.card-content').on('mousemove', function(e) {
    var card = $(this);
    var cardRect = card[0].getBoundingClientRect();
    var mouseX = e.clientX - cardRect.left;
    var mouseY = e.clientY - cardRect.top;
    var gradientX = (mouseX / cardRect.width) * 100;
    var gradientY = (mouseY / cardRect.height) * 100;
    card.css('background', 'radial-gradient(circle at ' + gradientX + '% ' + gradientY + '%, #ffecd2, #fcb69f, #ff9a9e)');
  });
  $('.card-content').on('mouseleave', function() {
    $(this).css('background', 'linear-gradient(45deg, #ff9a9e, #fad0c4, #ffecd2)');
  });
  $('.card-button').on('click', function(e) {
    e.preventDefault();
    $(this).css('transform', 'scale(0.95)');
    setTimeout(() => {
      $(this).css('transform', 'scale(1)');
    }, 100);
  });
});

/**
 * Canvas Experiment
 * Based on https://tympanus.net/Development/AnimatedHeaderBackgrounds/index.html
 * Deps: GreenSocks TweenLite
 */

/**
 * Constructor
 */
function Animate(canvas, options) {
    this.canvas = canvas;
    this.options = defaults(options || {}, this.options);
    this.init();
  }
  
  /**
   * Default options
   */
  Animate.prototype.options = {
    density: 10, // Affects how many poitns are created
    speed: 10, // Time in seconds to shift points
    sync: false, // Should points move in sync
    distance: 100, // Distance to move points
    lineColor: '255, 255, 255',
    circleColor: '255, 255, 255',
    radius: 3,
    lineWidth: 1,
    lines: 3, // Number of closest lines to draw
    updateClosest: false, // Update closet points each loop
    mouse: true // Link to mouse or random
  };
  
  
  /**
   * Setup everything
   */
  Animate.prototype.init = function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.target = {
      position: {
        x: this.width / 2,
        y: this.height / 2 } };
  
  
  
    // Setup canvas
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  
    this.ctx = canvas.getContext('2d');
  
    window.addEventListener('resize', this.resize.bind(this));
  
    if (this.options.mouse === true && !('ontouchstart' in window)) {
      window.addEventListener('mousemove', this.mousemove.bind(this));
    }
  
    this.points = [];
    for (var x = 0; x < this.width; x = x + this.width / this.options.density) {
      for (var y = 0; y < this.height; y = y + this.height / this.options.density) {
        var point = new Point({
          x: x + Math.random() * this.width / this.options.density,
          y: y + Math.random() * this.height / this.options.density },
        this.ctx, this.points.length + 1, this.options);
        this.points.push(point);
      }
    }
  
    // Setup Circles
    for (var i in this.points) {
      this.points[i].circle = new Circle(this.points[i], this.ctx, this.options);
    }
  
    this.findClosest(); // Points
  
    this.animate(); // Start the loop
  
    this.shiftPoints(); // Start the tween loop
  
    if (this.options.mouse === false) {
      this.moveTarget(); // Start the random target loop
    }
  
  };
  
  /*
   * Cycles through each Point and finds its neighbors
   */
  Animate.prototype.findClosest = function () {
    for (var i = 0; i < this.points.length; i++) {
      // Save the point
      var point = this.points[i];
      // Reset
      point.closest = [];
      // Cycle through the others
      for (var j = 0; j < this.points.length; j++) {
        // Point to test
        var testPoint = this.points[j];
        if (point.id !== testPoint.id) {
          var placed = false,k;
          for (k = 0; k < this.options.lines; k++) {
            if (!placed) {
              if (typeof point.closest[k] === 'undefined') {
                point.closest[k] = testPoint;
                placed = true;
              }
            }
          }
  
          for (k = 0; k < this.options.lines; k++) {
            if (!placed) {
              if (point.distanceTo(testPoint) < point.distanceTo(point.closest[k])) {
                point.closest[k] = testPoint;
                placed = true;
              }
            }
          }
        }
      }
    }
  };
  
  /**
   * Animation Loop
   */
  Animate.prototype.animate = function () {
    var i;
    // Should we recalucate closest?
    if (this.options.updateClosest) {
      this.findClosest();
    }
  
    // Calculate Opacity
    for (i in this.points) {
      if (this.points[i].distanceTo(this.target, true) < 5000) {
        this.points[i].opacity = 0.4;
        this.points[i].circle.opacity = 0.6;
      } else if (this.points[i].distanceTo(this.target, true) < 10000) {
        this.points[i].opacity = 0.2;
        this.points[i].circle.opacity = 0.3;
      } else if (this.points[i].distanceTo(this.target, true) < 30000) {
        this.points[i].opacity = 0.1;
        this.points[i].circle.opacity = 0.2;
      } else {
        this.points[i].opacity = 0.05;
        this.points[i].circle.opacity = 0.05;
      }
    }
    // Clear
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (i in this.points) {
  
      this.points[i].drawLines();
      this.points[i].circle.draw();
    }
    // Loop
    window.requestAnimationFrame(this.animate.bind(this));
  };
  
  /**
   * Starts each point in tween loop
   */
  Animate.prototype.shiftPoints = function () {
    for (var i in this.points) {
      this.points[i].shift();
    }
  };
  
  
  /**
   * Make sure the canvas is the right size
   */
  Animate.prototype.resize = function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  };
  
  /**
   * Mouse Move Event - Moves the target with the mouse
   * @param    event   {Object}   Mouse event
   */
  Animate.prototype.mousemove = function (event) {
    if (event.pageX || event.pageY) {
      this.target.position.x = event.pageX;
      this.target.position.y = event.pageY;
    } else if (event.clientX || event.clientY) {
      this.target.position.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      this.target.position.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
  };
  
  /**
   * Randomly move the target
   */
  Animate.prototype.moveTarget = function () {
    var _this = this;
    TweenLite.to(this.target.position, 2, {
      x: Math.random() * (this.width - 200) + 100,
      y: Math.random() * (this.height - 200) + 100,
      ease: Expo.easeInOut,
      onComplete: function () {
        _this.moveTarget();
      } });
  
  };
  
  /**
   * Point Constructor
   * @param    position   {Object}     set of x and u coords
   * @param    ctx        {Object}     Canvas context to draw on
   * @param    options    {Object}     options passed from main function
   */
  function Point(position, ctx, id, options) {
    this.options = options || {};
    this.id = id;
    this.ctx = ctx;
    this.position = position || { x: 0, y: 0 };
    this.origin = {
      x: this.position.x,
      y: this.position.y };
  
    this.opacity = 0;
    this.closest = [];
  }
  
  /**
   * Caluclates the distance to another point
   * @param    point    {Object}    Another Point
   * @param    abs      {Boolean}   Return the absolute value or not
   * @returns  {Number}
   */
  Point.prototype.distanceTo = function (point, abs) {
    abs = abs || false;
    var distance = Math.pow(this.position.x - point.position.x, 2) + Math.pow(this.position.y - point.position.y, 2);
    return abs ? Math.abs(distance) : distance;
  };
  
  /**
   *  Draws lines to the closet points
   */
  Point.prototype.drawLines = function () {
    for (var i in this.closest) {
      if (this.opacity > 0) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        var test = i + 1;
        if (!this.closest[test]) {
          test = 0;
        }
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = 'rgba(' + this.options.lineColor + ', ' + this.opacity + ')';
        this.ctx.lineWidth = this.options.lineWidth;
  
  
        this.ctx.lineTo(this.closest[i].position.x, this.closest[i].position.y);
  
        this.ctx.stroke();
      }
    }
  };
  
  /**
   * Tween loop to move each point around it's origin
   */
  Point.prototype.shift = function () {
    var _this = this,
    speed = this.options.speed;
  
    // Random the time a little
    if (this.options.sync !== true) {
      speed -= this.options.speed * Math.random();
    }
    TweenLite.to(this.position, speed, {
      x: this.origin.x - this.options.distance / 2 + Math.random() * this.options.distance,
      y: this.origin.y - this.options.distance / 2 + Math.random() * this.options.distance,
      ease: Expo.easeInOut,
      onComplete: function () {
        _this.shift();
      } });
  
  };
  
  /**
   * Circle Constructor
   * @param    point   {Object}    Point object
   * @param    ctx     {Object}    Context to draw on
   * @param    options {Object}    options passed from main function
   */
  function Circle(point, ctx, options) {
    this.options = options || {};
    this.point = point || null;
    this.radius = this.options.radius || null;
    this.color = this.options.color || null;
    this.opacity = 0;
    this.ctx = ctx;
  }
  
  
  /**
   * Draws Circle to context
   */
  Circle.prototype.draw = function () {
    if (this.opacity > 0) {
      this.ctx.beginPath();
      this.ctx.arc(this.point.position.x, this.point.position.y, this.options.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = 'rgba(' + this.options.circleColor + ', ' + this.opacity + ')';
      this.ctx.fill();
    }
  };
  
  // Get the balls rolling
  new Animate(document.getElementById('canvas'));
  
  
  /**
   * Utility Function to set default options
   * @param    object    {object}
   * @param    src  {object}
   */
  function defaults(object, src) {
    for (var i in src) {
      if (typeof object[i] === 'undefined') {
        object[i] = src[i];
      }
    }
    return object;
}

