import { useQuery } from "react-query";
import { getAllFridge, getFridgeById } from "@api/fridges";

export const useGetAllFridges = () => {
  return useQuery(
    ["getAllFridges"],
    async () => {
      const data = await getAllFridge();
      return data;
    },
    {
      onError: (error: { message: string }) => {
        console.error(error.message);
      },
    }
  );
};

export const useGetFridgeById = ({ id }: { id: number }) => {
  return useQuery(
    ["getFridgeByID", id],
    async () => {
      const data = await getFridgeById({ fridgeId: id });
      return data;
    },
    {
      onError: (error: { message: string }) => {
        console.error(error.message);
      },
    }
  );
};
