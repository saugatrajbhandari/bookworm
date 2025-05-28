import { Text, Pressable } from "react-native";
import React from "react";

type ButtonPropsType = {
  title: string;
  onClick: VoidFunction;
};

export default function Button(props: ButtonPropsType) {
  const { onClick, title } = props;

  return (
    <Pressable onPress={onClick} className="button">
      <Text className="button-text">{title}</Text>
    </Pressable>
  );
}
