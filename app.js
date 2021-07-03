
$(document).ready(function () {
  $(".name, .student, .small-intro").lettering();

  // image overlay effect
  anime({
    targets: '.home .person-overlay',
    translateX: 1100,
    delay: 500,
    duration: 1500,
    easing: 'easeInSine'
  })
  anime({
    targets: '.home .person img',
    opacity: 1,
    delay: 1000,
    duaration: 1500,
    easing: 'easeInSine'
  })

  // letter
  anime({
    targets: '.student span',
    opacity: 1,
    duration: 1000,
    easing: 'easeInSine',
    delay: anime.stagger(100,{start:2000})
  })
  //name
  anime({
    targets: '.name span',
    opacity: 1,
    duration: 1500,
    easing: 'easeInSine',
    delay: anime.stagger(100,{start:3500})
  })
  anime({
    targets: '.logo',
    opacity: 1,
    duration: 1000,
    easing: 'easeInSine',
    delay: anime.stagger(100,{start:8000})
  })
  anime({
    targets: '.name .char1,.name .char3,.name .char5,.name .char7',
    keyframes: [
      {
        translateY: 50, duration: 1500
      }
    ],
    delay: 6500,
    easing: 'easeInOutExpo',
  })
  anime({
    targets: '.name .char2,.name .char4,.name .char6,.name .char8',
    keyframes: [
      {
        translateY: -50, duration: 1500
      }
    ],
    delay: 6500,
    easing: 'easeInOutExpo',
  })
  anime({
    targets: '.menu',
    opacity: 1,
    duration: 1000,
    easing: 'easeInSine',
    delay: anime.stagger(100,{start:9500})
  })
  anime({
    targets: '.small-intro span',
    opacity: 1,
    duration: 1000,
    easing: 'easeInSine',
    delay: anime.stagger(50,{start:10500})
  })


});

