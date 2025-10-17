ALTER TABLE "users" RENAME COLUMN "display_username" TO "displayUsername";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "isAnonymous" boolean;