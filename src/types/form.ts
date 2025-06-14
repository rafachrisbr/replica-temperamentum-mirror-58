
import { z } from 'zod';

export const intelligenceFormSchema = z.object({
  answers: z.record(z.string(), z.number()),
});

export type IntelligenceFormData = z.infer<typeof intelligenceFormSchema>;

export const temperamentFormSchema = z.object({
  stress: z.string().min(1, "Please select an option"),
  energy: z.string().min(1, "Please select an option"),
  social: z.string().min(1, "Please select an option"),
});

export type TemperamentFormData = z.infer<typeof temperamentFormSchema>;

export const simpleTemperamentFormSchema = z.object({
  stressHandling: z.enum(['calm', 'anxious', 'aggressive']),
  energyLevel: z.enum(['high', 'medium', 'low']),
  socialPreference: z.enum(['extrovert', 'introvert', 'ambivert'])
});

export type SimpleTemperamentFormData = z.infer<typeof simpleTemperamentFormSchema>;
