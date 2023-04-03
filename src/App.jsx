import { useState } from "react";
import { Header } from "./components/Header";
import { Result } from "./components/Result";

function App() {
  const [word, setWord] = useState("dictionary");
  const [fontFamily, setFontFamily] = useState("Serif");
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [wordData, setWordData] = useState([
    {
      word: "dictionary",
      phonetic: "/ˈdɪkʃəˌnɛɹi/",
      phonetics: [
        {
          text: "/ˈdɪkʃəˌnɛɹi/",
          audio: "",
        },
        {
          text: "/ˈdɪkʃ(ə)n(ə)ɹi/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/dictionary-uk.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=503422",
        },
        {
          text: "/ˈdɪkʃəˌnɛɹi/",
          audio: "",
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data.",
              synonyms: ["wordbook"],
              antonyms: [],
            },
            {
              definition:
                "(preceded by the) A synchronic dictionary of a standardised language held to only contain words that are properly part of the language.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "(by extension) Any work that has a list of material organized alphabetically; e.g., biographical dictionary, encyclopedic dictionary.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "An associative array, a data structure where each value is referenced by a particular key, analogous to words and definitions in a physical dictionary.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ["wordbook"],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition: "To look up in a dictionary.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To add to a dictionary.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To compile a dictionary.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/dictionary"],
    },
  ]);

  const updateWord = (val) => {
    setWord(val);
  };

  const handleFontFamily = (val) => {
    setFontFamily(val);
  };

  const getDictionary = async (word) => {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();
    setWordData(data);
  };

  if (wordData.title !== "No Definitions Found") {
    return (
      <div className={theme === "dark" ? "bg-dark text-white" : ""}>
        <div className={`container px-4 fs-5 ${fontFamily}`}>
          <Header
            word={word}
            updateWord={updateWord}
            getDictionary={getDictionary}
            fontFamily={fontFamily}
            handleFontFamily={handleFontFamily}
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
          <Result wordData={wordData[0]} theme={theme} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={theme === "dark" ? "bg-dark text-white" : ""}
        style={{ height: "100vh" }}
      >
        <div className={`container px-4 fs-5 ${fontFamily}`}>
          <Header
            word={word}
            updateWord={updateWord}
            getDictionary={getDictionary}
            fontFamily={fontFamily}
            handleFontFamily={handleFontFamily}
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
          <h4 className="mt-5 text-center">
            Soryy, No Definitions found for this word.
          </h4>
        </div>
      </div>
    );
  }
}

export default App;
