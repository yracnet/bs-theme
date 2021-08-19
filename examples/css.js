
const ds = document.querySelectorAll('*[cclass]');

Array.from(ds).forEach(el => {
    el.className = Array.from(el.classList).map(it => 'bs-' + it).join(' ');
    console.log('el', el, el.className);
});