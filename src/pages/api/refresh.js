import { getBodyFromResponse } from "@/shared";

export default async function refresh(req, res) {
  const body = await getBodyFromResponse(req);

  const r = request(
    "http://localhost:5000/auth/refresh",
    { method: "POST", headers: req.headers },
    async (response) => {
      const result = await getBodyFromResponse(response);

      res.status(response.statusCode).json(result);
    }
  );

  r.end(JSON.stringify(body));
}
