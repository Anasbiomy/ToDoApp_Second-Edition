import { Task_Items_listElments } from "./elements";
import { initTaskListeners } from "./listeners";

export const saveToDB = (key, task) => {
  localStorage.setItem(key, [JSON.stringify(task)]);
};

export const isDarktheme = (isDark) => {
  localStorage.setItem("isDark", JSON.stringify(isDark));
};

export const fetchDatafromDB = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const creatNewTask = (datatask) => {
  return {
    task: datatask,
    iscompleted: false,
  };
};

const Emptystate = () => {
  let tasksHtml = "";
  tasksHtml += `
    
     <li class="EmptyState">
            <p class="emptyStataText">قائمة المهام فارغة</p>
            <img
              src="assets/icon-empty.svg"
              alt="empty stata imag"
              class="Emptystatsaimage" />
          </li>
    `;
  Task_Items_listElments.innerHTML = tasksHtml;
};

export const addTask = (task) => {
  if (!task) return;

  const newTask = creatNewTask(task);

  let dataObj = fetchDatafromDB("tasks");

  dataObj.push(newTask);
  saveToDB("tasks", dataObj);
};

export const renderTask = () => {
  let dataObj = fetchDatafromDB("tasks");

  let tasksHtml = "";

  dataObj.forEach((element) => {
    tasksHtml += `
     <li class="Task_Item  ">
            <div class="deleteTask">
              <img
                src="assets/icon-basket.svg"
                alt="icon-basket"
                class=" basketIcon" />
            </div>
            <div class="task_value taskChecked  ${element.iscompleted ? " completed" : ""}">
              <p class="task_value">
                <span class="text_valu"> ${element.task}</span>
              </p>
              <img
                src="assets/icon-checkmark.svg"
                alt="shckmarkicon "
                class="checkmark" />
            </div>
          </li>
    `;
  });

  Task_Items_listElments.innerHTML = tasksHtml;
  initTaskListeners();
  if (dataObj.length === 0) {
    Emptystate();
  }
};

export const DeleteItemByIndex = (e, index) => {
  const answer = confirm("are you want to delet the task");
  if (!answer) return;
  let dataItems = fetchDatafromDB("tasks");
  dataItems.splice(index, 1);
  saveToDB("tasks", dataItems);
  renderTask();
};

export const initTaskList = () => {
  initTaskListeners();
  renderTask();
};

export const toggleCheckElement = (e, index) => {
  const dataItems = fetchDatafromDB("tasks");
  dataItems[index].iscompleted = !dataItems[index].iscompleted;
  saveToDB("tasks", dataItems);
  renderTask();
};

export const isCompletedTask = (index) => {
  let tasks = fetchDatafromDB("tasks");
  return tasks[index].iscompleted;
};
