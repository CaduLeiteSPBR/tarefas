import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export const runtime = "edge";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  DB?: unknown;
};

const db = globalForPrisma.DB as unknown;

if (!db) {
  throw new Error("D1 database binding not found. Configure DB in Cloudflare Pages.");
}

const adapter = new PrismaD1(db as Parameters<typeof PrismaD1>[0]);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ["error", "warn"]
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
