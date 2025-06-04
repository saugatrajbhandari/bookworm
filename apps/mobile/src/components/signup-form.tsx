import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { schema as loginSchema } from "./login-form";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import Button from "./ui/button";

const schema = loginSchema.extend({
  fullName: z.string().min(1, "FullName is required"),
});

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    console.log("signup");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className=" flex-1 justify-between"
    >
      <View className="gap-6">
        <View>
          <Text className="label">Full Name</Text>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onBlur, value, onChange } }) => (
              <TextInput
                placeholder="Enter your fullname"
                className="input"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.fullName && (
            <Text className="text-red-500 mt-1 text-sm">
              {errors.fullName.message}
            </Text>
          )}
        </View>

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
      </View>

      <View>
        <Button title="Signup" onClick={handleSubmit(onSubmit)} />

        <View className="flex-row justify-center items-center">
          <Text className="text-lg font-semibold text-neutral-400">
            Already have an account?{" "}
          </Text>
          <Link
            href={"/(public)/login"}
            className="font-semibold text-primary-main text-lg"
          >
            Login
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
