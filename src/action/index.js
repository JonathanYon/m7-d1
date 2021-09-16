export const addJobsAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=10`
      );
      if (response.ok) {
        const res = await response.json();
        dispatch({
          type: "ADD_JOBS",
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
