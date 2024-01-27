import styled, { ThemeContext } from "styled-components";
import TX from "../style/Typography";
import { Logo } from "../assets/icon/logo";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const theme = useContext(ThemeContext);
  const nav = useNavigate();

  return (
    <Container onClick={() => nav("/payment")}>
      <LogoContainer>
        <Logo size="40%" color={theme.background.primary} />
      </LogoContainer>
      <TX.HR style={{ fontSize: "3rem" }}>화면을 터치하세요</TX.HR>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  cursor: pointer;
  > p {
    animation: opacity 1s 0.5s infinite alternate;
  }
  @keyframes opacity {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.content.primary};
  width: 50vh;
  height: 50vh;
`;
