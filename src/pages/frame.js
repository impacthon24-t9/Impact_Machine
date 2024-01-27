import styled from "styled-components";
import { useRecoilState } from "recoil";
import { FinalImage, selectedPhotos } from "../atoms/photo";
import { FrameList } from "../assets/frames";
import { useState } from "react";
import TX from "../style/Typography";
import { useNavigate } from "react-router-dom";

export const Frame = () => {
  const nav = useNavigate();
  const [selectedPhotoList, setSelectedPhotoList] =
    useRecoilState(selectedPhotos);
  const frames = FrameList;
  const [selectFrame, setSelectFrame] = useState(0);
  const [finalImage, setFinalImage] = useRecoilState(FinalImage);

  const makeImg = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 450;
    canvas.height = 1572.75;
    const context = canvas.getContext("2d");
    const newImage1 = new Image();
    newImage1.crossOrigin = "Anonymous";
    newImage1.src = selectedPhotoList[0];

    const newImage2 = new Image();
    newImage2.src = selectedPhotoList[1];

    const newImage3 = new Image();
    newImage3.src = selectedPhotoList[2];

    const newImage4 = new Image();
    newImage4.src = selectedPhotoList[3];

    const framesImg = new Image();
    framesImg.src = frames[selectFrame];

    Promise.all([
      loadImage(newImage1),
      loadImage(newImage2),
      loadImage(newImage3),
      loadImage(newImage4),
      loadImage(framesImg)
    ]).then(() => {
      context.drawImage(newImage1, 13.5, 13.5, 423, 324);
      context.drawImage(newImage2, 13.5, 351.675, 423, 324);
      context.drawImage(newImage3, 13.5, 689.85, 423, 324);
      context.drawImage(newImage4, 13.5, 1028.025, 423, 324);
      context.drawImage(framesImg, 0, 0, 450, 1572.75);

      setFinalImage(canvas.toDataURL());
    });
  };

  const loadImage = (image) => {
    return new Promise((resolve) => {
      image.onload = () => resolve();
    });
  };

  return (
    <FlexContainer>
      <Container>
        <A>
          <FrameContainer>
            <FrameImge src={frames[selectFrame]} />
            {selectedPhotoList.map((src, i) => (
              <FrameIncludesImage src={src} $height={i} />
            ))}
          </FrameContainer>
        </A>
        <SelectFrame>
          {frames.map((src, idx) => (
            <div>
              <Frames src={src} onClick={() => setSelectFrame(idx)} />
            </div>
          ))}
        </SelectFrame>
      </Container>
      <NextPageButton
        onClick={() => {
          makeImg();
          nav("/download");
        }}
      >
        <TX.BE>선택 완료</TX.BE>
      </NextPageButton>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 5px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const A = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.content.quartenary};
`;

const FrameContainer = styled.div`
  position: relative;
  display: flex;
`;
const FrameImge = styled.img`
  width: 200px;
  z-index: 1;
`;
const FrameIncludesImage = styled.img`
  width: 188px;
  left: 6px;
  top: ${({ $height }) => $height * 150.3 + 6}px;
  position: absolute;
`;

const SelectFrame = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.content.quartenary};
  > div {
    background-color: ${({ theme }) => theme.content.quartenary};
    height: fit-content;
  }
`;

const Frames = styled.img`
  width: 90px;
  height: fit-content;
  cursor: pointer;
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
