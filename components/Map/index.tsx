import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { NextComponentType, NextPageContext } from "next";
import { useMemo } from "react";

interface IProps {
  isLoaded: boolean;
}

const MapComponent: NextComponentType<NextPageContext, IProps, IProps> = ({
  isLoaded,
}) => {
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ width: "100%" }}>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onLoad={() => console.log("Map Component Loaded...")}
      />
    </div>
  );
};

export default MapComponent;
