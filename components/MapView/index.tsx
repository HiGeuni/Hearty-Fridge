import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { NextComponentType, NextPageContext } from 'next';
import { useMemo } from 'react';

interface IProps {
  isLoaded: boolean;
}

const MapView: NextComponentType<NextPageContext, IProps, IProps> = ({
  isLoaded,
}) => {
  const mapCenter = useMemo(() => ({ lat: 37.541, lng: 126.986 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollWheel: false,
    }),
    [],
  );

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={() => console.log('Map Component Loaded...')}
      />
    </div>
  );
};

export default MapView;
