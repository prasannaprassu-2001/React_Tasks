
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./Action";

const initialState = {
  taskList: [],
  editIndex: -1,
  editedTaskName: "",
  editedDescription: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      };
    case EDIT_TASK:
      const { index, task } = action.payload;
      const updatedTaskList = [...state.taskList];
      updatedTaskList[index] = task;
      return {
        ...state,
        taskList: updatedTaskList
      };
    case DELETE_TASK:
        const deleteIndex = action.payload;
        const filteredTaskList = state.taskList.filter(
          (task, index) => index !== deleteIndex
        );
        return {
          ...state,
          taskList: filteredTaskList
        };
    default:
      return state;
  }
};

export default reducer;
