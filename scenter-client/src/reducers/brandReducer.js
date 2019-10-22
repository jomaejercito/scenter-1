export default function brandsReducer(state = {brands: []}, action) {

  switch(action.type) {

    case 'LOADING_BRANDS':
      return state = {brands: []}

    case 'FETCH_BRANDS':
      return action.brands
    
      default:
        return state; 
  }
}