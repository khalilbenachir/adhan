import { z } from "zod";

const configSchema = z.object({
  VITE_API_URL: z.string().default(""),
  VITE_OPEN_CAGE_API_TOKEN: z.string().default(""),
});

export const env = configSchema.parse(import.meta.env);
