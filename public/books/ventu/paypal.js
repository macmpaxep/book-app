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
  sec.hidden = false;
  // прямая ссылка PayPal (вариант «одна кнопка»), страница оплаты на русском
  var a = document.createElement("a");
  a.href = "https://www.paypal.com/ncp/payment/" + id + "?locale.x=ru_RU&country.x=RU";
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = "Купить";
  a.style.cssText = "display:block;text-align:center;background:#0070ba;color:#fff;font:600 18px/1 system-ui,sans-serif;padding:16px;border-radius:12px;text-decoration:none";
  box.appendChild(a);
  var h = document.createElement("p");
  h.innerHTML = "Страница PayPal откроется на английском. Нажмите значок перевода <b>(🌐 / «Перевести»)</b> в адресной строке или в меню браузера, и она станет русской.";
  h.style.cssText = "margin:10px 0 0;font:14px/1.4 system-ui,sans-serif;opacity:.75;text-align:center";
  box.appendChild(h);
})();
