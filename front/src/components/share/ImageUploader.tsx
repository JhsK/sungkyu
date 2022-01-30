import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import styled from '@emotion/styled';
import { AiFillCloseCircle } from 'react-icons/ai';

const Container = styled.div`
  padding-bottom: 2rem;
`;

const Button = styled.button`
  width: 400px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.BACKGROUND_PROJECTS_COLOR};
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  padding-bottom: 1rem;
  position: relative;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
`;

const ImageUploader = () => {
  const [image, setImage] = useState([]);
  const maxNumber = 69;

  const onChangeImage = (imageList) => {
    setImage(imageList);
  };

  return (
    <>
      <ImageUploading value={image} onChange={onChangeImage} maxNumber={maxNumber} dataURLKey="data_url">
        {({ imageList, onImageUpload, isDragging, onImageRemove, dragProps }) => (
          <div className="upload__image-wrapper">
            <Container>
              <Button onClick={onImageUpload} {...dragProps}>
                클릭 또는 드래그를 통해 이미지 업로드
              </Button>
              {imageList.map((imageData, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="image-item">
                  <ImageContainer>
                    <img src={imageData.data_url} alt="" width="100" />
                    <CloseBtn>
                      <AiFillCloseCircle onClick={() => onImageRemove(index)} />
                    </CloseBtn>
                  </ImageContainer>
                </div>
              ))}
            </Container>
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default ImageUploader;
