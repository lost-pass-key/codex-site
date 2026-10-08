const steps = [
  { number: '01', word: 'Frame' },
  { number: '02', word: 'Delegate' },
  { number: '03', word: 'Inspect' },
  { number: '04', word: 'Decide' }
];

const loopButtons = [...document.querySelectorAll('.loop-step')];
const loopVisual = document.querySelector('.loop-visual');
const loopNumber = document.querySelector('.loop-number');
const loopWord = document.querySelector('.loop-word');

loopButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = Number(button.dataset.step);
    loopButtons.forEach((item, itemIndex) => {
      const active = itemIndex === index;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    loopVisual.style.setProperty('--progress', `${(index + 1) * 25}`);
    loopNumber.textContent = steps[index].number;
    loopWord.textContent = steps[index].word;
  });
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));
