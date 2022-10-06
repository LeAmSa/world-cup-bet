import Router from "@koa/router";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = "Hello World";
});
