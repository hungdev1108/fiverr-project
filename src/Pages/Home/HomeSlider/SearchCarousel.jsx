import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchCarousel(props) {
  const history = useHistory()
  const [valueSearch, setValueSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/listJob/${valueSearch}`);
    setValueSearch("");
  };
  return (
    <div className="SearchCarousel">
      <h1 className="title-search text-white">
        Find the perfect freelance services for your business
      </h1>

      <form onSubmit={handleSubmit} className="input-group mr-3 py-3">
        <input
          type="text"
          className="form-control py-3"
          placeholder={`Try "building mobile app"`}
          aria-label="Try building mobile app"
          aria-describedby="basic-addon2"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
        />
        <div className="input-group-append">
          <button className="input-group-text" id="basic-addon2">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      <div className="text-white d-lg-block popular">
        <span className="mr-2">Popular:</span>
        <Button variant="outline-light">Website Design</Button>
        <Button variant="outline-light">WordPress</Button>
        <Button variant="outline-light">Logo Design</Button>
        <Button variant="outline-light">Video Editing</Button>
      </div>
    </div>
  );
}

export default SearchCarousel;
