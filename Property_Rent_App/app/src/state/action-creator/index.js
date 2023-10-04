
export const next = page => {
  return dispatch => {
    dispatch({
      type: "next",
      pageload: page
    });
  };
};

export const prev = page => {
  return dispatch => {
    dispatch({
      type: "prev",
      pageload: page
    });
  };
};



