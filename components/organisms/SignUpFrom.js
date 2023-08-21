import React, { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../../GlobalStyles";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import FormInput from "../../components/atoms/FormInput";
import { AuthContext } from "../../context/AuthContextProvider";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpForm = ({ onSubmit, navigation }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <>
          <View style={styles.textFieldParent}>
            <FormInput
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              placeholder="Enter your full name"
              label="Full name"
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            <FormInput
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Enter your email"
              label="Email"
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <FormInput
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="Enter your password"
              label="Password"
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          <PrimaryButton
            title="Register your account"
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  // ... Other styles ...

  textFieldParent: {
    marginTop: 64,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  errorText: {
    color: "red", // Set the color to red for visibility
    marginTop: 5, // Add some space between the input field and error message
  },
});

export default SignUpForm;
