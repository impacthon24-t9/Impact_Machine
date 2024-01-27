import styled, { css } from "styled-components";

/*
사용법
// TX import 하기
<TX.LTE> 글씨입니다.</TX.LTE> -> LTE : Large Title Emphasized

LT -> Large Title
T -> Title
H -> Header
B -> Body
C -> Content
CA -> Caption
P -> Paragraph

R -> Regular
E -> Emphasized
*/

const TS = {}; // TextStyle
const TX = {}; // Typography

const CustomText = styled.p`
  // font-family 설정
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "-0.28px"};
  text-decoration: ${({ isUnderline }) => (isUnderline ? "underline" : "none")};
  font-weight: ${({ fontWeigth }) => fontWeigth || "00"};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
  ${({ color }) =>
    color &&
    css`
      color: color;
    `}
`;

TS.LargeTitle = styled(CustomText)`
  line-height: 34px;
  font-size: 28px;
  letter-spacing: -0.28px;
`;
TS.Title = styled(CustomText)`
  line-height: 32px;
  font-size: 24px;
  letter-spacing: -0.24px;
`;
TS.Header = styled(CustomText)`
  line-height: 24px;
  font-size: 20px;
  letter-spacing: -0.2px;
`;
TS.Body = styled(CustomText)`
  line-height: 20px;
  font-size: 16px;
  letter-spacing: -0.16px;
`;
TS.Content = styled(CustomText)`
  line-height: 18px;
  font-size: 14px;
  letter-spacing: -0.14px;
`;
TS.Caption = styled(CustomText)`
  line-height: 16px;
  font-size: 12px;
  letter-spacing: -0.12px;
`;
TS.Paragraph = styled(CustomText)`
  line-height: 150%;
  font-size: 16px;
  letter-spacing: -0.16px;
`;

// Large Title Regular, Emphasized
TX.LTR = (props) => <TS.LargeTitle {...props}>{props.children}</TS.LargeTitle>;
TX.LTE = (props) => (
  <TS.LargeTitle fontWeigth={600} {...props}>
    {props.children}
  </TS.LargeTitle>
);

// Title Regular, Emphasized
TX.TR = (props) => <TS.Title {...props}>{props.children}</TS.Title>;
TX.TE = (props) => (
  <TS.Title fontWeigth={600} {...props}>
    {props.children}
  </TS.Title>
);

// Header Regular, Emphasized
TX.HR = (props) => <TS.Header {...props}>{props.children}</TS.Header>;
TX.HE = (props) => (
  <TS.Header fontWeigth={600} {...props}>
    {props.children}
  </TS.Header>
);

// Body Regular, Emphasized
TX.BR = (props) => <TS.Body {...props}>{props.children}</TS.Body>;
TX.BE = (props) => (
  <TS.Body fontWeigth={600} {...props}>
    {props.children}
  </TS.Body>
);

// Content Regular, Emphasized
TX.CR = (props) => <TS.Content {...props}>{props.children}</TS.Content>;
TX.CE = (props) => (
  <TS.Content fontWeigth={600} {...props}>
    {props.children}
  </TS.Content>
);

// Caption Regular, Emphasized
TX.CAR = (props) => <TS.Paragraph {...props}>{props.children}</TS.Paragraph>;
TX.CAE = (props) => (
  <TS.Paragraph fontWeigth={600} {...props}>
    {props.children}
  </TS.Paragraph>
);

// Paragraph Regular, Emphasized
TX.PR = (props) => <TS.LargeTitle {...props}>{props.children}</TS.LargeTitle>;
TX.PE = (props) => (
  <TS.LargeTitle fontWeigth={600} {...props}>
    {props.children}
  </TS.LargeTitle>
);

export default TX;
