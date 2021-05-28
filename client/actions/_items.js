import * as api from '../api';

//Action Creators
export const _getItems = () => async (dispatch) => {
  try {
    const { data } = await api._fetchFunction();
    dispatch({ type: '_ACTION1', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
