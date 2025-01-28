import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello, {user?.fullName}</Text>
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
