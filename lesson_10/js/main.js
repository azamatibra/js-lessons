// 1
$(() => {
  let time = $(".time__text");
  let start = $(".time__start");
  let timeMinute = $(".time__minute");
  let timeSec = $(".time__sec");
  let timePause = $(".time__pause");
  let timeHour = $(".time__hour");
  let timeReset = $(".time__reset");
  let timeCircle = $(".time__circle");
  let lastCircle = $(".time__last-circle");
  let circleWrap = $(".circle__wrap");
  let timer;
  let hour = 0;
  let sec = 0;
  let minute = 0;
  let circleInfo = [];

  start.on("click", () => {
    timer = setInterval(startSec, 1000);
  });
  timePause.on("click", () => {
    timer = clearInterval(timer);
  });
  timeReset.on("click", () => {
    reset();
  });
  timeCircle.on("click", () => {
    circle();
  });
  lastCircle.on("click", () => {
    setCircleToDom();
  });

  function startSec() {
    if (sec < 60) {
      sec++;
      sec = String(sec);
      $(timeSec).text(sec);
      if (sec.length == 1) {
        $(timeSec).text(0 + sec);
      }
    }
    if (sec == 60) {
      startMinute();
    }
  }
  function startMinute() {
    if (minute < 60) {
      compareMinute();
      function compareMinute() {
        minute++;
        sec = 0;
        minute = String(minute);
        $(timeMinute).text(" " + minute);
        if (minute.length == 1) {
          $(timeMinute).text("0" + minute);
        }
      }
    }

    if (minute == 60) {
      startHour();
      compareMinute();
    }
  }
  function startHour() {
    if (hour < 24) {
      minute = 0;
      hour++;
      $(timeHour).css({ display: "inline-block" });
      timeHour.text(hour + " : ");
      hour = String(hour);
      if (hour.length == 1) {
        timeHour.text("0" + hour + " : ");
      }
      startSec();
    }
  }
  function circle() {
    let box = $("<div class='circle__box'></div>");
    let text = $('<span class="circle__text">');
    text.text("Время круга - " + time.text());
    circleInfo.push(text.text());
    let circleInfoStr = JSON.stringify(circleInfo);
    localStorage.setItem("circleInfo", circleInfoStr);
    box.append(text);
    circleWrap.append(box);
    workIcon(box);
  }
  function workIcon(box) {
    let icon = $('<img class="circle__icon" src="img/cancel.png">');
    box.append(icon);
    removeBox(icon, box);
  }
  function setCircleToDom() {
    circleInfo = JSON.parse(localStorage.getItem("circleInfo"));
    for (const item of circleInfo) {
      let box = $("<div class='circle__box'></div>");
      let circle = $("<span class='circle__text'>").text(item);
      box.append(circle);
      circleWrap.append(box);
      workIcon(box);
    }
  }
  function removeBox(icon, box) {
    $(icon).on("click", () => {
      box.remove();
      localStorage.removeItem(key);
    });
  }
  function reset() {
    hour = 0;
    minute = 0;
    sec = 0;
    timer = clearInterval(timer);
    timeMinute.text("00");
    timeSec.text("00");
    timeHour.text("00 : ");
    $(circleWrap).text("");
    localStorage.removeItem("circleInfo");
  }
});

// lesson

// let tasks = [];
// $("form").on("submit", function (e) {
//   e.preventDefault();
//   let taskName = $(".task").val();
//   let task = $("<li>").text(taskName);
//   tasks.push(taskName);
//   $(".todo").append(task);
//   let taskToStr = JSON.stringify(tasks);
//   localStorage.setItem("tasks", taskToStr);
//   this.reset();
// });

// let setTaskToDom = () => {
//   tasks = JSON.parse(localStorage.getItem("tasks"));
//   for (const item of tasks) {
//     let task = $("<li>").text(item);
//     $(".todo").append(task);
//   }
// };
// setTaskToDom();

// let obj = {
//   name: "Mike",
//   hobby: {
//     chess: 12,
//     football: 0.5,
//   },
// };
// let objStr = JSON.stringify(obj);
// let obj2 = JSON.parse(objStr);
// console.log(obj2);

// let greeting = (who) => {
//   console.log('Hello ' + who);
// }
// greeting('Mike')
// console.log('bye');

// 2

// $(() => {
//   let textArea = $(".editor__textarea");
//   let btnSave = $(".editor__save");
//   let btnClear = $(".editor__clear");
//   btnSave.on("click", (e) => {
//     e.preventDefault();
//     saveText();
//   });
//   btnClear.on("click", (e) => {
//     saveText();
//     e.preventDefault();
//     $(textArea).val("");
//   });
//   let isCtrl = false;
//   textArea
//     .keyup(function (e) {
//       if (e.which == 17) isCtrl = false;
//     })
//     .keydown(function (e) {
//       if (e.which == 17) isCtrl = true;
//       if (e.which == 83 && isCtrl == true) {
//         saveText();
//         return false;
//       }
//     });

//   getText();
//   function saveText() {
//     let dataArr = [];
//     let dataText = textArea.val();
//     dataArr.push(dataText);
//     let dataTextToStr = JSON.stringify(dataArr);
//     localStorage.setItem("text", dataTextToStr);
//   }
//   function getText() {
//     let data = JSON.parse(localStorage.getItem("text"));
//     textArea.val(data);
//   }
// });

// 3

// let cars = {
//   passenger: {
//     sedan: [
//       { name: "Toyota", price: 300 },
//       { name: "Honda", price: 250 },
//     ],
//     variant: [
//       { name: "Volkswagen", price: 280 },
//       { name: "Mercedes", price: 290 },
//     ],
//     coupe: [
//       { name: "Ferrari", price: 600 },
//       { name: "Ford", price: 200 },
//     ],
//   },
//   cargo: [
//     { name: "Volvo", price: 1000 },
//     { name: "Man", price: 1200 },
//   ],
// };

// let getList = function (data) {
//   let list = "";
//   for (let key in data) {
//     list += "<li>" + key;
//     let hasSubItems = Object.values(key).length > 0;
//     if(hasSubItems){
//       list += getList(data[key])
//     }
//     list += '</li>';
//   }
//   return '<ul>' + list + '</ul>';

// };

// function getList(data) {
//   let sum = 0;
//   if (Array.isArray(data)) {
//     for (const item of data) {
//       sum += item.price;
//     }
//     return sum;
//   } else {
//     for (const item of Object.values(data)) {
//       sum += getList(item);
//     }
//   }
//   return sum;
// }
// let result = getList(cars);

// console.log(result);
