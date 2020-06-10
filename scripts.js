$(function(){
  $("#nav-placeholder").load("nav.html");
  $.get("nav.html", function(data){
       $("#nav-placeholder").replaceWith(data);
    });
    function choosePic() {
      var img = document.querySelectorAll(".rounded-circle");
        for(i=0; i < img.length; i++){
          const myPix = new Array("imgs/letter_A.png", "imgs/Letter_b.png", "imgs/letter_c.png", "imgs/letter_d.png", "imgs/letter_e.png", "imgs/letter_f.png", "imgs/letter_g.png", "imgs/letter_h.png", "imgs/letter_i.png", "imgs/letter_j.png", "imgs/letter_k.png", "imgs/letter_l.png", "imgs/letter_m.png", "imgs/letter_n.png");
          var randomNum = Math.floor(Math.random() * myPix.length);
          img[i].src = myPix[randomNum];
        }
      }
});
