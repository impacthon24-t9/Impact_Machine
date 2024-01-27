import { useRecoilValue } from "recoil";
import { FinalImage } from "../atoms/photo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Gets3, PostImage, PostInbox } from "../api/photo";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TX from "../style/Typography";


export const Download = () => {
  const nav = useNavigate();

  const resultImg = useRecoilValue(FinalImage);
  const { data } = useQuery({
    queryKey: ["gets3"],
    queryFn: () => Gets3(),
    retry: 0
  });
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const [img, setImg] = useState("");

  const { refetch } = useQuery({
    queryKey: [
      "PostImage",
      data?.url || "",
      data?.field || "",
      resultImg || ""
    ],
    queryFn: () => PostImage(data?.url, data?.fields, resultImg),
    retry: 0,
    enabled: false
  });

  useEffect(() => {
    if (data?.url) {
      refetch();
      setUrl(() => data?.url);
      setKey(() => data?.fields.key);
      setImg(() => `https://w0nd3rwa11.s3.ap-northeast-2.amazonaws.com/${key}`);
    }
  }, [data]);

  const { mutate: PostInboxMutate } = useMutation(PostInbox, {
    onSuccess: (res) => {
      nav("/");
    },
    onError: (err) => {}
  });

  const [phone, setPhone] = useState("");
  const [buttonActive, setButtonActive] = useState(true);

  useEffect(() => {
    if (phone.length >= 10) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  }, [phone]);

  return (
    <Container>
      <Frame src={resultImg} />

      <FormContainer>
        <InputContainer>
          <InputTextContainer>
            <InputText htmlFor="phone">전화번호</InputText>
          </InputTextContainer>
          <InputInputBox
            type="number"
            id="phone"
            placeholder="전화번호"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </InputContainer>
        <NextPageButton
          disabled={buttonActive}
          onClick={() => PostInboxMutate({ phone, image: img })}
        >
          <TX.BE>핸드폰으로 전송</TX.BE>
        </NextPageButton>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const Frame = styled.img`
  width: 200px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:focus-within {
    > div > label {
      color: ${({ theme }) => theme.content.primary};
      font-weight: 600;
    }
  }
`;

const InputTextContainer = styled.div`
  display: flex;
  padding: 0px 4px;
`;

const InputText = styled.label`
  color: ${({ theme }) => theme.content.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.14px;
`;

const InputInputBox = styled.input`
  width: 100%;
  height: auto;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  color: ${({ theme }) => theme.content.primary};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.16px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.content.tertiary};
  }

  &:focus {
    background-color: ${({ theme }) => theme.group.secondary};
  }
`;

const NextPageButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.content.primary};
  width: 50%;
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
