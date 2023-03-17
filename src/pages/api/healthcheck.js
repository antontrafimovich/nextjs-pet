import { request } from "node:http";

const isTokenValid = async (headers) => {
  return new Promise((resolve, reject) => {
    const r = request(
      "http://localhost:5000/user",
      { method: "GET", headers },
      async (response) => {
        setTimeout(() => {
          if (response?.statusCode === 401) {
            return resolve(false);
          }

          return resolve(true);
        }, 5000);
      }
    );

    r.end();
  });
};

export default async function handler(req, res) {
  const isValid = await isTokenValid(req.headers);

  if (isValid) {
    res.status(200).json({ success: true });
  } else {
    res
      .status(400)
      .json({ success: false, payload: { message: "The token is not valid" } });
  }
}
