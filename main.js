function showImage() {
  var x = document.getElementById("char-img");
   x.style.display = "block";
 }

 function hideImage() {
   var x = document.getElementById("char-img");
   x.style.display = "none";
 }
function showImage2() {
  var x = document.getElementById("char-img2");
   x.style.display = "block";
 }

 function hideImage2() {
   var x = document.getElementById("char-img2");
   x.style.display = "none";
 }
function showImage3() {
  var x = document.getElementById("char-img3");
   x.style.display = "block";
 }

 function hideImage3() {
   var x = document.getElementById("char-img3");
   x.style.display = "none";
 }
function showImage4() {
  var x = document.getElementById("char-img4");
   x.style.display = "block";
 }

 function hideImage4() {
   var x = document.getElementById("char-img4");
   x.style.display = "none";
 }

document.getElementById('char-about1').addEventListener('mouseover', showImage);
document.getElementById('char-about1').addEventListener('mouseleave', hideImage);

document.getElementById('char-about2').addEventListener('mouseenter', showImage2);
document.getElementById('char-about2').addEventListener('mouseleave', hideImage2);
document.getElementById('char-about3').addEventListener('mouseover', showImage3);
document.getElementById('char-about3').addEventListener('mouseleave', hideImage3);
document.getElementById('char-about4').addEventListener('mouseover', showImage4);
document.getElementById('char-about4').addEventListener('mouseleave', hideImage4); 


//hamburger

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}