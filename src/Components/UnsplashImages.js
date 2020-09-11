import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    height: 310px;
    width: 330px;
`;

export const UnsplashImages = ({url,key}) =>  {
    return <Img src={url} key={key} alt=""/>
}

export default UnsplashImages;