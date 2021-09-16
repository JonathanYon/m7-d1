import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "../reducers";
import thunk from "redux-thunk";

// const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const initialState = {
  favorite: {
    companies: [],
  },
  vacancies: {
    jobs: [],
  },
};

const configureStore = () =>
  createStore(
    mainReducer,
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //without .env set to true
    process.env.REACT_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__() //with .env set to true
  );

export default configureStore;
