const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SYNC_ACTION':
      return { result: action.payload };
    case 'ASYNC_ACTION':
      return { result: action.payload };
    default:
      return state;
  }
};