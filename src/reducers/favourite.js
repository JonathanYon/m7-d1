import { initialState } from "../store";

const favReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    case "ADD_COMPANY":
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case "REMOVE_COMPANY":
      return {
        ...state,
        companies: state.companies.filter(
          (company, i) => i !== action.payload
          // (company, i) => company.title !== action.payload // removing based on the name of the job but its not efficient
        ),
      };
    default:
      return state;
  }
};

export default favReducer;
