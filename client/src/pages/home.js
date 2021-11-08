import React from 'react';
import { Image } from '@chakra-ui/react';
import backgroundPicture from '../photos/backgroundDOTA-resized.jpg';

const coverphoto = backgroundPicture;

function Home() {
  return (
    <Image alignSelf='center' scr={coverphoto} />
  );
}

export default Home;

