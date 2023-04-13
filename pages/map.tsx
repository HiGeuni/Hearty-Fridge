// import { getFridgeById } from "@api/fridges";
import AuthRequired from "@components/auth/AuthRequired";
import Header from "@components/Header";
// import { useGetAllFridges, useGetFridgeById } from "@api/hooks/fridge";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo } from "react";
import { styled } from "@mui/material";
import MapComponents from "@components/Map";

const Map: NextPage = () => {
  // const { data: dataAll, refetch } = useGetAllFridges();
  // const { data: dataOne, refetch: refetchOne } = useGetFridgeById({ id: 363 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  });

  return (
    <AuthRequired>
      <Header />
      <div style={{ display: "flex", width: "100%" }}>
        <div>
          <p>This is Sidebar...</p>
        </div>
        <MapComponents isLoaded={isLoaded} />
      </div>
    </AuthRequired>
  );
};

export default Map;
