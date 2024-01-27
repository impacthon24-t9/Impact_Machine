import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TX from "../style/Typography";
import { useRecoilState } from "recoil";
import { photoBlobs, photos } from "../atoms/photo";
import { useNavigate } from "react-router-dom";

export const Photo = () => {
  const videoRef = useRef(null);
  const [time, setTime] = useState(7);
  const [photoList, setPhotoList] = useRecoilState(photos);
  const [photoBlobList, setPhotoBlobList] = useRecoilState(photoBlobs);
  const nav = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    getWebCam((stream) => {
      videoRef.current.srcObject = stream;
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if (seconds === 0) {
      ScreenShot();

      setTime(3);
    }
    return String(seconds);
  };

  const getWebCam = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      return undefined;
    }
  };

  const ScreenShot = () => {
    const videoCam = document.getElementById("videoCam");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 786;
    context.scale(-1, 1);
    context.translate(-1024, 0);
    context.drawImage(videoCam, 0, 0, 1024, 786);
    canvas.toBlob((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      setPhotoList([...photoList, blobUrl]);
      setPhotoBlobList([...photoBlobList, blob]);
    }, "image/jpeg");
  };

  useEffect(() => {
    if (photoList.length === 8) {
      nav("/selectimage");
    }
  }, [nav, photoList]);
  return (
    <Container>
      <Video ref={videoRef} autoPlay id="videoCam" />
      <Timer>
        <TX.BR>{getSeconds(time)}</TX.BR>
        <TX.BR>초 후 촬영</TX.BR>
      </Timer>
    </Container>
  );
};
const Container = styled.div``;

const Video = styled.video`
  width: 50vw;
  transform: rotateY(180deg);
`;

const Timer = styled.div`
  display: flex;
  align-items: end;
`;
