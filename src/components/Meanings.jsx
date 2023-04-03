export const Meanings = ({ wordData, theme }) => {
  return wordData.meanings.map((meaning, index) => (
    <div key={index}>
      <div className="row pt-5">
        <div className="col-auto d-flex align-items-center">
          <p className="m-0 fs-4 fw-semibold">{meaning.partOfSpeech}</p>
        </div>
        <div className="col d-flex align-items-center">
          <div className="custom-divider w-100"></div>
        </div>
        <p className={`${theme === "dark" ? "text-white-50" : ""} pt-4 fs-5`}>
          Meaning
        </p>
      </div>

      <ul>
        {meaning.definitions.map((def, index) => (
          <li className="mt-3 pe-3" key={index}>
            {def.definition}
          </li>
        ))}
      </ul>

      {meaning.synonyms.length !== 0 ? (
        <div className="pt-4 row">
          <p
            className={`${
              theme === "dark" ? "text-white-50" : ""
            } pt-4 fs-5 d-inline me-5`}
          >
            Synonyms
          </p>
          {meaning.synonyms.map((synonym, index) => (
            <p className=" col-3 text-primary fw-semibold" key={index}>
              {synonym}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  ));
};
