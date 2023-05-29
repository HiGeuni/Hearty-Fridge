import { NextComponentType } from "next";
import SearchBar from "./SearchBar";
import FridgeList from "./FridgeList";
import SideMenu from "./SideMenu";
import { useState } from "react";
import DefaultModal from "@components/Forms";

interface MapSideBarProps {
  id: string;
}

const MapSideBar = ({ id }: MapSideBarProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div
      style={{
        minWidth: "500px",
        paddingLeft: "80px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <SideMenu isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      <SearchBar />
      <FridgeList id={id} />
    </div>
  );
};

export default MapSideBar;
