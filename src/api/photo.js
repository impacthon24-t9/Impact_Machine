import axios from "axios";
import { AuthInstance } from ".";
import { dataURLtoFile } from "../util/dataURLtoFile";

export const Gets3 = async () => {
  const { data } = await AuthInstance.get(`/inbox/s3_presigned_url`);

  return data;
};

export const PostImage = async (url, fields, resultImg) => {
  const form = new FormData();

  form.append("key", fields?.key);
  if (Object.keys(fields).includes("x-amz-algorithm"))
    form.append("x-amz-algorithm", fields["x-amz-algorithm"]);
  if (Object.keys(fields).includes("x-amz-credential"))
    form.append("x-amz-credential", fields["x-amz-credential"]);
  if (Object.keys(fields).includes("x-amz-date"))
    form.append("x-amz-date", fields["x-amz-date"]);
  form.append("policy", fields?.policy);
  if (Object.keys(fields).includes("x-amz-signature"))
    form.append("x-amz-signature", fields["x-amz-signature"]);
  form.append("file", dataURLtoFile(resultImg, "image.jpeg"));
  form.append("Content-Type", "image/jpeg");

  return await axios.post(url, form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const PostInbox = async ({ phone, image }) => {
  const data = {
    phone,
    picture: image,
    location: "임팩톤 특별점"
  };
  return await AuthInstance.post("/inbox", data);
};
