import { Formik } from "formik";
import { View, Text, Pressable, StyleSheet } from "react-native";
import * as Yup from "yup";

import FormInput from "../atoms/FormInput";
import PrimaryButton from "../atoms/PrimaryButton";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ navigation, onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
              value={values.email}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Enter your email"
              label="Email"
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
            <Pressable
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("PasswordReset")}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </Pressable>
          </View>
          <PrimaryButton
            title="Login"
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 8,
    marginTop: -12,
    color: "red", // Set the color to red for visibility
  },
  forgotPassword: {
    marginBottom: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "#006a6a",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto_medium",
    textDecorationLine: "underline",
  },
  textFieldParent: {
    marginTop: 64,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
});

export default LoginForm;
