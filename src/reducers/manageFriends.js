export function manageFriends(state, action){
  state = {
    friends: []
  }

  switch (action.type) {
    case "ADD_FRIEND":
      return {friend: {

      }}
    case "REMOVE_FRIEND":
      return {}


      break;
    default:

  }

}

/*
function reducer(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    case 'DECREASE_COUNT':
      return {count: state.count - 1}
    default:
      return state;
  }
}

*/
