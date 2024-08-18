import StoreProvider from "@/src/store/StoreProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <StoreProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="(tabs)" /> */}
        <Stack.Screen name="index" />
      </Stack>
    </StoreProvider>
  );
}
