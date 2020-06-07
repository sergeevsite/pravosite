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
  
  //Адаптивное выпадающее меню
  let mainMenu = document.querySelector('.main-menu');
  let arrowMenu = document.querySelectorAll('.arrow');

  if(window.matchMedia("(max-width: 990px)").matches){
    mainMenu.classList.add('touch');
    for(i = 0; i < arrowMenu.length; i++){
      let subMenu = arrowMenu[i].nextElementSibling;
      arrowMenu[i].addEventListener('click', (event) => {
        subMenu.classList.toggle('open');
        event.target.classList.toggle('active');
        event.target.previousElementSibling.classList.toggle('active');
      });
    }
  }else{
    mainMenu.classList.add('desktop');
    if(arrowMenu.length !== 0) {
      for(i = 0; i < arrowMenu.length; i++){
        arrowMenu[i].previousElementSibling.classList.add('active');
      }
    }
  }

  //Faq Section
  if($("#faqSection").length !== 0) {
    $("#faqSection").accordion({
      collapsible: true,
      heightStyle: "content",
      active: false
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