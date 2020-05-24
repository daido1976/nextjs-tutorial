import { NextApiRequest, NextApiResponse } from "next";

// it’s not necessary for our blog app
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};
