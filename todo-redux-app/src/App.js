import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import ToDoApp from './Components/ToDoApp';
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
      
        <ToDoApp />
      </div>
    </Provider>
  );
};

export default App;
