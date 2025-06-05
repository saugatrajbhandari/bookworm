import { ScrollView, Text, View } from "react-native";
import React from "react";
import Container from "@/src/components/container";
import BookCard from "@/src/components/book-card";

export default function Home() {
  return (
    <Container>
      <View className="items-center mb-4">
        <Text className="tracking-wider text-primary-main text-4xl font-semibold">
          BookWorm 🐛
        </Text>

        <Text className="mt-2 text-neutral-500 text-lg">
          Discover great reads from the community👇
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className=" gap-y-4 pb-6">
          <BookCard />
          <BookCard />
          <BookCard />
        </View>
      </ScrollView>
    </Container>
  );
}
