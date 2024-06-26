import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { theme } from "../../../constants/Colors";
import Header from "../../../components/Header";
import MyTextInput from "../../../components/TextInput";
import axios from "axios";

const AddTestFields = () => {
  const params = useLocalSearchParams();
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("Not at all");
  const [option2, setOption2] = useState("Several Days");
  const [option3, setOption3] = useState("More than half the days");
  const [option4, setOption4] = useState("Nearly every day");

  const handleSubmit = () => {
    console.log("Resources: ", question, option1, option2, option3, option4);
    handleAddQuestion();
  };
  const handleAddQuestion = async () => {
    try {
      const response = await axios.post(
        process.env.API_HOST + "/test/addQuestion",
        {
          testId: params.id,
          question: question,
          option1: option1,
          option2: option2,
          option3: option3,
          option4: option4,
        }
      );
      if (response.status === 200) {
        console.log("SUCCESS");
        setQuestion("");
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        router.back();
      }
    } catch (error) {
      console.log("Error saving post: " + error);
      console.log(error.data.message);
    }
  };

  return (
    <View style={styles.body}>
      <Header title={params.name} />
      <View
        style={{
          backgroundColor: "white",
          height: hp(70),
          paddingTop: "8%",
        }}
      >
        {/* <MyTextInput
          placeholderText="Question"
          icon=""
          onChangeText={setQuestion}
          value={question}
        /> */}
        <View
          style={{
            paddingTop: hp(0.7),
            width: wp(80),
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <View style={styles.card}>
            <TextInput
              placeholder="Question"
              style={[styles.textInput, styles.bioInput]}
              keyboardType="default"
              multiline={true}
              numberOfLines={400}
              onChangeText={setQuestion}
              value={question}
            />
          </View>
        </View>
        <MyTextInput
          placeholderText="Option 1"
          icon=""
          onChangeText={setOption1}
          value={option1}
        />
        <MyTextInput
          placeholderText="Option 2"
          icon=""
          onChangeText={setOption2}
          value={option2}
        />
        <MyTextInput
          placeholderText="Option 3"
          icon=""
          onChangeText={setOption3}
          value={option3}
        />
        <MyTextInput
          placeholderText="Option 4"
          icon=""
          onChangeText={setOption4}
          value={option4}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View
            style={{
              width: wp(43),
              backgroundColor: theme.colors.button,
              height: hp(5.5),
              borderRadius: 20,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: hp(2.2),
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Add Question
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddTestFields;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.text,
    backgroundColor: theme.colors.background,
    marginBottom: hp(2),
  },
  icon: {
    marginRight: wp(4),
    marginLeft: wp(3),
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  bioInput: {
    height: 100,
  },
});
