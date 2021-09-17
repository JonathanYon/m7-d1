import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import mainReducer from "../reducers/favourite";
import thunk from "redux-thunk";
import favReducer from "../reducers/favourite";
import jobReducer from "../reducers/jobs";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite"],
};
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const initialState = {
  favorite: {
    companies: [],
  },
  vacancies: {
    jobs: [],
    error: false,
    loading: true,
  },
};

const rootReducer = combineReducers({
  favorite: favReducer,
  vacancies: jobReducer,
});

const configPersist = persistReducer(persistConfig, rootReducer);

export const configureStore = createStore(
  configPersist,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //without .env set to true
  // process.env.REACT_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__() //with .env set to true
  process.env.REACT_DEVELOPMENT
    ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);

export default { configureStore, persistor };
