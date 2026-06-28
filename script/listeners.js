import {
  basketIconElements,
  checkmarkBoxElement,
  Dark_TheemToggle,
  input_buttonElement,
  input_dataElement,
  Task_ItemElement,
  taskesapperance_buttonElement,
  toggleThemeButtonElement,
} from "./elements";
import {
  addTask,
  DeleteItemByIndex,
  fetchDatafromDB,
  isCompletedTask,
  isDarktheme,
  renderTask,
  saveToDB,
  toggleCheckElement,
} from "./utils";

export const listnerTaskAddetion = () => {
  input_buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    // if (!input_dataElement.value) return;
    addTask(input_dataElement.value);
    input_dataElement.value = "";
    renderTask();
  });
};

export const renderLastTheme = () => {
  toggleThemeButtonElement.addEventListener("click", () => {
    let newtoggledata = JSON.parse(localStorage.getItem("isDark"));
    newtoggledata = !newtoggledata;
    isDarktheme(newtoggledata);
    Dark_TheemToggle.classList.toggle("Dark_Theem");
  });
  if (JSON.parse(localStorage.getItem("isDark")))
    Dark_TheemToggle.classList.add("Dark_Theem");
  else Dark_TheemToggle.classList.remove("Dark_Theem");
};

// export const checkedListener = () => {
//   let dataItems = fetch("tasks");
//   checkmarkBoxElement().forEach((Element, index) => {
//     Element.addEventListener("click", (e) => {
//       dataItems[index].iscompleted = !dataItems[index].iscompleted;
//     });
//   });
//   saveToDB("tasks", dataItems);
// };

export let initTaskListeners = () => {
  let dataItems = fetch("tasks");

  basketIconElements().forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
      DeleteItemByIndex(e, index);
    });
  });

  checkmarkBoxElement().forEach((box, index) => {
    box.addEventListener("click", () => {
      box.classList.toggle("completed");
      toggleCheckElement(box, index);
    });
  });
};

export const hideCheckedData = () => {
  taskesapperance_buttonElement.addEventListener("click", () => {
    let fetchishideData;
    if (fetchDatafromDB("isHideData") === true) fetchishideData = true;
    else fetchishideData = false;
    fetchishideData = !fetchishideData;
    saveToDB("isHideData", fetchishideData);

    if (fetchishideData) {
      taskesapperance_buttonElement.classList.add(
        "taskesapperance_button_isActive",
      );
    } else
      taskesapperance_buttonElement.classList.remove(
        "taskesapperance_button_isActive",
      );
  });
  renderTask();
};
