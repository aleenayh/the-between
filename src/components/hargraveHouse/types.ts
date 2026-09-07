import { z } from "zod";

export type ResidentContent = {
    title: string;
    intro: string;
    prompts: string[];
    onUnlock: Array<{ title: string; text: string[]; checks?: number; inlineChecks?:number, extraLines?: number }>;
}

const residentCustomFieldsSchema = z.object({
  title: z.string().catch(""),
  intro: z.string().catch(""),
  prompts: z.array(z.string().catch("")).catch(  []),
  onUnlock: z.array  (
    z.object({
      title: z.string().catch(""),
      text: z.array(z.string().catch("")).catch([]),
    }),
  ).optional().catch(undefined),
})

export type ResidentCustomFields = z.infer<typeof residentCustomFieldsSchema>;

export const residentSchema = z.object({
    key: z.string(),
    checks: z.array(z.number()).catch([]),
    extraLines: z.array(z.string()).optional().catch(undefined),
    unlockCheck: z.array(z.number()).catch([0]),
    customFields: residentCustomFieldsSchema.optional().catch(undefined),
})

export type Resident = z.infer<typeof residentSchema>;

export type RoomContent = {
    title: string;
    special?: string;
    intro: string;
    prompts: string[];
    onUnlock: { text: string[]; checks?: number; inlineChecks?:number, extraLines?: number };
}

export const roomSchema = z.object({
    key: z.string(),
    status: z.enum(["locked", "unlocked", "active", "available"]).catch("locked"),
    checks: z.array(z.number()).optional().catch([]),
    extraLines: z.array(z.string()).optional().catch(undefined),
})

export type Room = z.infer<typeof roomSchema>;