import { Redirect, Stack } from "expo-router";
import React from "react";

const isAuthenticated = false;

function Layout() {
  if (!isAuthenticated) {
    return <Redirect href="/(public)/login" />;
  }

  return <Stack />;
}

export default Layout;
