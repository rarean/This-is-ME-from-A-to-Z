
$(function(){
    function choosePic() {
      var img = document.querySelectorAll(".rounded-circle");
         for(i=0; i < img.length; i++){
          const myPix = new Array("img/letter_A.png", "img/Letter_b.png", "img/letter_c.png", "img/letter_d.png", "img/letter_e.png", "img/letter_f.png", "img/letter_g.png", "img/letter_h.png", "img/letter_i.png", "img/letter_j.png", "img/letter_k.png", "img/letter_l.png", "img/letter_m.png", "img/letter_n.png");
          var randomNum = Math.floor(Math.random() * myPix.length);
          img[i].src = myPix[randomNum];
        }
      }
  function total(){
     let quantity = 0;
     $('bookNum').val = el ;
     console.log ('this')
  }
});

