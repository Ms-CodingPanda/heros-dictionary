import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loading from "./Images/link-loading.gif";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState([]);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001ffad07429bf64a0c9868b7eaa13ef316";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Typed-out">
          <h1>
            Hello Hero!
            <img
              src={loading}
              alt="loading"
              className="link"
              width="30"
              height="30"
            />
          </h1>
          <div className="container"></div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="Begin your search here..."
            />
            <button className="searchIcon" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <div className="hint">
            Suggested words: Adventure, Sword, Hero, Shield, Trial
          </div>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return <img src={loading} alt="loading" />;
  }
}
