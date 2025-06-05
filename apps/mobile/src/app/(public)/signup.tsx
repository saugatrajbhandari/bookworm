import { View, Text } from "react-native";
import React from "react";
import Container from "@/src/components/container";
import SignupForm from "@/src/components/signup-form";

export default function Signup() {
  return (
    <Container>
      <View className=" mt-20 mb-16  border-2 p-6 rounded-2xl bg-[##F2F8F1] border-neutral-200  gap-6 flex-1">
        <View className="mx-auto">
          <Text className="tracking-wider text-primary-main text-4xl font-semibold">
            BookWorm 🐛
          </Text>

          <Text className="mt-2 text-neutral-500 text-lg">
            Share your favorite reads
          </Text>
        </View>

        <SignupForm />
      </View>
    </Container>
  );
}
