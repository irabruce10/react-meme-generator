// Importing necessary React hooks

import { useEffect, useState } from 'react';

import './App.css';
// Defining the MemeGenerator component

const MemeGenerator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('aag');
  const [memeUrl, setMemeUrl] = useState('');

  // Using the useEffect hook to generate the meme URL whenever the topText, bottomText, or memeTemplate state variables change

  useEffect(() => {
    const generateMeme = () => {
      let url = `https://api.memegen.link/${memeTemplate}/${topText ? encodeURIComponent(topText) : ''}/${bottomText ? encodeURIComponent(bottomText) : ''}.png`;
      //
      if (topText === '' && bottomText === '') {
        url = `https://api.memegen.link/images/${memeTemplate}.png`;
      } else if (topText !== '' && bottomText === '') {
        url = `https://api.memegen.link/images/${memeTemplate}/${topText}.png`;
      } else if (bottomText !== '' && topText === '') {
        url = `https://api.memegen.link/images/${memeTemplate}/${bottomText}.png`;
      } else if (topText !== '' && bottomText !== '') {
        url = `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;
      } else if (memeTemplate === '') {
        alert('Please add template');
      } else {
        url = `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;
      }

      setMemeUrl(url);
    };

    generateMeme();
  }, [topText, bottomText, memeTemplate]);

  // Downloding the template with the name

  const downloadMeme = (url, name) => {
    return fetch(memeUrl)
      .then((resp) => resp.blob())
      .then((blob) => {
        const urls = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = urls;
        link.download = Math.random(name) * 100000000 + 'memes';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return Promise.resolve();
      });
  };

  return (
    // The component renders the UI
    <div className="meme-generator">
      <h1>React Meme Generator</h1>
      <label htmlFor="top-text">Top text:</label>
      <input
        placeholder="Enter a top Text"
        id="top-text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />

      <label htmlFor="bottom-text">Bottom text:</label>
      <input
        placeholder="Enter bottom Text"
        id="bottom-text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />

      <label htmlFor="meme-template">Meme template:</label>
      <input
        id="meme-template"
        value={memeTemplate}
        onChange={(e) => setMemeTemplate(e.target.value)}
      />

      {memeUrl && (
        <div>
          <img
            data-test-id="meme-image"
            src={memeUrl}
            alt="Generated meme"
            width="300px"
          />
        </div>
      )}
      {/**/}
      <button onClick={downloadMeme}>Download</button>
    </div>
  );
};

export default MemeGenerator;
