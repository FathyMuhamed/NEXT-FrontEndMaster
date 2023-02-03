import bcrypt from "bcrypt";
import { jwtVerify, SignJWT } from "jose";
import { db } from "./db";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  plainTextPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const createJWT = (user: any) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({ payload: { id: user.id, email: user.email } })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
};

export const validateJWT = async (jwt: any) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.payload as any;
};

export const getUserNameFromCookies = async (cookies: any) => {
  const jwt = cookies.get(process.env.COOKIE_NAME);
  if (!jwt) return null;

  const { id } = await validateJWT(jwt.value);

  const user = await db.user.findUnique({
    where: { id: id as string },
  });

  return user;
};
