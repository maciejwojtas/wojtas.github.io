 window.sr = ScrollReveal();
    sr.reveal('h1', {
        reset: true,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        duration: 1500,
        delay: 500,
        distance: 5,
        scale: 0.5,
    });
  sr.reveal('h3', {
        reset: true,
      easing: 'cubic-bezier(0,.67,.63,.92)',
        duration: 1100,
        origin: 'left',
        delay: 300,
        distance: '500px',
    }),
    sr.reveal('h2, .about p, .swiper-container, .comments .box, .contact .box', {
        reset: true,
        delay: 300,
      reset: false,
    }),
      sr.reveal(' .skills img', {
        origin: 'right',
        reset: true,
        delay: 300,
        distance: '30px',
      reset: false,
    }),
           sr.reveal('.skills p', {
        origin: 'left',
        reset: true,
        delay: 300,
        distance: '30px',
      reset: false,
    });

        
             
             