import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from 'reducers/counter';
import todo from 'reducers/todo';

const rootReducer = combineReducers({
  counter,
  todo,
  routing,
  form: formReducer,
});

export default rootReducer;
