import { useSignInPageStore } from "../../model";
import styles from "./signin-form.module.css";

export const SignInForm = () => {
  const signIn = useSignInPageStore((state) => state.signin);
  const tokens = useSignInPageStore((state) => state.tokens);

  return (
    <>
      {tokens.status === "error" && <span>{tokens.payload.message}</span>}
      <form
        action="/api/signin"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();

          signIn(e.target.login.value, e.target.password.value);
        }}
        className={styles.signInForm}
      >
        <label for="login">Login:</label>
        <input type="text" id="login" name="login" />
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
