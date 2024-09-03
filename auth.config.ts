import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    provider: "sqlite", // or "mysql", "postgresql"
    url: "./db.sqlite", // path to your database
  },
  emailAndPassword: {
    enabled: true,
  },
});
