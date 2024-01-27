import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "sessionStorage",
  storage: sessionStorage
});

export const photos = atom({
  key: "photos",
  default: []
});

export const photoBlobs = atom({
  key: "photoBlobs",
  default: []
  // effects_UNSTABLE: [persistAtom]
});

export const selectedPhotos = atom({
  key: "selectedPhotos",
  default: []
});

export const FinalImage = atom({
  key: "finalImage",
  default: ""
});
