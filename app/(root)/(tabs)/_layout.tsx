import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View className={`justify-center items-center rounded-full `}>
    <View
      className={`rounded-full size-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="size-8"
      />
    </View>
  </View>
);

export default function Layout() {
  const TabLinks = [
    {
      id: "home",
      title: "Home",
      icon: icons.home,
    },
    {
      id: "rides",
      title: "Rides",
      icon: icons.list,
    },
    {
      id: "chat",
      title: "Chat",
      icon: icons.chat,
    },
    {
      id: "profile",
      title: "Profile",
      icon: icons.profile,
    },
  ];
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,

          marginHorizontal: 20,
          marginBottom: 20,
          height: 70,
        },
      }}
    >
      {TabLinks.map((tab) => (
        <Tabs.Screen
          key={tab.id}
          name={tab.id}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={tab.icon} focused={focused} />
            ),
            tabBarItemStyle: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        />
      ))}
    </Tabs>
  );
}
