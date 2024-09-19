import React, { useEffect, useState } from 'react';

const MemeGenerator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('aag');
  const [memeUrl, setMemeUrl] = useState('');

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleMemeTemplateChange = (e) => {
    setMemeTemplate(e.target.value);
  };

  useEffect(() => {
    const generateMeme = () => {
      let url = `https://api.memegen.link/${memeTemplate}/${topText ? encodeURIComponent(topText) : ''}/${bottomText ? encodeURIComponent(bottomText) : ''}.png`;

      if (topText === '' && bottomText === '') {
        url = `https://api.memegen.link/images/${memeTemplate}.png`;
        console.log('tmpl', url);
      } else if (topText !== '' && bottomText === '') {
        url = `https://api.memegen.link/images/${memeTemplate}/${topText}.png`;
        console.log('top', url);
      } else if (bottomText !== '' && topText === '') {
        url = `https://api.memegen.link/images/${memeTemplate}/${bottomText}.png`;
        console.log('btm', url);
      } else if (topText !== '' && bottomText !== '') {
        url = `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;
      } else if (memeTemplate === '') {
        alert('Please add template');
      } else {
        url = `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;
      }

      setMemeUrl(url);

      console.log(url);
    };

    generateMeme();
  }, [topText, bottomText, memeTemplate]);

  const downloadMeme = (url, name) => {
    console.log(memeUrl);

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
    <div>
      <h1>React Meme Generator</h1>
      <label htmlFor="top-text">Top text:</label>
      <input id="top-text" value={topText} onChange={handleTopTextChange} />
      <br />
      <br />

      <label htmlFor="bottom-text">Bottom text:</label>
      <input
        id="bottom-text"
        value={bottomText}
        onChange={handleBottomTextChange}
      />
      <br />
      <br />

      <label htmlFor="meme-template">Meme template:</label>
      <input
        id="meme-template"
        value={memeTemplate}
        onChange={handleMemeTemplateChange}
      />
      <br />
      <br />

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

      <button onClick={downloadMeme}>Download</button>
    </div>
  );
};

export default MemeGenerator;
