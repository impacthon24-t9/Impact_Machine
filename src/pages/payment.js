import styled from "styled-components";
import { Card } from "../assets/icon/card";
import { useTheme } from "../context/themeProvider";
import TX from "../style/Typography";

export const Payment = () => {
  const [ThemeMode] = useTheme();
  return (
    <Container>
      <TX.BE style={{ fontSize: "2rem" }}>결제 방식</TX.BE>
      <div>
        {/* <SelectContainer onClick={() => alert("현재 지원하지 않습니다.")}>
          <Card theme={ThemeMode === "dark"} size={["94.5", "135"]} />
          <TX.HE style={{ fontSize: "3rem" }}>현금 결제</TX.HE>
        </SelectContainer> */}
        <a href="https://buy.stripe.com/test_14kaFRaHV6I0652aEE">
          <SelectContainer>
            <Card theme={ThemeMode === "dark"} size={["94.5", "135"]} />
            <TX.HE style={{ fontSize: "3rem" }}>카드 결제</TX.HE>
          </SelectContainer>
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  width: 70%;
  height: 70%;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 50px;
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.content.primary};
    }
  }
`;

const SelectContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 50px;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.content.quartenary};
  }
`;
