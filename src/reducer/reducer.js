//estado inicial do quote e author, vão iniciar vazio

const initialState = {
  quote: "",
  author: "",
};

// reducer atualiza o quote e o author da aplicação e retorna o novo estado
//passado no dispatch(setQuote(..., ...))
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTE":
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default quoteReducer;
