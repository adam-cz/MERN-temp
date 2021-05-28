const reducer = (_items, action) => {
  switch (action.type) {
    case '_ACTION1':
      return action.payload;
    case '_ACTION2':
      return action.payload;
    default:
      return _items;
  }
};

export default reducer;
