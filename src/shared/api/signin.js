export const signIn = async (login, password) => {
  const result = await fetch("http://localhost:3000/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
  });

  return result;
};
