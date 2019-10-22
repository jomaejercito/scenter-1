export default function brandsReducer(state = {brands: []}, action) {

  switch(action.type) {

    case 'LOADING_BRANDS':
      return state

    case 'FETCH_BRANDS':
      return action.brands
    
    case 'FETCH_BRAND':
      return action.brand      

  default:
    return state; 
  }
}