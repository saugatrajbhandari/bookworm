import { Redirect, Stack } from "expo-router";
import React from "react";

const isAuthenticated = true;

function Layout() {
  if (!isAuthenticated) {
    return <Redirect href="/(public)/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
