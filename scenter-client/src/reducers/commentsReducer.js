export default function commentsReducer(state = {comments: []}, action) {

  switch(action.type) {

    case 'LOADING_COMMENTS':
      return state

    case 'FETCH_COMMENTS':
      return action.comments    

  default:
    return state;
  }
}