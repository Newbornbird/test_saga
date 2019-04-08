import {increaseCounter} from '../../routines';

let counter2 = (state = 0, action) => {
  switch (action.type) {
    case increaseCounter.SUCCESS: {
      return state + 1;
    }
    default: return state
  }
}

export default counter2;