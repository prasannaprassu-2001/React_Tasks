
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./Action";

const initialState = {
  taskList: [],
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
      const { editIndex, task } = action.payload;
      state.taskList.filter((data,index)=>{
        if(index === editIndex)
        console.log(state.taskList[editIndex] = task);
        return {
          ...state,
          taskList: state.taskList
        };

      })

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
