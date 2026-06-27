import "./styles/style.css";
import { basketIconElements } from "./script/elements";
import {
  hideCheckedData,
  initTaskListeners,
  listnerTaskAddetion,
  renderLastTheme,
} from "./script/listeners";
import { initTaskList, renderTask } from "./script/utils";

// renderTask();
initTaskList();
listnerTaskAddetion();
renderLastTheme();

hideCheckedData();
