import axiosInstance from "@api/index";
import { IFridgeAll, IFridgeDetail } from "types";

export const getAllFridge = async () => {
  const res = await axiosInstance.request<IFridgeAll>({
    method: "GET",
    url: "/fridge/getAll",
  });
  return res.data.data;
};

export const getFridgeById = async ({ fridgeId }: { fridgeId: number }) => {
  const res = await axiosInstance.request<{ data: IFridgeDetail }>({
    method: "GET",
    url: `/fridge/getFridge2?fridgeId=${fridgeId}`,
  });
  return res.data.data;
};
