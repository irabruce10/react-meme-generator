import { useState, useEffect } from 'react';

export default function App() {
  const [memeList, setmemeList] = useState([]);
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

    // Create an image element and append it to the body
    const img = document.createElement('img');
    img.src = rand;
    document.body.appendChild(img);
    console.log(rand);
  }

  return (
    <div>
      <h1>Memes</h1>
      <div></div>

      <img src={memeList} alt="Meme" />

      <button onClick={memesHandler}>Fetch Memes</button>
    </div>
  );
}
