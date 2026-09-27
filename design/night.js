// Design pages only. Uses the same localStorage key as the app ('theme').

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

function toggleNight() {
  var dark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
