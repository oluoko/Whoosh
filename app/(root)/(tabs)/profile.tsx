import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useRouter } from "expo-router";
import { SignedIn, useClerk } from "@clerk/clerk-expo";
import CustomButton from "@/components/CustomButton";

const Profile = () => {
  const router = useRouter();

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
  return (
    <SafeAreaView className="flex h-full items-center justify-center bg-white p-2">
      <Text>Profile</Text>
      <SignedIn>
        <CustomButton
          title="Sign Out"
          onPress={handleSignOut}
          className="w-10/12 mt-5 mx-2"
        />
      </SignedIn>
    </SafeAreaView>
  );
};

export default Profile;
