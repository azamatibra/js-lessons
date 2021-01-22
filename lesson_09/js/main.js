// // 1
// $(function () {
//   $(".btn-add").on("click", (e) => {
//     e.preventDefault();
//     let task = $(".add-task").val();
//     let taskItem = $("<div>");
//     $(".add-task").val('')
//     if (task.length > 0) {
//       $(task).html("hello");
//       taskItem.html(task);
//       $(".wrapper").append(taskItem);
//       pushAdv();
//       function pushAdv() {
//         let cancel = $(
//           '<span class="cancel"><img src="img/cancel.png" alt="cancel"></span>'
//         );
//         taskItem.addClass("add-task");
//         taskItem.append(cancel);
//         cancel.on("click", (e) => {
//           if (e.target.closest("img")) {
//             taskItem.remove();
//           }
//         });
//       }
//     } else {
//       alert("Заполните текст");
//     }
//   });
// });

// 2
// $(() => {
//   let wrapper = $(".wrapper");
//   let start = $(".start");
//   let stop = $(".stop");
//   function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//   }

//   function autoPlay() {
//     let element = $('<div class="element"></div>');
//     element.html(getRandom(1, 20));
//     wrapper.append(element);
//   }
//   let interval = setInterval(autoPlay, 1000);

//   start.on("click", () => {
//     interval = setInterval(autoPlay, 1000);
//   });
//   stop.on("click", () => {
//     clearInterval(interval);
//   });
// });

// 3
// $(() => {
//   let time = $(".time__text");
//   let start = $(".time__start");
//   let timeMinute = $(".time__minute");
//   let timeSec = $(".time__sec");
//   let timePause = $(".time__pause");
//   let timeHour = $(".time__hour");
//   let timeReset = $(".time__reset");
//   let timeCircle = $(".time__circle");
//   let circleWrap = $(".circle__wrap");
//   let timer;
//   let hour = 0;
//   let sec = 0;
//   let minute = 0;

//   start.on("click", () => {
//     timer = setInterval(startSec, 1000);
//   });
//   timePause.on("click", () => {
//     timer = clearInterval(timer);
//   });
//   timeReset.on("click", () => {
//     reset();
//   });
//   timeCircle.on("click", () => {
//     circle();
//   });

//   function startSec() {
//     if (sec < 60) {
//       sec++;
//       sec = String(sec);
//       $(timeSec).text(sec);
//       if (sec.length == 1) {
//         $(timeSec).text(0 + sec);
//       }
//     }
//     if (sec == 60) {
//       startMinute();
//     }
//   }
//   function startMinute() {
//     if (minute < 60) {
//       compareMinute();
//       function compareMinute() {
//         minute++;
//         sec = 0;
//         minute = String(minute);
//         $(timeMinute).text(" " + minute);
//         if (minute.length == 1) {
//           $(timeMinute).text("0" + minute);
//         }
//       }
//     }

//     if (minute == 60) {
//       startHour();
//       compareMinute();
//     }
//   }
//   function startHour() {
//     if (hour < 24) {
//       minute = 0;
//       hour++;
//       $(timeHour).css({ display: "inline-block" });
//       timeHour.text(hour + " : ");
//       hour = String(hour);
//       if (hour.length == 1) {
//         timeHour.text("0" + hour + " : ");
//       }
//       startSec();
//     }
//   }
//   function circle() {
//     let element = $("<div>");
//     $(element).text(time.text());
//     $(circleWrap).append(element);
//   }
//   function reset() {
//     hour = 0;
//     minute = 0;
//     sec = 0;
//     timer = clearInterval(timer);
//     timeMinute.text("00");
//     timeSec.text("00");
//     timeHour.text("00 : ");
//     $(circleWrap).text("");
//   }
// });
