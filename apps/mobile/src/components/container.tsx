import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1 p-6 bg-primary-light">
      {children}
    </SafeAreaView>
  );
}
