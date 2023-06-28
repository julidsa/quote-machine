import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import twitterLogo from "./assets/twitter-logo.png";
import { FaQuoteLeft } from "react-icons/fa";

function App() {
  const [response, setResponse] = useState({
    quote: "",
    author: "",
  });

  useEffect(() => {
    fetchQuote();
    console.log("1");
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
      setResponse((prev) => ({
        ...prev,
        quote: jsonData[0].quote,
        author: jsonData[0].author,
      }));
      console.log("2");
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  console.log("3");
  return (
    <>
      <div id="quote-box">
        <div className="container">
          <span id="text">
            <i className="quote-icon">
              <FaQuoteLeft />
            </i>
            {response.quote}
          </span>
          <p id="author">- {response.author}</p>

          <div className="group-button twitter-share-button">
            <button id="twitter-button">
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${response.quote}%20-${response.author}%20#quotes`}
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
