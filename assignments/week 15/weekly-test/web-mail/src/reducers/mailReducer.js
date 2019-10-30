const initialState = {
  fetching: false,
  fetched: false,
  mails: []
};

const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MAILS":
      return {
        ...state,
        fetching: true,
        mails: [],
        fetched: false
      };
    case "RECEIVE_MAILS":
      return {
        ...state,
        fetched: true,
        mails: action.payload,
        fetching: false
      };
    case "READ_ACTION":
      var copiedState = [...state.mails];
      for (var i = 0; i < copiedState.length; i++) {
        if (copiedState[i].mail === action.mail) {
          if (copiedState[i].read === undefined) {
            copiedState[i].read = true;
          } else {
            copiedState[i].read = !copiedState[i].read;
          }
        }
      }
      return {
        ...state,
        mails: copiedState
      };
    default:
      return state;
  }
};

export default mailReducer;
