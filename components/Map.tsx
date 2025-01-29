import { Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  // const region = {}
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="h-full w-full"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      style={{ height: "100%", width: "100%" }}
      //  initialRegion={region}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
