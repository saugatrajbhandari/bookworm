import { View, Text, Image } from "react-native";
import React from "react";

const BookCard = () => {
  return (
    <View className="border-2 p-6 rounded-2xl bg-neutral-50 flex-1 border-neutral-200 gap-y-4">
      <Text className="text-primary-dark font-semibold text-lg">John Doe</Text>

      <Image
        className="mt-2 max-w-full rounded-xl aspect-square"
        source={require("@/src/assets/images/soulbook.png")}
        resizeMode="cover"
      />

      <Text className="text-primary-dark font-bold text-xl ">
        The Hunger Games
      </Text>

      <Text className="text-primary-dark text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      <Text className="text-primary-dark">3/9/2025</Text>
    </View>
  );
};

export default BookCard;
