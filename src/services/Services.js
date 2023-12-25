import axios from "axios";
import { WEBHOOKURL } from "../utils/helper";

export async function createSegment(formData) {
  return new Promise((resolve, reject) => {
    axios
      .post(WEBHOOKURL, formData)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        console.error(err);
        return reject(err);
      });
  });
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
