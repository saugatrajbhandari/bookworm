import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import Button from "./ui/button";
import { Link } from "expo-router";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  email: z.string().min(1, "Email is required").email("Email must be valid"),
  password: z.string().min(8, "Password length must be minimum 8"),
});

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="border-2 p-6 rounded-2xl bg-neutral-50 border-neutral-200  gap-6">
        <View>
          <Text className="label">Email</Text>
          <Controller
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="input"
                placeholder="Enter your email"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text className="text-red-500 mt-1 text-sm">
              {errors.email.message}
            </Text>
          )}
        </View>
        <View>
          <Text className="label">Password</Text>

          <Controller
            control={control}
            name="password"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                className="input"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                placeholder="Enter your email"
              />
            )}
          />
          {errors.password && (
            <Text className="text-red-500 mt-1 text-sm">
              {errors.password.message}
            </Text>
          )}
        </View>

        <Button title="Login" onClick={handleSubmit(onSubmit)} />

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
    </KeyboardAvoidingView>
  );
}
