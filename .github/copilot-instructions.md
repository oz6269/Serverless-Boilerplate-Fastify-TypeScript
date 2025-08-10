## Copilot instructions for Serverless-Boilerplate-Fastify-TypeScript

Purpose: Make AI agents immediately productive in this repo by outlining the architecture, workflows, and project-specific conventions with concrete references.

### Big picture architecture
- Pattern: Serverless monolith on AWS Lambda behind API Gateway HTTP API.
- Entry points:
  - Fastify app: `src/app.ts`
  - Lambda adapter: `src/handler.ts` (wraps Fastify via `serverless-http`)
- Infra/config: `serverless.yml` (provider, function `app`, plugins, packaging, offline config)
- Data: Prisma with MongoDB
  - Schema: `prisma/schema.prisma`
  - Client init: `new PrismaClient()` in `src/app.ts`
- Flow: API Gateway -> Lambda handler -> serverless-http adapter -> Fastify routes -> Prisma -> MongoDB.

### Key conventions and patterns
- Fastify 5 is the web framework (not Express). The Lambda bridge uses `serverless-http(app as any)`; types are Express-centric, hence the cast.
- Single catch-all function handling all HTTP routes:
  - `serverless.yml`: `/{proxy+}` with method `*` mapped to `functions.app`.
- Minimal routes in `src/app.ts` today:
  - `GET /` returns `{ msg: 'Hello World' }`.
  - `GET /prisma` writes a user via Prisma and returns a message.
- Not-found behavior: `app.setNotFoundHandler` returns `404 { error: 'NOT FOUND' }`.
- Security: `@fastify/helmet` registered in `app.ts`.
- Tests are integration-first using Supertest against the Fastify server instance, not the Lambda adapter.

### Developer workflows (commands)
- Local dev (hot-reload, offline API Gateway on :4000):
  - `yarn dev` (runs DB + server)
  - Endpoint: http://localhost:4000
- Database
  - Dev in-memory MongoDB via `mongodb-memory-server` with single-node replica set: `yarn dev` starts it (see `scripts/database.ts`).
  - Push Prisma schema: `yarn db:push` or internally via dev script.
  - Prod DB schema push (reads `.env.production`): `yarn deploy:db`.
- Build/lint/typecheck/tests
  - Typecheck: `yarn check-types`
  - Lint: `yarn lint` (Airbnb + plugins)
  - Format: `yarn format`
  - Tests: `yarn test` (Jest + SWC); example tests in `src/app.test.ts`.
  - Tail logs (deployed Lambda): `yarn tail-log`.
- Deploy
  - Production deploy: `yarn deploy-prod` (runs `deploy:db` then `deploy:app`).
  - Remove prod stack: `yarn remove-prod`.

### Project-specific implementation notes
- Serverless + esbuild
  - Bundling via `serverless-esbuild`; Node 20 target; sourcemaps linked.
  - Prisma engine binaries included per stage via `package.patterns` in `serverless.yml`:
    - Offline: `node_modules/.prisma/client/*.node`
    - Staging/Prod: `libquery_engine-rhel*` binaries
- Environment & config
  - Stage defaults to `offline` in dev; CORS enabled for HTTP API.
  - `serverless-dotenv-plugin` loads stage-specific env (e.g., `.env.production`).
  - Prisma reads `DATABASE_URL`.
- Prisma usage
  - MongoDB provider; basic `User` model with unique `email`.
  - Client lifecycle: single `new PrismaClient()` at module scope is fine for Lambda cold starts; reuse within execution context.
- Testing pattern
  - Use Supertest with `app.server`; ensure `await app.ready()` before tests and `await app.close()` after.
  - Example: see `src/app.test.ts` for 200 and 404 checks.

### How to extend correctly (examples)
- Add a route with validation (recommended pattern):
  - Create schema object and attach to route via Fastify `schema` option.
  - Keep handler thin; delegate DB calls to small service functions or use Prisma directly for simple cases.
- Example skeleton:
```ts
// in src/app.ts
import type { FastifySchema } from 'fastify';

const createUserSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['email'],
    properties: { email: { type: 'string', format: 'email' } },
  },
  response: { 201: { type: 'object', properties: { id: { type: 'string' }, email: { type: 'string' } } } },
};

app.post('/users', { schema: createUserSchema }, async (req) => {
  const { email } = req.body as { email: string };
  const user = await prisma.user.create({ data: { email } });
  return { id: user.id, email: user.email };
});
```

### Pointers to key files
- `src/app.ts` — Fastify app, routes, plugins, not-found handler
- `src/handler.ts` — Lambda adapter via `serverless-http`
- `serverless.yml` — Serverless config, HTTP API mapping, packaging patterns
- `prisma/schema.prisma` — Data model
- `scripts/database.ts` — Dev in-memory MongoDB; sets `DATABASE_URL` and runs `prisma db push`
- `src/app.test.ts` — Supertest-based integration tests
- `Project_Architecture_Blueprint.md` — Detailed architecture overview and diagrams

### Gotchas specific to this repo
- Fastify vs Express: Do not import or configure Express middleware. Use Fastify equivalents and plugins.
- Prisma binaries: If adding CI/CD or new stages, ensure the correct Prisma engine binaries are packaged (see `custom.prismaEngine`).
- Handler typing: `serverless-http` typings are Express-focused; keep `app as any` cast in `src/handler.ts` unless updating types.
- Dev DB: The local in-memory MongoDB runs as a replica set (for majority writes). Ensure tests that depend on DB either mock Prisma or run with the dev DB.

### Commit, release, and PR hygiene
- Conventional commits enforced by Commitlint; use `yarn commit` (Commitizen) for prompts.
- Semantic Release configured on `main`; avoid manual version bumps.
- Keep PRs small and reference the specific files above for architecture-aligned changes.

If any part of this guidance is unclear or missing (e.g., additional routes, auth, or CI setup), reply with the gap and I’ll refine these instructions.
