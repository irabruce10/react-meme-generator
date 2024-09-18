import { useState } from 'react';

export default function App() {
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeList, setMemeList] = useState(
    `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`,
  );

  function generateMeme() {
    const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;

    // const url = `https://memegen.link/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

    setMemeList(url);
  }

  const downloadMeme = () => {
    const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
    setMemeList(url);

    // Create a link element to download the image.
    // This will trigger the browser's download functionality.
    // We use `click()` to simulate a click on the link, triggering the download.
    const link = document.createElement('a');
    link.href = url;
    // link.download = `${memeTemplate}/${topText}/${bottomText}.png`;

    link.download = `${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;
    link.click();
  };

  return (
    <div>
      <h1>React Meme Generator</h1>

      <label>
        Top text:
        <input
          onChange={(event) => setTopText(event.target.value)}
          value={topText}
          placeholder="top text"
        />
      </label>
      <br />

      <label>
        Bottom text:
        <input
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText}
          placeholder="bottom text"
        />
      </label>
      <br />

      <label htmlFor="meme-template">Meme template</label>
      <input
        id="meme-template"
        value={memeTemplate}
        onChange={(event) => setMemeTemplate(event.target.value)}
      />

      <button onClick={generateMeme}>Preview</button>

      <div>
        {memeList === '' ? (
          <img data-test-id="meme-image" src={memeList} alt="Generated meme" />
        ) : (
          <img
            data-test-id="meme-image"
            src={`https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`}
            alt="Generated meme"
          />
        )}

        {/* <img
          data-test-id="meme-image"
          src={memeList}
          alt="Generated meme"
          loading="lazy"
          width="200"
          height="200"
        /> */}

        <button onClick={downloadMeme}>Download</button>
      </div>
    </div>
  );
}
