import { useState } from 'react';
import SearchBar from './SearchBar';
import FridgeList from './FridgeList';
import SideMenu from './SideMenu';

interface MapSideBarProps {
  id: string;
}

function MapSideBar({ id }: MapSideBarProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div
      style={{
        minWidth: '500px',
        paddingLeft: '80px',
        backgroundColor: '#f8f8f8',
      }}
    >
      <SideMenu isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      <SearchBar />
      <FridgeList id={id} />
    </div>
  );
}

export default MapSideBar;
