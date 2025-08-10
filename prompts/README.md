# Prompts Directory

This directory contains templates and prompts for generating architecture documentation for the Serverless Fastify TypeScript project.

## Files

### 📋 Templates
- **`adr-template.md`** - Standard template for creating Architecture Decision Records
- **`adr-generation-prompt.md`** - AI prompt template for generating ADRs
- **`blueprint-generation-prompt.md`** - AI prompt template for creating architecture blueprints

## Usage

### Creating an ADR
1. Copy `adr-template.md` to a new file named `ADR-[number]-[title].md`
2. Fill in all sections with your decision details
3. Update the status as the decision progresses

### Using AI Prompts
1. Use the prompt templates with your preferred AI assistant (ChatGPT, Claude, etc.)
2. Replace bracketed placeholders with your specific requirements
3. Review and refine the generated output

## ADR Numbering Convention

ADRs should be numbered sequentially:
- `ADR-001-fastify-framework-choice.md`
- `ADR-002-database-orm-selection.md`
- `ADR-003-authentication-strategy.md`

## Quality Guidelines

### For ADRs:
- Be concise but complete
- Include measurable decision criteria
- Document alternatives considered
- Update status as decisions evolve

### For Architecture Blueprints:
- Include diagrams where helpful
- Specify implementation details
- Consider serverless constraints
- Address security and performance

## Integration with Development

- Store completed ADRs in the `/docs/adr/` directory
- Reference ADRs in PR descriptions
- Link to ADRs from code comments for complex decisions
- Review ADRs during architecture discussions

## Best Practices

1. **Write ADRs when decisions are made**, not after
2. **Keep blueprints updated** as implementations evolve
3. **Use consistent formatting** across all documents
4. **Link related decisions** and blueprints together
5. **Review periodically** to deprecate outdated decisions

## Examples

See the project's main documentation for examples of completed ADRs and blueprints that demonstrate best practices for this Fastify-based serverless architecture.