import { Image, Text } from "react-native";
import React from "react";
import Container from "@/src/components/container";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "@/src/components/login-form";
// import bookImg from "@/src/assets/images/book.j";

export default function Login() {
  return (
    <Container>
      <Image
        source={require("@/src/assets/images/book.png")}
        style={{ width: "100%", flex: 1, resizeMode: "contain" }}
      />
      <LoginForm />
    </Container>
  );
}
