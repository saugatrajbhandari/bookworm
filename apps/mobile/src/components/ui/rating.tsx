import { View, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <View className="flex-row justify-between input">
      {Array.from({ length: 5 }).map((_, index) => (
        <Pressable
          key={index}
          onPress={() => {
            setRating((prev) => {
              if (prev === index + 1) {
                return 0;
              }
              return index + 1;
            });
          }}
        >
          <FontAwesome
            name={rating > index ? "star" : "star-o"}
            color={rating > index ? "#F8B702" : "#335F30"}
            size={24}
          />
        </Pressable>
      ))}
    </View>
  );
}
