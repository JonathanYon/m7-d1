import { initialState } from "../store";

const jobReducer = (state = initialState.vacancies, action) => {
  switch (action.type) {
    // case "ADD_COMPANY":
    //   return {

    //     },

    default:
      return state;
  }
};

export default jobReducer;
