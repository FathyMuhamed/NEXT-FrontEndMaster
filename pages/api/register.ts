import { createJWT, hashPassword } from "@/lib/auth";
import { db } from "@/lib/db";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        error: "Missing email or password or first name or last name",
      });
    }

    const user = await db.user.create({
      data: {
        email,
        password: await hashPassword(password),
        firstName,
        lastName,
      },
    });

    const jwt: string = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME as string, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    return res.status(201).json({ message: "Success" });
  }

  return res.status(402).json({ error: "Method not allowed" });
}
