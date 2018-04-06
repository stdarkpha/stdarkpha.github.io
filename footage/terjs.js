$('#intro').localScroll();

function cekform() {
var x = document.forms["daftar"]["nama", "mail", "pesan"].value;
if (x == null || x == "") {
    alert("Harap Isi Form Dengan Benar!!");
    return false;
  }
}

function about(){
  document.title = 'Tentang Saya';
}

triger.onclick = function on() {
    document.getElementById("overlay").style.display = "block";
}

overlay.onclick = function off() {
    document.getElementById("overlay").style.display = "none";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("opsi");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}