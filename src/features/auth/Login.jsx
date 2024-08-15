import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FormWrapper from "../../ui/FormWrapper";
import P from "../../ui/P";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormRow label="email" error="">
          <Input type="email" id="email" />
        </FormRow>
        <FormRow label="password" error="">
          <Input type="password" id="password" />
        </FormRow>
        <Button width="full">Login</Button>
        <P>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </P>
      </Form>
    </FormWrapper>
  );
}

export default Login;
