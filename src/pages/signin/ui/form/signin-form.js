import { useAppStore } from "@/app";

import styles from "./signin-form.module.css";

export const SignInForm = () => {
  const signIn = useAppStore((state) => state.signin);
  const tokens = useAppStore((state) => state.tokens);

  return (
    <>
      {tokens.status === "error" && (
        <span>{tokens.payload.message}</span>
      )}
      <form
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
