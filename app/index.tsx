import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600">
        Open up App.tsx to start working on your app!
      </Text>
    </SafeAreaView>
  );
};

export default Home;
