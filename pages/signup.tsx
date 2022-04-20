import AuthForm from "../components/authForm";

const SignUp = () => {
  return <AuthForm mode="signup" />;
};

// Prop to read it in the _app file
SignUp.authPage = true;

export default SignUp;
