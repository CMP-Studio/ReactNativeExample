import {
  ADD_TO_COUNTER,
  SUB_FROM_COUNTER,
  NEW_COUNTER,
  DELETE_COUNTER,
} from '../actions/counter';

const initialState = [
  // {
  //   uuid: number,
  //   count: number,
  // }
];

export function countState(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_COUNTER: {
      return state.map((counter) => {
        if (counter.uuid === action.uuid) {
          return Object.assign({}, counter, {
            count: counter.count + 1,
          });
        }

        return counter;
      });
    }

    case SUB_FROM_COUNTER: {
      return state.map((counter) => {
        if (counter.uuid === action.uuid) {
          return Object.assign({}, counter, {
            count: counter.count - 1,
          });
        }

        return counter;
      });
    }

    case NEW_COUNTER: {
      const newCounter = {
        uuid: action.uuid,
        count: 0,
      };

      return state.concat([newCounter]);
    }

    case DELETE_COUNTER: {
      return state.filter((counter) => {
        if (counter.uuid !== action.uuid) {
          return counter;
        }
      });
    }

    default:
      return state;
  }
}
