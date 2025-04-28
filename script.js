let lastScrollTop = 0;
let rotation = 0;

window.addEventListener('scroll', () => {
  const shape = document.querySelector('#blue-shape img'); // rotate the image
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    rotation += 5;
  } else if (scrollTop < lastScrollTop) {
    rotation -= 5;
  }

  shape.style.transform = `rotate(${rotation}deg)`;
  shape.style.transition = "transform 0.2s ease"; // smooth rotation
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
