import { z } from "zod";

const configSchema = z.object({
  VITE_API_URL: z.string().default(""),
});

export const env = configSchema.parse(import.meta.env);
