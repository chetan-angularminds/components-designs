import z from "zod";

export const createRoomSchema = z.object({
  name: z.string().min(1, "Room name cannot be empty.").max(100),
  description: z.string().max(255).optional(),
  isPrivate: z.boolean().optional(),
  maxMembers: z.number().int().positive().optional().nullable(),
  createdBy: z.string().min(1, "Creator username is required."),
});