//слайд-шоу хедер
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}


//модальное окно с видео
var modal = document.getElementById('modalVideo');
var btn = document.getElementById('btnVideo');
var span = document.getElementsByClassName("close")[0];
var video = document.getElementById('video');

btn.onclick = function() {
  modal.style.display = "block";
  video.play();
}

span.onclick = function() {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;  
  }
}
