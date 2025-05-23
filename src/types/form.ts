import { z } from 'zod';

export const simpleTemperamentFormSchema = z.object({
  stressHandling: z.enum(['calm', 'anxious', 'aggressive']),
  energyLevel: z.enum(['high', 'medium', 'low']),
  socialPreference: z.enum(['extrovert', 'introvert', 'ambivert'])
});

export type SimpleTemperamentFormData = z.infer<typeof simpleTemperamentFormSchema>;