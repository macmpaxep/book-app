/* Оплата онлайн через PayPal (Payment Link, на нём работает Apple Pay) для страниц Ventu Press.
   Каждая страница книги содержит скрытый блок оплаты (section[data-book]). Он показывается,
   если для книги ниже указана ссылка PayPal. Ссылка открывается в этой же вкладке,
   после оплаты PayPal возвращает покупателя на страницу книги (Auto-return URL в кабинете PayPal).
   usd: цена в долларах (в PayPal), kzt: цена на сайте в тенге, id: код ссылки PayPal. */
(function () {
  var WA = "77753928056";
  var BOOKS = {
    "mission-2":        { id: "W3SPJ2RUCDZLY", usd: "18,75", kzt: "9 500",  title: "Миссия выполнима 2.0" },
    "mission":          { id: "4J4S3GFWHME58", usd: "17,75", kzt: "9 000",  title: "Миссия выполнима" },
    "zero-to-one":      { id: "UKQ3BEB3CZL9J", usd: "16,95", kzt: "8 600",  title: "От нуля к единице" },
    "skin-in-the-game": { id: "7989KT27RM2LJ", usd: "14,20", kzt: "7 200",  title: "Рискуя собственной шкурой" },
    "lesson-90000":     { id: "NWLJLVAB6KYW2", usd: "13,40", kzt: "6 800",  title: "Урок на 90.000$" },
    "notebook":         { id: "279R8Y78HRP4A", usd: "19,55", kzt: "9 900",  title: "Тетрадь в клетку" }
  };

  var sec = document.querySelector("[data-book]");
  if (!sec) return;
  var b = BOOKS[sec.getAttribute("data-book")];
  if (!b || !b.id) return;

  var box = sec.querySelector("[data-ppbox]");
  if (!box) return;
  sec.hidden = false;

  var price = document.createElement("p");
  price.style.cssText = "margin:0 0 10px;font:600 17px/1.3 system-ui,sans-serif;text-align:center";
  price.innerHTML = b.usd + " $ <span style=\"font-weight:400;opacity:.7\">(" + b.kzt + "&nbsp;₸)</span>";
  box.appendChild(price);

  var pay = document.createElement("a");
  pay.href = "https://www.paypal.com/ncp/payment/" + b.id;
  pay.textContent = "Оплатить онлайн";
  pay.style.cssText = "display:block;text-align:center;background:#0070ba;color:#fff;font:600 18px/1 system-ui,sans-serif;padding:16px;border-radius:12px;text-decoration:none";
  box.appendChild(pay);

  var hint = document.createElement("p");
  hint.textContent = "Откроется страница PayPal (карта или Apple Pay). Страница на английском: её можно перевести средствами браузера.";
  hint.style.cssText = "margin:10px 0 0;font:14px/1.4 system-ui,sans-serif;opacity:.7;text-align:center";
  box.appendChild(hint);

  var msg = "Здравствуйте! Оплатил(а) книгу «" + b.title + "» через PayPal (" + b.usd.replace(",", ".") + " $). Отправляю чек.";
  var wa = document.createElement("a");
  wa.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.textContent = "Отправить чек в WhatsApp";
  wa.style.cssText = "display:block;text-align:center;background:#25d366;color:#fff;font:600 16px/1 system-ui,sans-serif;padding:14px;border-radius:12px;text-decoration:none;margin-top:14px";
  box.appendChild(wa);
})();
