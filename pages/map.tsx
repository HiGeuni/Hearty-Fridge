import AuthRequired from '@components/auth/AuthRequired';
import Header from '@components/Header';
import { useLoadScript } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import MapView from '@components/MapView';
import MapSideBar from '@components/MapSideBar';
import { useRouter } from 'next/router';
import FridgeDetail from '@components/FridgeDetail';

type QueryParams = {
  id?: string;
};

const Map: NextPage = () => {
  const router = useRouter();
  const [activateId, setActivateId] = useState<string>('');
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  });

  useEffect(() => {
    if (router.isReady) {
      const queryParams: QueryParams = router.query;
      if (queryParams.id) setActivateId(queryParams.id);
    }
  }, [router]);

  return (
    <AuthRequired>
      <div style={{ height: '100vh', overflowY: 'hidden' }}>
        <Header />
        <div style={{ display: 'flex', height: `calc(100% - 128.5px)` }}>
          {/* SideBAR */}
          <MapSideBar id={activateId} />
          {activateId && <FridgeDetail id={activateId} />}
          <MapView isLoaded={isLoaded} />
        </div>
      </div>
    </AuthRequired>
  );
};

export default Map;
