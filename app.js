const input = document.getElementById("input_id");
const button = document.getElementById("button");
const text = document.getElementById("text_container");

button.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Введите текст задачи");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
  };

  const taskHTML = `
    <div class="tasks">
      <div class="task_div">
        <p class="task" data-id="${newTask.id}">${newTask.text}</p>
      </div>
      <div class="delete_div">
        <p class="delete"><b>Удалить</b></p>
      </div>
    </div>
  `;

  text.insertAdjacentHTML("beforeend", taskHTML);
  addElement(newTask);
  input.value = "";
});

document.addEventListener("click", function (event) {
  event.target.closest(".tasks").remove();
});
