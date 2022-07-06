// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let urlRequest = "";

  if (req.method === "GET") {
    if (req.query.lat && req.query.long) {
      urlRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${40.3396822}&lon=${-8.4254256}&appid=${
        process.env.OWAK
      }&units=metric`;
    } else if (req.query.city) {
      urlRequest = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city},${req.query.country}&appid=${process.env.OWAK}&units=metric`;
    }

    try {
      const response = await axios.get(urlRequest);

      if (response.status === 200) {
        res.status(200).json(response.data);
      }
    } catch (error: any) {
      throw new Error("message error: ", error);
    }
  }
}
