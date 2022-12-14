// Condicional *
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion *
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
