import { getBodyFromResponse } from "@/shared";
import { request } from "node:http";

export default function handler(req, res) {
  const signUpRequest = request(
    "http://localhost:5000/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    async (response) => {
      let body;

      try {
        body = await getBodyFromResponse(response);
      } catch (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(body.response ?? body);
    }
  ).on("error", (err) => {
    res.status(500).json(err);
  });

  signUpRequest.end(JSON.stringify(req.body));
}
