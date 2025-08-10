# ADR Generation Prompt Template

Use this prompt to generate Architecture Decision Records (ADRs) for the Serverless Fastify TypeScript project.

## Prompt Template

```
Generate an Architecture Decision Record (ADR) for the following decision in our Serverless Fastify TypeScript project:

**Context:**
[Describe the situation requiring a decision. What forces are at play? What are the current circumstances?]

**Decision:**
[What decision are we making? Be specific and clear.]

**Alternatives Considered:**
[List 2-3 alternative approaches that were considered]

**Decision Criteria:**
[What factors influenced this decision? Consider:]
- Performance implications
- Serverless compatibility
- TypeScript integration
- Maintenance overhead
- Cost considerations
- Team expertise
- Community support

**Expected Consequences:**
[What are the expected positive and negative consequences?]

Please format as a standard ADR with:
- ADR number and title
- Status (Proposed/Accepted/Deprecated)
- Date
- Context section
- Decision section
- Consequences section
- References (if applicable)

Project context: This is a serverless application using Fastify (not Express), TypeScript, Prisma ORM, and MongoDB, deployed on AWS Lambda.
```

## Example Usage

Replace the bracketed sections with your specific decision details:

**Context:** We need to choose between Fastify and Express for our serverless API framework.

**Decision:** Use Fastify as the web framework instead of Express.

**Alternatives Considered:**
1. Express.js - Traditional, widely adopted
2. Koa.js - Lightweight, async-first
3. Fastify - Performance-focused, schema-based

**Decision Criteria:**
- Cold start performance in Lambda
- JSON serialization speed
- Built-in TypeScript support
- Request validation capabilities
- Memory efficiency

**Expected Consequences:**
- Positive: 2x better performance, built-in validation
- Negative: Smaller community, different plugin ecosystem

## Common ADR Topics for This Project

1. **Framework Choice**: Fastify vs Express vs alternatives
2. **Database ORM**: Prisma vs Mongoose vs native driver
3. **Validation Strategy**: JSON Schema vs class-validator
4. **Testing Approach**: Jest vs Vitest, unit vs integration
5. **Deployment Strategy**: Single vs multi-function architecture
6. **Authentication**: JWT vs session-based vs OAuth
7. **Error Handling**: Centralized vs distributed error handling
8. **Logging Strategy**: CloudWatch vs structured logging
9. **Environment Configuration**: .env vs AWS Parameter Store
10. **CI/CD Pipeline**: GitHub Actions vs AWS CodePipeline