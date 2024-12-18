import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import Slider from "@react-native-community/slider";
import ModalPassword from "../../components/modal/index";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  function generatePassword() {
    let password = "";
    let n = charset.length;

    for (let i = 0; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          maximumTrackTintColor="#ff0000"
          manimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          minimumValue={6}
          maximumValue={20}
          value={size}
          onValueChange={(value) => setSize(Math.round(value))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}> Gerar senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginBottom: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
