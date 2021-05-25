const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

const reducer = createReducer([], {
  SET_CHARACTERS: (state, action) => {
    const characters = action.characters;
    return Object.assign({}, state, {
      ...state,
      characters,
    });
  },
  REMOVE_CHARACTER: (state, action) => {
    const characters = state.characters.filter((character) => {
      return character.name !== action.characterName;
    });
    return Object.assign({}, state, {
      ...state,
      characters,
    });
  },
  FILTER_CHARACTERS: (state, action) => {
    if (!action.parameters) return { ...state, filteredOutNames: [] };
    const filteredOutNames = [];
    state.characters.forEach((character) => {
      if (
        !character.name.toLowerCase().includes(action.parameters.toLowerCase())
      )
        filteredOutNames.push(character.name.toLowerCase());
    });
    return Object.assign({}, state, { ...state, filteredOutNames });
  },
});

export default reducer;
