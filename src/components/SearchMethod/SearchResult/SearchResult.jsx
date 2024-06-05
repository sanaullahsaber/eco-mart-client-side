/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  return (
    <div className="search-result p-2 hover:bg-gray-200">
      <Link to={`view-details/${result._id}`}>
        <p>{result.name}</p>
      </Link>
    </div>
  );
};

export default SearchResult;
