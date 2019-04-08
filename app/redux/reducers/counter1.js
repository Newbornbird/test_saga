import {increaseCounter, decreaseCounter, multiplyCounter} from '../../routines';

let counter1 = (state = 0, action) => {
  switch (action.type) {
    case increaseCounter.SUCCESS: {
      return state + 1;
    }
    case decreaseCounter.SUCCESS: {
      return state - 1;
    }
    case multiplyCounter.SUCCESS: {
      return state * 2;
    }
    default: return state
  }
}

export default counter1;