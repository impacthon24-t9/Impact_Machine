import { useRecoilState } from "recoil";
import { photos, selectedPhotos } from "../atoms/photo";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TX from "../style/Typography";
import { useNavigate } from "react-router-dom";

export const SelectImage = () => {
  const [photoList, setPhotoList] = useRecoilState(photos);
  const [selectedPhotoList, setSelectedPhotoList] =
    useRecoilState(selectedPhotos);
  const [buttonActive, setButtonActive] = useState(true);

  const selectImg = (v) => {
    if (selectedPhotoList.includes(v)) {
      setSelectedPhotoList(selectedPhotoList.filter((src) => src !== v));
    } else if (selectedPhotoList.length < 4) {
      setSelectedPhotoList([...selectedPhotoList, v]);
    }
  };
  useEffect(() => {
    if (selectedPhotoList.length >= 4) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  }, [selectedPhotoList]);

  const nav = useNavigate();

  return (
    <Images>
      <Container>
        <ImagesContainer>
          {photoList.map((src) => (
            <Image src={src} onClick={() => selectImg(src)} />
          ))}
        </ImagesContainer>
        <SelectedContainer>
          {selectedPhotoList.map((src) => (
            <SelectedImage src={src} />
          ))}
        </SelectedContainer>
      </Container>
      <TX.CE>이미지를 4장 선택해주새요</TX.CE>

      <NextPageButton disabled={buttonActive} onClick={() => nav("/frame")}>
        <TX.BE>선택 완료</TX.BE>
      </NextPageButton>
    </Images>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Image = styled.img`
  width: 10vw;
`;
const SelectedImage = styled.img`
  width: 20vw;
`;

const SelectedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const NextPageButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  background-color: ${({ theme }) => theme.content.primary};
  width: 200px;
  border-radius: 5px;
  padding: 10px;
  border: ${({ theme }) => `1px solid ${theme.border.primary}`};
  &:disabled {
    background-color: ${({ theme }) => theme.content.tertiary};
  }
  > p {
    color: ${({ theme }) => theme.background.primary};
  }
`;
