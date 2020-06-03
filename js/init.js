window.addEventListener('DOMContentLoaded', () => {

  $('#burgerButton').on('click', () => {
    $('#menu').addClass('active');
  });
  $('#closeMenu').on('click', ()  => {
    $('#menu').removeClass('active');
  });
  $('#menu').on('click', (event) => {
    if(event.target.id == 'menu') {
      $('#menu').removeClass('active');
    }
  });

  $('.vertical-menu li').each((i, item) => {
    if($(item).find('ul').length > 0) {
      $(item).append('<div class="vertical__arrow"></div>');
      $(item).find('div').click(() => {
        $(item).closest('li').find('ul').eq(0).slideToggle();
        $(item).toggleClass('open');
      });
    }
  });
  
  if(window.innerWidth < 990) {
    $('.header-bottom-menu li').each((i, item) => {
      if($(item).find('ul').length > 0) {
        console.log(item);
        $(item).append('<div class="header-bottom-menu__arrow"></div>');
        $(item).find('div').click(() => {
          $(item).closest('li').find('ul').eq(0).slideToggle();
          $(item).toggleClass('open');
        });
      }
    });
  }
  // $('.tooltip').tooltip({
  //   show: { effect: "hightlight", duration: 200 },
  //   hide: { effect: "drop", duration: 300 },
  //   position: { my: "right+25 top+5", at: "right bottom", collision: "flipfit" },
  //   tooltipClass: "tooltip",
  //   open: (event, ui) => {

  //   },
  //   content: (event) => {
  //     console.log(this);
  //     return $(event.target).next('.tooltip-content');
  //   }
  // });
  
});