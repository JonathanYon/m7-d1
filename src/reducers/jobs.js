import { initialState } from "../store";

const jobReducer = (state = initialState.vacancies, action) => {
  switch (action.type) {
    case "ADD_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
