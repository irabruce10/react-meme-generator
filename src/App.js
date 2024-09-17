import { useState } from 'react';

export default function App() {
  const [memeList, setMemeList] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('Bruh');

  function generateMeme() {
    const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
    setMemeList(url);
  }

  const downloadMeme = () => {
    const link = document.createElement('a');
    link.href = memeList;
    link.download = `${memeTemplate}.png`;
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
        {memeList && (
          <img data-test-id="meme-image" src={memeList} alt="Generated meme" />
        )}

        <button onClick={downloadMeme}>Download</button>
      </div>
    </div>
  );
}
