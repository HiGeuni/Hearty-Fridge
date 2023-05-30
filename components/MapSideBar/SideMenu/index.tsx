import { Dispatch, SetStateAction } from 'react';
import { NavItem, Seperator } from './style';

interface SideMenuProps {
  isFavorite: boolean;
  setIsFavorite: Dispatch<SetStateAction<boolean>>;
}

function SideMenu({ isFavorite, setIsFavorite }: SideMenuProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
      <NavItem activate={!isFavorite} onClick={() => setIsFavorite(false)}>
        Map
      </NavItem>
      <Seperator> | </Seperator>
      <NavItem activate={isFavorite} onClick={() => setIsFavorite(true)}>
        MyFridge
      </NavItem>
    </div>
  );
}

export default SideMenu;
