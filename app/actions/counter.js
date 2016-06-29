
// *** Action Types ***
export const ADD_TO_COUNTER = 'ADD_TO_COUNTER';
export const SUB_FROM_COUNTER = 'SUB_FROM_COUNTER';
export const NEW_COUNTER = 'NEW_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';

// *** Action Creators ***
export function addToCounter(uuid) {
  return {
    type: ADD_TO_COUNTER,
    uuid,
  };
}

export function subFromCounter(uuid) {
  return {
    type: SUB_FROM_COUNTER,
    uuid,
  };
}

export function newCounter() {
  return {
    type: NEW_COUNTER,
    uuid: Date.now(),
  };
}

export function deleteCounter(uuid) {
  return {
    type: DELETE_COUNTER,
    uuid,
  };
}
