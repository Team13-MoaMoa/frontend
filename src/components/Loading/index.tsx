import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import loadingUI from '../../assets/loading.gif';

const Loading = () => {
  return (
    <ImageMiddleBox>
      <ImageBox>
        <Image fill src={loadingUI} alt="로딩중 사진" />
      </ImageBox>
    </ImageMiddleBox>
  );
};

export default Loading;

const ImageBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
  height: 500px;
`;

const Empty = styled.div`
  width: 100vw;
  background-color: whitesmoke;
  min-height: calc(100vh - 70px - 159px);
`;

const ImageMiddleBox = styled(Empty)`
  background-color: white;
`;
