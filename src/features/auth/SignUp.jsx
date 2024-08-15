import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormWrapper from "../../ui/FormWrapper";
import P from "../../ui/P";
import { Link } from "react-router-dom";

function SignUp() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  // const { signUp, isLoading } = useSignUp();

  function onSubmit(data) {
    console.log(data);
    reset();
    // signUp(data, { onSettled: reset });
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full name" error={errors?.full_name?.message}>
          <Input
            type="text"
            id="full_name"
            // disabled={isLoading}
            {...register("full_name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            // disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Password (min 8 characters)"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            id="password"
            // disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a min of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Repeat password"
          error={errors?.passwordConfirm?.message}
        >
          <Input
            type="password"
            id="passwordConfirm"
            // disabled={isLoading}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>

        <FormRow>
          <Button>Create new user</Button>
        </FormRow>
        <P>
          Have an account? <Link to="login">Log in</Link>
        </P>
      </Form>
    </FormWrapper>
  );
}

export default SignUp;
