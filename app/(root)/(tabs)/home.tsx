import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView className="flex h-full items-center justify-center bg-white p-2">
      <SignedIn>
        <View className="flex items-center justify-center h-full w-full">
          <Text>Hello, {user?.emailAddresses[0].emailAddress}</Text>
        </View>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text> Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  );
};

export default Home;
