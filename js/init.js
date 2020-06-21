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

  //Tabs
  const tabs = document.querySelectorAll('.tabs__item'),
        tabsContent = document.querySelectorAll('.tabs-content');

  if(tabs.length !== 0 && tabsContent.length !== 0) {
    tabs[0].classList.add('active');
    tabsContent[0].classList.add('active');
  }

  tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('active'));
      tabsContent.forEach(content => content.classList.remove('active'));
      tabs[i].classList.add('active');
      tabsContent[i].classList.add('active');
    });
  });
  
  // toggle
  const showToggleContent = (element, desktop, mobile) => {
  
    const toggle = document.querySelectorAll(element);

    toggle.forEach((item) => {
      if(window.innerWidth > 768 && desktop) {
        item.addEventListener('click', () => {
            for(let i = 0; i < toggle.length; i++) {
              toggle[i].classList.toggle('active');
              toggle[i].nextElementSibling.classList.toggle('active');
            }
        });
      } 
      if(window.innerWidth < 768 && mobile){
        item.addEventListener('click', () => {
          item.classList.toggle('active');
          item.nextElementSibling.classList.toggle('active');
        });
      }
    });

  };

  showToggleContent('.outsource__toggle', true, true);
  showToggleContent('.subscribe__toggle', false, true);

  //modal
  const dataModal = document.querySelectorAll('[data-modal]'),
        dataBtn = document.querySelectorAll('[data-btn]');

  if(dataModal.length > 0 && dataBtn.length > 0) {
    dataModal.forEach((modal) => {
      dataBtn.forEach((button) => {
        button.addEventListener('click', () => {
          if(button.dataset.btn === modal.dataset.modal) {
            modal.classList.add('open');
          }
        });
      });
      modal.addEventListener('click', (event) => {
        if(event.target.className === 'modal__close' || event.target.className === 'modal open') {
          if(modal.classList.contains('open')) {
            modal.classList.remove('open');
          }
        }
      });
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