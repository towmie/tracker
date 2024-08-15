import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FormWrapper from "../../ui/FormWrapper";
import P from "../../ui/P";
import { useState } from "react";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";

function Login() {
  const [email, setEmail] = useState("andrei@test.com");
  const [password, setPassword] = useState("12345678");

  const { login, isLoggingig } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  };

  if (isLoggingig) return <Spinner />;

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormRow label="email" error="">
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </FormRow>
        <FormRow label="password" error="">
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(value) => setPassword(value)}
          />
        </FormRow>
        <Button width="full" disabled={isLoggingig}>
          Login
        </Button>
        <P>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </P>
      </Form>
    </FormWrapper>
  );
}

export default Login;
