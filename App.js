import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Foundation } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.textWrapper}>
              <Text style={styles.hiText}>Car Rescue & Repair</Text>
              <Text style={styles.userText}>Login</Text>
              <Text style={styles.userText}>Doo</Text>
            </View>

            <View style={styles.form}>
              <Foundation
                name="lock"
                size={24}
                color="black"
                style={styles.iconLock}
              />
              <TextInput
                secureTextEntry={true}
                keyboardType="numeric"
                style={styles.inputPassword}
                placeholder="Password"
                placeholderTextColor="#929292"
              />
              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonLoginText}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.action}>
              <TouchableOpacity>
                <Text style={styles.buttonActionText}>Forgot password</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.buttonLogoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a5acd",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    justifyContent: "flex-end",
    marginTop: 70,
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 30,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    marginTop: 30,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 18,
    left: 18,
    zIndex: 10,
  },
  inputPassword: {
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    marginTop: 15,
    height: 50,
    backgroundColor: "#663399",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLoginText: {
    ...TEXT,
  },
  buttonActionText: {
    color: "#fff",
  },
  buttonLogoutText: {
    color: "#fff",
  },
  action: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
