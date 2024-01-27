import React from "react";
import styled from "styled-components";

export const Input = ({ label, placeholder, value, setValue }) => {
  const saveValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <TextContainer>
        <Text htmlFor="input">{label}</Text>
      </TextContainer>
      <InputBox
        id="input"
        placeholder={placeholder}
        onChange={saveValue}
        value={value}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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

const TextContainer = styled.div`
  display: flex;
  padding: 0px 4px;
`;

const Text = styled.label`
  color: ${({ theme }) => theme.content.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.14px;
`;

const InputBox = styled.input`
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

  &::placeholder {
    color: ${({ theme }) => theme.content.tertiary};
  }

  &:focus {
    background-color: ${({ theme }) => theme.group.secondary};
  }
`;
