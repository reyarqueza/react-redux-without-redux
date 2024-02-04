export default function reducer(state, action) {
    switch (action.type) {
      case "SET_X": {
        return {
          ...state,
          x: action.x,
        };
      }
  
      case "SET_Y": {
        return {
          ...state,
          y: action.y,
        };
      }
  
      default: {
        return state;
      }
    }
  }
  