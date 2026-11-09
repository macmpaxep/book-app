/* Оплата картой онлайн через PayPal для страниц Ventu Press.
   Каждая страница книги содержит скрытый блок оплаты. Он показывается только если ниже
   для адреса книги указан ID кнопки PayPal (Hosted Button ID, например ENGZK52365MSA).
   Пустая строка "" = блок оплаты картой на этой странице скрыт.
   Одна кнопка PayPal = один товар и одна цена, поэтому для каждой книги нужна своя кнопка. */
(function () {
  var CONFIG = {
    sdk: "https://www.paypal.com/sdk/js?client-id=BAAgtuSHfBoEx7TUy6zZzgelliZJgEy-Ii5C5O-C8zAqKaNbMxT0wxcD0RkIgpd_XnLJBzo5QCNbbysnMc&components=hosted-buttons&disable-funding=venmo&currency=USD&locale=ru_RU",
    buttons: {
      "mission-2": "ENGZK52365MSA",
      "mission": "",
      "zero-to-one": "",
      "skin-in-the-game": "",
      "notebook": "",
      "lesson-90000": ""
    }
  };

  var sec = document.querySelector("[data-book]");
  if (!sec) return;
  var id = CONFIG.buttons[sec.getAttribute("data-book")];
  if (!id) return;

  var box = sec.querySelector("[data-ppbox]");
  var fail = sec.querySelector("[data-ppfail]");
  box.id = "paypal-container-" + id;
  sec.hidden = false;

  // подсказка над виджетом: форма PayPal на английском
  var h = document.createElement("p");
  h.innerHTML = "Форма оплаты PayPal на английском. Если нужен русский, переведите страницу средствами браузера или оплатите переводом на карту ниже.";
  h.style.cssText = "margin:0 0 10px;font:14px/1.4 system-ui,sans-serif;opacity:.75";
  box.parentNode.insertBefore(h, box);

  function render() {
    try { paypal.HostedButtons({ hostedButtonId: id }).render("#" + box.id); }
    catch (e) { fail.hidden = false; }
  }
  if (window.paypal && paypal.HostedButtons) { render(); return; }
  var s = document.createElement("script");
  s.src = CONFIG.sdk;
  s.onload = render;
  s.onerror = function () { fail.hidden = false; };
  document.head.appendChild(s);
})();
