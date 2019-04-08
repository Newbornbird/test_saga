import {increaseCounter, decreaseCounter} from '../../routines';

// let counter1 = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREASE_COUNTER_ASYNC': {
//       return state + 1;
//     }
//     case 'DECREASE_COUNTER_ASYNC': {
//       return state - 1;
//     }
//     default: return state
//   }
// }

// export default counter1;

let counter1 = (state = 0, action) => {
  switch (action.type) {
    case increaseCounter.SUCCESS: {
      return state + 1;
    }
    case decreaseCounter.SUCCESS: {
      return state - 1;
    }
    default: return state
  }
}

export default counter1;