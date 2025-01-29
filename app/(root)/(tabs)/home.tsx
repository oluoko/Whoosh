import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
<<<<<<< HEAD
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Home = () => {
  const { user } = useUser();
=======
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";

const Home = () => {
  const { user } = useUser();
  const router = useRouter();

  console.log("User Data::", user);
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/");
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };
>>>>>>> 2dbc7286653a14d359d41cee8195c17531c47998

  return (
    <SafeAreaView className="flex h-full items-center justify-center bg-white p-2">
      <SignedIn>
        <View className="flex items-center justify-center h-full w-full">
          <Text>Hello, {user?.emailAddresses[0].emailAddress}</Text>
<<<<<<< HEAD
=======
          <CustomButton
            title="Sign Out"
            onPress={handleSignOut}
            className="w-10/12 mt-5 mx-2"
          />
>>>>>>> 2dbc7286653a14d359d41cee8195c17531c47998
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
