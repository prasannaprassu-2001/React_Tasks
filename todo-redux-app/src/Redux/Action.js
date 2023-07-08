
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
}; 

export const editTask = (index, task) => {
  return {
    type: EDIT_TASK,
    payload: { index, task },
  };
};

export const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    payload: index,
  };
};
