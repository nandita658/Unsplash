import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Loader from './Components/Loader';
import UnsplashImages from './Components/UnsplashImages';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Tabs from "./Components/Tabs";

const WrapperImg = styled.section`
  max-width: 70rem;
  margin-top: 2em;
  margin-bottom: 2em;
  margin-left: 13em;
  margin-right: 10em;
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(()=>{
    fetchImages();
  },[])

  const fetchImages = () => {
    const accessKey = process.env.REACT_APP_ACCESSKEY; 

    axios
      .get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`)
      .then(res=>setImages([...images,...res.data]))
  }

  return (
    <div>
      <Header/>
      <Tabs>
        <div label="Trending">
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={<Loader/>}
          >
            <WrapperImg>
              {images.map(image=>(
                <UnsplashImages url={image.urls.thumb} key={image.id}/>
              ))}
            </WrapperImg>
          </InfiniteScroll>
        </div>
        <div label="New">
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={<Loader/>}
          >
            <WrapperImg>
              {images.map(image=>(
                <UnsplashImages url={image.urls.thumb} key={image.id}/>
              ))}
            </WrapperImg>
          </InfiniteScroll>
        </div>
        <div label="Following">
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={<Loader/>}
          >
            <WrapperImg>
              {images.map(image=>(
                <UnsplashImages url={image.urls.thumb} key={image.id}/>
              ))}
            </WrapperImg>
          </InfiniteScroll>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
