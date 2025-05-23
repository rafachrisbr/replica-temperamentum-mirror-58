import { z } from 'zod';

export const temperamentFormSchema = z.object({
  answers: z.record(z.string(), z.string()),
});

export type TemperamentFormData = z.infer<typeof temperamentFormSchema>;

export const intelligenceFormSchema = z.object({
  answers: z.record(z.string(), z.number()),
});

export type IntelligenceFormData = z.infer<typeof intelligenceFormSchema>;