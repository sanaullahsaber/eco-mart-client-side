/* eslint-disable react/prop-types */
import SearchResult from "../SearchResult/SearchResult";
import "./SearchResultList.css";

const SearchResultList = ({ results }) => {
  return (
    <div className="search-result-list">
      {results.map((result) => (
        <SearchResult key={result._id} result={result} />
      ))}
    </div>
  );
};

export default SearchResultList;
