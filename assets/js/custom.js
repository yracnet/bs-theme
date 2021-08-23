
//const appendResource = function (tag, attrs) {
//  const el = document.createElement(tag)
//  Object.keys(attrs).forEach(function (key) {
//    el.setAttribute(key, attrs[key])
//  })
//
//  document.body.appendChild(el)
//}
//
//appendResource('link', { href: '/assets/css/bootstrap-org.css', rel: 'stylesheet' });
//appendResource('script', 'src', '/assets/css/bootstrap-org.js');


const ds = document.querySelectorAll('*[class]');

Array.from(ds).forEach(el => {
  el.className = Array.from(el.classList).map(it => 'bs-' + it).join(' ');
  console.log('el', el, el.className);
});