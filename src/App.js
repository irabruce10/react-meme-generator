import { useState } from 'react';

export default function App() {
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeList, setMemeList] = useState(
    `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`,
  );

  function generateMeme() {
    // const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;

    const url = `https://memegen.link/images/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

    setMemeList(url);
  }

  const downloadMeme = () => {
    const url = `https://memegen.link/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;
    setMemeList(url);
    console.log(url);

    const link = document.createElement('a');
    link.href = url;

    console.log(link);
    // link.download = `${memeTemplate}/${topText}/${bottomText}.png`;

    link.download = `https://memegen.link/images/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

    console.log(link.download);

    // link.click();
  };

  return (
    <div>
      <h1>React Meme Generator</h1>

      <label>
        Top text:
        <input
          onChange={(event) => setTopText(event.currentTarget.value)}
          value={topText}
          placeholder="top text"
        />
      </label>
      <br />

      <label>
        Bottom text:
        <input
          onChange={(event) => setBottomText(event.currentTarget.value)}
          value={bottomText}
          placeholder="bottom text"
        />
      </label>
      <br />

      <label htmlFor="meme-template">Meme template</label>
      <input
        id="meme-template"
        value={memeTemplate}
        onChange={(event) => setMemeTemplate(event.currentTarget.value)}
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
