import { request } from "node:http";

const getBodyFromResponse = (res) => {
  return new Promise((resolve, reject) => {
    let result = "";

    res
      .on("data", (chunk) => {
        result += chunk;
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        let resultJSON;

        try {
          resultJSON = JSON.parse(result);
        } catch (err) {
          reject(new Error("Error during parsing response body has occured."));
        }

        resolve(resultJSON);
      });
  });
};

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
