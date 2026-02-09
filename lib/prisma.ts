import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'

export const runtime = 'edge'

interface Env {
  DB: D1Database
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const db = (process.env as unknown as Env).DB

const adapter = new PrismaD1(db)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_VERSION !== 'production') globalForPrisma.prisma = prisma
