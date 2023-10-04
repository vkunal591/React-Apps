

const reducer = (state = 1, action) => {
  if (action.type === "next") {

    return state + action.pageload;

  } 
  else if (action.type === "prev") {

    return state - action.pageload;

  }
   else {
   return state;
  }
}

export default reducer
