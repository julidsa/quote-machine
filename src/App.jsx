import { useDispatch, useSelector } from "react-redux";
import setQuote from "./action-creators";
import twitterLogo from "./assets/twitter-logo.png";
import { FaQuoteLeft } from "react-icons/fa";
import "./index.css";
import { useEffect } from "react";

function App() {
  const quote = useSelector((state) => state.quote.quote);
  const author = useSelector((state) => state.quote.author);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleNewQuote() {
    fetchQuote();
  }

  const fetchQuote = async () => {
    const category = "happiness";
    try {
      const apiResponse = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "HShvD7TiKGNp41QtbGuC4Q==lAri4KB0JaWYz8gj",
          },
        }
      );
      const jsonData = await apiResponse.json();

      const newQuote = jsonData[0].quote;
      const newAuthor = jsonData[0].author;
      dispatch(setQuote(newQuote, newAuthor));
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  return (
    <>
      <div id="quote-box">
        <div className="container">
          <span id="text">
            <i className="quote-icon">
              <FaQuoteLeft />
            </i>
            {quote}
          </span>
          <p id="author">- {author}</p>

          <div className="group-button twitter-share-button">
            <button id="twitter-button">
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${quote}%20-${author}%20%23quotes`}
              >
                <img src={twitterLogo} alt="twitter-logo" width="35px" />
              </a>
            </button>
            <button id="new-quote" onClick={handleNewQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
