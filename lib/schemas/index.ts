import { z } from 'zod';
export const stickerBatchSchema = z.object({ albumId: z.string().uuid(), numbers: z.string(), status: z.enum(['needed','duplicate']) });
export const profileSchema = z.object({ full_name: z.string().min(2), whatsapp: z.string().regex(/^3\d{9}$/), city: z.string().min(2), neighborhood: z.string().min(2), preferred_exchange_method: z.enum(['in_person','shipping','both']), accepted_terms: z.literal(true) });
