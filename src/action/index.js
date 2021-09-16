export const addJobsAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=10`
      );
      if (response.ok) {
        const res = await response.json();
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
        dispatch({
          type: "ADD_JOBS",
          payload: res,
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: true,
      });
      console.log(error);
    }
  };
};
