export const lightTheme = {
  // 팔레트 기본 색상 계열 (모드 변경 시에도 유지)
  solid: {
    black: "#000000",
    white: "#FFFFFF",
    red: "#FF4035",
    orange: "#FF9A05",
    yellow: "#FFD105",
    green: "#32CC58",
    blue: "#057FFF",
    indigo: "#5B59DE",
    translucent_red: "rgba(255,64,53,0.24)",
    translucent_orange: "rgba(255,154,5,0.24)",
    translucent_yellow: "rgba(255,109,5,0.24)",
    translucent_green: "rgba(50,204,88,0.24)",
    translucent_blue: "rgba(5,127,255,0.24)",
    translucent_indigo: "rgba(91,89,222,0.24)"
  },
  // 브랜드 컬러 & 모노 코어 컬러 (모드 변경 시에도 유지)
  core: {
    accent: "#5182F6",
    positive: "#32CC58",
    warning: "#FFD105",
    negative: "#FF4035"
  },
  // 최하단 배경 (전경)에 사용되는 색상)
  background: {
    primary: "#FFFFFF",
    secondary: "#F2F3F8",
    tertiary: "#EBEEF5"
  },
  // 오브젝트 아웃라인 or 구분자에 사용되는 색상
  border: {
    primary: "rgba(112, 124, 151, 0.2)",
    secondary: "rgba(112, 124, 151, 0.12)",
    tertiary: "rgba(112, 124, 151, 0.08)"
  },
  // 배경 위 오브젝트 채우기 색상 계열
  fill: {
    primary: "rgba(149, 157, 178, 0.16)",
    secondary: "rgba(149, 157, 178, 0.12)",
    tertiary: "rgba(149, 157, 178, 0.8)"
  },
  // Fill 또는 스크링 위에 표시되는 오브젝트 채우기 생상 계열
  group: {
    primary: "#FFFFFF",
    secondary: "#F8F9FB",
    tertiary: "#F1F4F9",
    quartenary: "#EBEEF6"
  },
  // 텍스트 및 아이콘에 사용되는 색상
  content: {
    primary: "#24272E",
    secondary: "rgba(36, 39, 46, 0.6)",
    tertiary: "rgba(36, 39, 46, 0.32)",
    quartenary: "rgba(36, 39, 46, 0.16)"
  }
};

export const darkTheme = {
  // 팔레트 기본 색상 계열 (모드 변경 시에도 유지)
  solid: {
    black: "#000000",
    white: "#FFFFFF",
    red: "#FF4035",
    orange: "#FF9A05",
    yellow: "#FFD105",
    green: "#32CC58",
    blue: "#057FFF",
    indigo: "#5B59DE",
    translucent_red: "rgba(255,64,53,0.24)",
    translucent_orange: "rgba(255,154,5,0.24)",
    translucent_yellow: "rgba(255,109,5,0.24)",
    translucent_green: "rgba(50,204,88,0.24)",
    translucent_blue: "rgba(5,127,255,0.24)",
    translucent_indigo: "rgba(91,89,222,0.24)"
  },
  // 브랜드 컬러 & 모노 코어 컬러 (모드 변경 시에도 유지)
  core: {
    accent: "#5182F6",
    positive: "#32CC58",
    warning: "#FFD105",
    negative: "#FF4035"
  },
  // 최하단 배경 (전경)에 사용되는 색상)
  background: {
    primary: "#000000",
    secondary: "#090A0B",
    tertiary: "#0E0F11"
  },
  // 오브젝트 아웃라인 or 구분자에 사용되는 색상
  border: {
    primary: "rgba(112, 124, 151, 0.2)",
    secondary: "rgba(112, 124, 151, 0.12)",
    tertiary: "rgba(112, 124, 151, 0.08)"
  },
  // 배경 위 오브젝트 채우기 색상 계열
  fill: {
    primary: "rgba(255, 255, 255, 0.16)",
    secondary: "rgba(255, 255, 255, 0.12)",
    tertiary: "rgba(255, 255, 255, 0.8)"
  },
  // Fill 또는 스크링 위에 표시되는 오브젝트 채우기 생상 계열
  group: {
    primary: "#0E0F11",
    secondary: "#121416",
    tertiary: "#17181C",
    quartenary: "#1C1D22"
  },
  // 텍스트 및 아이콘에 사용되는 색상
  content: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.6)",
    tertiary: "rgba(255, 255, 255, 0.32)",
    quartenary: "rgba(255, 255, 255, 0.16)"
  }
};

export const theme = {
  lightTheme,
  darkTheme
};
