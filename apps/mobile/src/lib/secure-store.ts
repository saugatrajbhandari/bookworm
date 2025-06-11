import * as SecureStore from "expo-secure-store";

export const USER_KEY = "USER";
export const TOKEN = "TOKEN";

type KeyType = typeof USER_KEY | typeof TOKEN;

export async function saveUser(key: KeyType, value: any) {
  await SecureStore.setItemAsync(key, value);
}

export async function getUser(key: KeyType) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}
