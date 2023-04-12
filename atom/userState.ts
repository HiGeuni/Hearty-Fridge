import { atom } from "recoil";
import { v1 } from "uuid";
import { axiosInstance } from "@api/index";

export const userState = atom<string | null>({
  key: `userState/${v1()}`,
  default: null,
  effects: [
    ({ setSelf, onSet }) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("accessToken");
        if (token !== null) {
          setSelf(token);
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;
        }
      }
      onSet((token, _, isReset) => {
        if (isReset || token === null) {
          localStorage.removeItem("accessToken");
          return;
        }
        localStorage.setItem("accessToken", token);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      });
    },
  ],
});
