export const Header = ({
  word,
  updateWord,
  getDictionary,
  fontFamily,
  handleFontFamily,
  handleThemeChange,
  theme,
}) => {
  return (
    <div>
      <nav className="navbar py-3">
        <a className="col-6 col-md-8" href="/">
          <i className="bi bi-book fs-1 text-secondary ps-1"></i>
        </a>

        <div className="col-6 col-md-4">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <div className="dropdown">
                <button
                  className={`font-btn btn btn-secondary dropdown-toggle text-dark ${
                    theme === "light" ? "bg-white" : ""
                  }`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {fontFamily}
                </button>
                <ul
                  className={`dropdown-menu ${
                    theme === "dark" ? "bg-secondary" : ""
                  }`}
                >
                  <li>
                    <a
                      className="dropdown-item text-dark"
                      href="#"
                      onClick={() => handleFontFamily("Serif")}
                    >
                      {" "}
                      Serif{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-dark"
                      href="#"
                      onClick={() => handleFontFamily("Sans-Serif")}
                    >
                      {" "}
                      Sans-Serif{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-dark"
                      href="#"
                      onClick={() => handleFontFamily("Monospace")}
                    >
                      {" "}
                      Monospace{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center">
              <div
                className="form-check form-switch"
                onClick={() => handleThemeChange()}
              >
                <input
                  className="form-check-input px-3 py-2 align-self-center pe-auto"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end px-0">
              <i className="bi bi-moon-fill fs-2 text-secondary"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-primary row d-flex align-items-center justify-content-between bg-light p-1 rounded-4">
        <div className="col">
          <input
            type="text"
            className="custom-input form-control bg-transparent border-0 py-3"
            onChange={(e) => {
              updateWord(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">
          <i
            className="bi bi-search fs-5 text-primary"
            onClick={() => {
              getDictionary(word);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};
