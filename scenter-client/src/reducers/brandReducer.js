export default function brandsReducer(state = {brands: []}, action) {

  switch(action.type) {

    case 'LOADING_BRANDS':
      return state

    case 'FETCH_BRANDS':
      return {brands: action.brands}
    
      default:
        return state; 
  }
}