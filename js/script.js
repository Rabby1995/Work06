$(document).ready(function(){
  $('#menu').slicknav();
});
/* FAQ Part */
var coll = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/* Testimonial Part */
$('.test_bottom').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
  navClass:['owl-prev','owl-next'],
  responsive:{
      0:{
          items:1
      },
      576:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

/* Search Box */
