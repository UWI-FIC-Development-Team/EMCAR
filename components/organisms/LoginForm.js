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
      onSubmit={() => {}}
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
            {touched.email && errors.email && <Text>{errors.email}</Text>}
            <FormInput
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="Enter your password"
              label="Password"
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text>{errors.password}</Text>
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
  // Your style definitions here
});

export default LoginForm;
