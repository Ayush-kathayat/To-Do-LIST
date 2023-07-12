const theme = document.querySelector(".theme-switch");
const the_Body = document.getElementById("body");

theme.addEventListener("click", () => {
  theme.classList.toggle("moon");
  theme.classList.toggle("sun");
  the_Body.classList.toggle("body");
});

const My_list = document.querySelector(".task-list"); // this here to be a good parent

const plus_left_btn = document.querySelector(".feather-left-plus"); // our plus

const input = document.querySelector(".input-left");

const create_add_li = () => {
  const new_task = document.createElement("li");
  const input_text = input.value;

  new_task.textContent = input_text;
  new_task.classList.add = "tl";

  My_list.appendChild(new_task);
  input.value = "";
};

plus_left_btn.addEventListener("click", () => {
  const trim = input.value.trim();
  if (trim === "") {
    input.value = "";
  } else {
    create_add_li();
  }
});

input.addEventListener("keydown", (event) => {
  const trim = input.value.trim();

  if (event.keyCode === 13) {
    if (trim === "") {
      input.value = "";
    } else {
      create_add_li();
    }
  }
});

// this one is for the subtask nav head

const myList = document.querySelector(".task-list");
const myHeading = document.querySelector(".subtask-head");

myList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const liText = event.target.textContent;
    myHeading.textContent = liText;
  }
});

// now below is subtask

// Below is create sbt function

const input_right = document.querySelector(".input-right");

const sbt_container = document.querySelector(".subtask-list");

let count = 0;

const create_sbt = () => {
  const new_sp = document.createElement("span"); // child 1
  new_sp.classList.add("custom-checkbox", "child", "true");

  const new_h = document.createElement("h"); // child 2
  const input_text = input_right.value;
  new_h.textContent = input_text;
  new_h.classList.add("sbt", "child", "true");

  // parent of new_sp and new_h will be new_lab
  count++;
  const new_lab = document.createElement("label");
  const targetElementId = "task-" + count;
  new_lab.setAttribute("for", targetElementId);

  new_lab.append(new_sp);
  new_lab.append(new_h);

  const new_check = document.createElement("input");
  new_check.type = "checkbox";
  new_check.setAttribute("id", targetElementId);

  // now here will be the parent for the label and input it will be task a div

  const task_div = document.createElement("div");
  task_div.classList.add("task", "comp");

  task_div.append(new_check);
  task_div.append(new_lab);

  sbt_container.append(task_div);
  input_right.value = "";
};

// create sbt function ended here

const remain = document.getElementById("sbt-remain"); // tasks remaining

const plus_right_btn = document.querySelector(".feather-right-plus");

let task_remain_cnt = 0;

plus_right_btn.addEventListener("click", () => {
  const trimmedValue = input_right.value.trim();
  if (trimmedValue === "") {
    input_right.value = "";
    console.log("Input is empty");
  } else {
    task_remain_cnt++;
    remain.textContent = task_remain_cnt + " Task remaining";
    create_sbt();
  }
});

input_right.addEventListener("keydown", (event) => {
  const trimmedValue = input_right.value.trim();

  if (event.keyCode === 13) {
    if (trimmedValue === "") {
      console.log("Input is empty");
      input_right.value = "";
    } else {
      task_remain_cnt++;
      remain.textContent = task_remain_cnt + " Task remaining";
      create_sbt();
    }
  }
});

// now from here task remaining

const subtask_div = document.querySelector(".subtask-list");

subtask_div.addEventListener("click", (event) => {
  if (event.target.classList.contains("child")) {
    const child = event.target;
    const closestDiv = event.target.closest("div");

    const adjacentElement =
      child.previousElementSibling || child.nextElementSibling;

    if (child.classList.contains("true")) {
      task_remain_cnt--;
      remain.textContent = task_remain_cnt + " Task remaining";
      child.classList.remove("true");
      adjacentElement.classList.remove("true");

      closestDiv.classList.remove("comp");
    } else {
      task_remain_cnt++;
      remain.textContent = task_remain_cnt + " Task remaining";
      child.classList.add("true");
      adjacentElement.classList.add("true");
      closestDiv.classList.add("comp");
    }
  }
});

// now from here completed task deletion only

const clear_comp = document.querySelector(".clear-comp");

clear_comp.addEventListener("click", () => {
  const Tasks = document.querySelectorAll(".task");
  Tasks.forEach((task) => {
    if (!task.classList.contains("comp")) {
      task.remove();
    }
  });
});

// now here below is code for the all subtasks means whole fucking list this will do
// two things first the deleting the whole subtasks or whole list and then it will
// change the subtask nav to the default which is Subtasks

const clear_all = document.querySelector(".clear-all");
const subtask_nav = document.querySelector(".subtask-head");

clear_all.addEventListener("click", () => {
  const Tasks = document.querySelectorAll(".task");
  Tasks.forEach((task) => {
    task.remove();
  });
  subtask_nav.textContent = "SUBTASKS";
  remain.textContent = "";
  task_remain_cnt = 0;
});
