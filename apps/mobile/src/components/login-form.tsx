import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React from "react";
import Button from "./ui/button";
import { Link } from "expo-router";

export default function LoginForm() {
  return (
    <View className="border-2 p-6 rounded-2xl bg-neutral-50 border-neutral-200  gap-6">
      <View>
        <Text className="label">Email</Text>
        <TextInput className="input" placeholder="Enter your email" />
      </View>
      <View>
        <Text className="label">Password</Text>
        <TextInput
          className="input"
          secureTextEntry={true}
          placeholder="Enter your email"
        />
      </View>

      <Button title="Login" onClick={() => Alert.alert("hello")} />

      <View className="flex-row justify-center items-center">
        <Text className="text-lg font-semibold text-neutral-400">
          Don&apos;t have an account?{" "}
        </Text>
        <Link
          href={"/(public)/signup"}
          className="font-semibold text-primary-main text-lg"
        >
          Sign Up
        </Link>
      </View>
    </View>
  );
}
