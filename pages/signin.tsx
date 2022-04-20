import AuthForm from "../components/authForm";

const SignIn = () => {
  return <AuthForm mode="signin" />;
};

// Prop to read it in the _app file
SignIn.authPage = true;

export default SignIn;
