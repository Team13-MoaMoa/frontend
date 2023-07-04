import React from 'react';
import Image from 'next/image';
import defaultImage from '@/assets/defaultProfile.png';
import styled from '@emotion/styled';
export default function PreviewImage({
  previewImage,
}: {
  previewImage: string;
}) {
  return (
    <>
      {previewImage ? (
        <ImageBox>
          <Image fill src={previewImage} alt="Preview" />
        </ImageBox>
      ) : (
        <ImageBox>
          <Image fill src={defaultImage} alt="기본 프로필" />
        </ImageBox>
      )}
    </>
  );
}

const ImageBox = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
`;
