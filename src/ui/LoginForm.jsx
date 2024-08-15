import Button from "./Button";
import Form from "./Form";
import FormRow from "./FormRow";
import Input from "./Input";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="email" error="">
        <Input type="email" id="email" />
      </FormRow>
      <FormRow label="password" error="">
        <Input type="password" id="password" />
      </FormRow>
      <Button width="full">Login</Button>
    </Form>
  );
}

export default LoginForm;
