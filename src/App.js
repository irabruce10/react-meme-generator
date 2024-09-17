import { useState, useEffect } from 'react';

export default function App() {
  const [memeList, setmemeList] = useState([]);
  const [randomImg, setRandomImg] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const url = 'https://api.memegen.link/images/';

  useEffect(() => {
    async function getMemesApi() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setmemeList(data);
      } catch (error) {
        console.error('Error fetching memes:', error);
      }
    }
    getMemesApi();
  }, []);

  function memesHandler() {
    // const randomNumber = Math.floor(Math.random() * memeList.length);
    // let randomMemeURL = memeList[randomNumber].attributes.data.attributes.url;
    // setrandomMeme(randomMemeURL);
    const rand = memeList[Math.floor(Math.random() * memeList.length)].url;
    setRandomImg(rand);

    // Create an image element and append it to the body
    // const img = document.createElement('img');
    // img.src = rand;
    // document.body.appendChild(img);
    // console.log(rand);
  }

  function submitHandle(event) {
    event.preventDefault();

    // const topText = event.target.elements.search.value;
    // const bottomText = event.target.elements.search.value;
    // const rand = memeList[Math.floor(Math.random() * memeList.length)].url;
    // setRandomImg(`${rand}?top=${topText}&bottom=${bottomText}`);
    // event.target.elements.search.value = '';
  }

  function enterLine(event) {}

  return (
    <div>
      <h1>Memes</h1>

      <form onSubmit={submitHandle}>
        <label>
          Top text:
          <input
            onChange={(event) => setTopText(event.target.value)}
            value={topText}
            placeholder="top text"
            type="text"
          />
        </label>
        <br />

        <label>
          Bottom text:
          <input
            onChange={(event) => setBottomText(event.target.value)}
            value={bottomText}
            placeholder="bottom text"
            type="text"
          />
        </label>
        <br />
        <button onClick={memesHandler}>Fetch Memes</button>
      </form>

      <div>
        <img src={randomImg} />
      </div>
    </div>
  );
}
