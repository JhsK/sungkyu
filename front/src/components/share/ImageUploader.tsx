import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';
import useImageMutation from '../Blog/hooks/useImageMutation';

const Container = styled.div`
  padding-bottom: 2rem;
  input {
    display: none;
  }
`;

const Button = styled.button`
  width: 400px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.FOOTER_GRAY};
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
  cursor: pointer;
`;

const ImageUploader = ({ imagePath, setImagePath }) => {
  const imageRef = useRef(null);
  const { mutate: imageMutate } = useImageMutation();

  const onChangeImage = async (e) => {
    const formData = new FormData();
    formData.append('img', e.target.files[0]);
    imageMutate(formData, {
      onSuccess: (data) => setImagePath(data),
    });
  };
  return (
    <>
      <Container>
        <input type="file" accept="image/*" name="img" onChange={onChangeImage} ref={imageRef} />
        <Button onClick={() => imageRef.current.click()}>클릭 또는 드래그를 통해 이미지 업로드</Button>
        {imagePath && (
          <ImageContainer>
            <img src={`${imagePath.replace(/\/thumb\//, '/original/')}`} alt="sumnail" />
            <CloseBtn>
              <AiFillCloseCircle />
            </CloseBtn>
          </ImageContainer>
        )}
      </Container>
    </>
  );
};

export default ImageUploader;
