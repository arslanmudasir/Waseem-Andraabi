import { PrismaClient } from '@prisma/client';
import { c as createRateLimiter } from '../../chunks/rateLimiter_CKO0uw3M.mjs';
export { renderers } from '../../renderers.mjs';

const prisma = new PrismaClient();
const rateLimiter = createRateLimiter({ maxRequests: 1, windowMs: 6e4 });
async function GET() {
  const reviews = await prisma.reviewPost.findMany();
  if (!reviews) {
    return new Response("Can't get reviews from DB.", { status: 500 });
  }
  return new Response(JSON.stringify(reviews), { status: 200 });
}
async function POST(context) {
  const validRequest = rateLimiter(context);
  if (!validRequest) {
    return new Response("Too many requests", { status: 429 });
  }
  const { id, name, rating, comment } = await context.request.json();
  try {
    await prisma.reviewPost.create({
      data: {
        id,
        name,
        rating,
        comment
      }
    });
    return new Response("Review Created.", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to create review.", { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
