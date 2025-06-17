import { ScrollView, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import Container from "@/src/components/container";
import Rating from "@/src/components/ui/rating";

export default function AddBook() {
  return (
    <Container>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="border p-4 rounded-lg  border-neutral-200 bg-[#F2F8F1]">
          <View className="text-center items-center">
            <Text className="text-2xl font-bold text-primary-dark">
              Add Book Recommendation
            </Text>
            <Text className="text-primary-main mt-3">
              Share your favorite reads with others
            </Text>
          </View>

          <View className="mt-8 gap-y-4">
            <View>
              <Text className="label">Book Name</Text>
              <TextInput className="input" placeholder="Enter book name" />
            </View>

            <View>
              <Text className="label">Your Rating</Text>
              <Rating />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
