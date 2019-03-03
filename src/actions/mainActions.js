import * as types from './actionTypes';

export const addHeroes = payload => ({
  type: types.ADD_HEROES,
  payload,
});

export const fetchHeroesList = () => dispatch => {
  const URI = 'https://mapi.mobilelegends.com/hero/list?language=en';

  fetch(URI)
    .then(res => res.json())
    .then(result => {
      dispatch(addHeroes(result.data));
    })
    .catch(err => console.log('err', err));
};
