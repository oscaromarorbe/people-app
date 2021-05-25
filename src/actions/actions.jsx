export const setCharacters = (characters) => ({
  type: "SET_CHARACTERS",
  characters,
});

export const removeCharacter = (characterName) => ({
  type: "REMOVE_CHARACTER",
  characterName,
});

export const filterCharacters = (parameters) => ({
  type: "FILTER_CHARACTERS",
  parameters,
});
