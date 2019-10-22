const API_URL = 'http://localhost:3001/api/v1'

const setBrands = (brands) => {
  return {
    type: 'FETCH_BRANDS',
    brands
  }
}

export const fetchBrands = () => {
  return dispatch => {
    dispatch({type: 'LOADING_BRANDS'});
      return fetch(`${API_URL}/brands`)
      .then(response => response.json())
      .then(brands => dispatch(setBrands(brands)))
      .catch(error => console.log(error))
  }
}