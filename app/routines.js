import { createRoutine } from 'redux-saga-routines';

export const increaseCounter = createRoutine('INCREASE_COUNTER');
export const decreaseCounter = createRoutine('DECREASE_COUNTER');