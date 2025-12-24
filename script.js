let flipped = 0;

function goToPage(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${n}`).classList.add('active');
}

function flip(el, text) {
  if (el.classList.contains('done')) return;
  el.textContent = text;
  el.classList.add('done');
  flipped++;

  if (flipped === 5) {
    setTimeout(() => goToPage(4), 1500);
  }
}

function openMessage() {
  document.getElementById('message').style.display = 'block';
}
