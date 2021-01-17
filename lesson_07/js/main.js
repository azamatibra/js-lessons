let tasks = [
  "Сходить в магазин",
  "Приготовить обед",
  "Поесть",
  "Отдохнуть",
  "Работать",
];
const list = document.querySelector(".todo-list");

for (;;) {
  let userInfo = prompt("Введите задачи: ");
  if (userInfo === null || userInfo == "") {
    break;
  } else {
    tasks.push(userInfo);
  }
}
for (let i = 0; i < tasks.length; i++) {
  let li = document.createElement("li");
  li.textContent = tasks[i];
  list.append(li);
}

function getImportantInfo(arr) {
  let list = document.querySelectorAll("li");
  let data = parseInt(prompt("Введите номер важной задачи: "));
  if (data <= arr.length) {
    li = list[data - 1].classList.add("red");
  } else {
    alert("Ваш номер задачи выходит из списка ");
  }
}

let btnTask = document.querySelector(".btn-add");
btnTask.addEventListener("click", (e) => {
  e.preventDefault();
  getImportantInfo(tasks);
});

// 3
// let listInfo = document.querySelectorAll("li");
// listInfo[2].innerHTML = `<a href="#pupkin">#pupkin</a> followers: <strong>500</strong>`;
// listInfo[3].innerHTML = `Paul Mccarthy <a href="#london">#london</a> followers:
// <strong>1500</strong>`;
// 4
// let users = [
//   {
//     firstName: "Mike",
//     lastName: "Jefferson",
//   },
//   {
//     firstName: "Sam",
//     lastName: "Warnington",
//   },
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
// ];

// function makeList(arr) {
//   let ul = document.createElement("ul");
//   document.body.append(ul);
//   for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li')
//     li.textContent = arr[i].firstName + " " + arr[i].lastName
//     ul.append(li)

//   }
// }
// makeList(users);

// 5
// let authors = ["Бенджамин Баттон", "Шерлок Холмс", "Габриель Фарингейт"];
// let text = document.querySelectorAll(".text");
// for (let i = 0; i < text.length; i++) {
//   let author = document.createElement("h5");
//   author.textContent = authors[i];
//   author.classList.add('author')
//   let textInfo = text[i];
//   textInfo.after(author);
// }
