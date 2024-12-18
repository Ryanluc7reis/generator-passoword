import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useState } from "react";

export function PasswordItem({ data, removePassword }) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  function handleVisiblePassword() {
    setIsVisiblePassword(!isVisiblePassword);
  }
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      {isVisiblePassword ? (
        <Text style={styles.text}>{data}</Text>
      ) : (
        <View style={styles.blurPassword} />
      )}
      <Pressable onPress={handleVisiblePassword}>
        <Image
          source={
            isVisiblePassword
              ? require("../../../assets/eye.png")
              : require("../../../assets/eye-off.png")
          }
          style={styles.image}
        />
      </Pressable>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: "14",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
  blurPassword: {
    width: "50%",
    height: 12,
    borderRadius: 8,
    backgroundColor: "#e9e9e9",
  },
});
