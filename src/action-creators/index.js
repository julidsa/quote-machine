const SET_QUOTE = "SET_QUOTE";

const setQuote = (quote, author) => ({
  type: SET_QUOTE, //tipo da minha função

  // esse objeto armazenará qual quote irei passar e author
  payload: {
    quote,
    author,
  },
});

export default setQuote;
