// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Developer","Autodidact","Freelancer","Blogger"],
    typeSpeed: 50,
    backSpeed:30,
    startdelay:100,
    loop:true,
    cursorChar:'|',
    showCursor: true,
    loopCount: false,
});   

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });


  const mainmenu = document.querySelector('.mainMenu');
const closemenu = document.querySelector('.closeMenu');
const openmenu = document.querySelector('.openMenu');


openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close(){
    mainmenu.style.top = '-1000%';
}




