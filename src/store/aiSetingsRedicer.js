const defaultStore = {
  ai: true,
}

const CHOICE_AI = "CHOICE_AI";

export function aiSetingsRedicer(store = defaultStore, action) {
  switch (action.type) {
    case CHOICE_AI: {
      return { ...store, ai: action.payload }
    }
    default: return store;
  }
}

export const actionChoiceAi = (payload) => ({ type: CHOICE_AI, payload });