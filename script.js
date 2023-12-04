// Observer checking if there are any oobjects intersecting the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
    // Adds the class show to the white beam if it is on the screen
      if (entry.isIntersecting && entry.target.classList.contains('white-beam')) {
        entry.target.classList.add('show')
      }
    // Adds the class show to the triangle if it is on the screen
      if (entry.isIntersecting && entry.target.classList.contains('rainbow-triangle')) {
        entry.target.classList.add('show')
      }
    // Adds the class show to the panel if it is on the screen
      if (entry.isIntersecting && entry.target.classList.contains('panel')) {
        entry.target.classList.add('show')
      }
    })
  });
// White Beam
  const hiddenElements = document.querySelectorAll('.white-beam');
  hiddenElements.forEach((el) => observer.observe(el));
// Triangle
  const rainbowTriangle = document.querySelectorAll('.rainbow-triangle');
  rainbowTriangle.forEach((el) => observer.observe(el));
// Panel
  const panel = document.querySelectorAll('.panel');
  panel.forEach((el) => observer.observe(el));
// Chalkboard
var chalkboard = document.querySelector('.chalkboard');

function Move() {
    chalkboard.classList.add("move-up");
}