// 1
// $(() => {
//   let popup = $(".popup");
//   let popupTitle = $(".popup__title");
//   let popupText = $(".popup__text");
//   let popupBtn = $(".popup__btn");
//   let callBtn = $('.call__popup')
//   callBtn.on('click', () => {
//     popup.addClass('popup__block')
//     popup.removeClass('popup__none')

//   })
//   function changePopup(title, text) {
//     popupTitle.text(title);
//     popupText.text(text);
//     popup.addClass('popup__position')
//     popupBtn.on('click', () => {
//       popup.addClass('popup__none')
//     })
//   }
//   changePopup(
//     "hello Bekjan ",
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum mollitia consequuntur quia hic nihil, dicta, in illum ducimus doloremque blanditiis similique labore ea. Cumque, maxime minima, natus soluta ad voluptatum excepturi praesentium optio ratione facilis sed sapiente quisquam quas fugit, voluptatem delectus eveniet? Perspiciatis, cumque praesentium soluta ea accusantium aliquid."
//   );
// });

// 2
$(() => {
  let tabItem = $(".tab__item");
  tabItem.on("click", function () {
    let tab = $(this).attr("data-tab");
    $(".tab__item.active").removeClass("active");
    $(this).addClass("active");
    $(".tab__text.active").removeClass("active");
    $(`.tab__text[data-tab="${tab}"]`).addClass("active");
  });
});

// 3

// $(() => {
//   let colorText = $(".color__input-text");
//   let colorChoose = $(".color__input-select");
//   let colorBtn = $(".color__btn");
//   let lastColorText, lastColorHex;

//   function getColor(colorText, colorHex) {
//     colorBtn.on("click", function (e) {
//       e.preventDefault();
//       let colorTextChanged = colorChoose.val();
//       colorText.val(colorTextChanged);
//       if ($(colorText).val() != "") {
//         $("body").css({ background: $(colorText).val() });
//         lastColorText = localStorage.setItem("bgcolor", colorText.val());
//       } else {
//         $("body").css({ background: $(colorHex).val() });
//         lastColorHex = localStorage.setItem("bgcolorHex", colorHex.val());
//       }
//     });
//   }

//   function init() {
//     let colorChanged = localStorage.getItem("bgcolor");
//     colorChoose.attr("value", colorChanged);
//     $("body").css({
//       background: colorChanged,
//     });
//     colorText.val(colorChanged)
//   }

//   init();
//   getColor(colorText, colorChoose);
// });

// 3

// let colors = [];

// $(".form-color").on("submit", function (e) {
//   e.preventDefault();
//   let color = $(".color").val();
//   setColorItem(".colors", color);
//   colors.push(color);
//   localStorage.setItem("colors", JSON.stringify(colors));
// });
// function setColorItem(selector, color) {
//   let item = $("<div>").addClass("color-item").css("background", color);
//   $(selector).append(item);
// }
// function readColorFromStorage() {
//   colors = JSON.parse(localStorage.getItem("colors")) || [];
//   colors.forEach((color) => {
//     setColorItem(".colors", color);
//   });
// }
// readColorFromStorage();

// $(".colors").on("contextmenu", ".color-item", function (e) {
//   let isDelete = confirm("Вы точно хотите удалить?");
//   e.preventDefault();
//   if (isDelete) {
//     let index = $(this).index();
//     $(this).remove();
//     JSON.parse(localStorage.getItem("colors"));
//     colors.splice(index, 1);
//     localStorage.setItem("colors", JSON.stringify(colors));
//   }
// });
