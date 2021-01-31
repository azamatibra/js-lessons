$(function () {
  let taskNews = $(".task__news");
  let taskProcess = $(".task__process");
  let search = $(".form__task");

  search.on("submit", function (e) {
    e.preventDefault();
    let taskValue = $(".form__input").val();
    addNewTask(taskValue);
    this.reset();
  });
  function addNewTask(value) {
    createItem(value, taskNews);
    addTaskProcess();
  }
  function addTaskProcess() {
    let taskStart = $(".task__start");
    taskStart.on("click", function (e) {
      let taskText = $(this).prev('.task__inner').text()
      e.preventDefault();
      createItem(taskText, taskProcess);
    });
  }

  function createItem(value, place) {
    let taskUser = $('<div class="task__user">');
    let taskInner = $('<div class="task__inner">');
    let taskText = $('<span class="task__text">').text(value);
    let taskButton = $('<button class="task__start">Начать</button>');
    let taskCancel = $('<span class="task__cancel">');
    let taskIcon = $(
      '<img class="task__icon" src="img/cancel.png" alt="icon"/>'
    );

    $(place).append(taskUser);
    taskUser.append(taskInner, taskButton);
    taskInner.append(taskText, taskCancel);
    taskCancel.append(taskIcon);
  }
});
