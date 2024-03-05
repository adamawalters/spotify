import { ChangeEvent, FormEvent, useState  } from "react";


type ArtistSearchSectionProps = {
  handleArtistSearch: (searchKey: string) => void;
};

function ArtistSearchSection({ handleArtistSearch }: ArtistSearchSectionProps) {
  const [searchKey, setSearchKey] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchKey(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleArtistSearch(searchKey);
  }

  const form = (
    <form className="center-container" onSubmit={handleSubmit}>
      <label htmlFor="artistSearch">
        <p className="direction-label">1) Search for an artist</p>
      </label>
      <div className="search-input">
        {/* <div className="search-icon-container">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div> */}
        <input
          className="search-box"
          type="text"
          name="artistSearch"
          placeholder="Celine Dion"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );

  return form;
}

export default ArtistSearchSection;
