# Architecture Blueprint Generation Prompt

Use this prompt to generate detailed architecture blueprints for new features or systems in the Serverless Fastify TypeScript project.

## Prompt Template

```
Generate a detailed architecture blueprint for the following feature/system in our Serverless Fastify TypeScript project:

**Feature/System Name:**
[Name of the feature or system you're designing]

**Business Requirements:**
[What business problem does this solve? What are the functional requirements?]

**Technical Requirements:**
[What are the technical constraints and requirements?]
- Performance requirements (latency, throughput)
- Scalability needs
- Security requirements
- Integration points
- Data consistency needs

**Existing System Context:**
[How does this fit into our current architecture?]
- Current tech stack: Fastify, TypeScript, Prisma, MongoDB, AWS Lambda
- Existing API endpoints
- Current database schema
- Authentication/authorization approach

Please generate a blueprint that includes:

1. **Component Overview**
   - High-level component diagram
   - Responsibility breakdown
   - Data flow description

2. **API Design**
   - Endpoint specifications
   - Request/response schemas
   - Fastify route handlers structure
   - Validation rules

3. **Database Design**
   - Prisma schema changes
   - New models and relationships
   - Migration strategy
   - Indexing strategy

4. **Serverless Architecture**
   - Lambda function organization
   - Cold start considerations
   - Memory and timeout requirements
   - Environment variables needed

5. **Implementation Plan**
   - Development phases
   - Testing strategy
   - Deployment approach
   - Rollback plan

6. **Performance Considerations**
   - Expected load patterns
   - Optimization opportunities
   - Monitoring requirements
   - Caching strategy

7. **Security Analysis**
   - Authentication/authorization
   - Input validation
   - Data protection
   - Rate limiting

8. **Cost Analysis**
   - Lambda execution costs
   - Database storage/operations
   - API Gateway requests
   - Third-party services

Project context: Serverless application using Fastify, TypeScript, Prisma ORM, MongoDB, deployed on AWS Lambda with API Gateway.
```

## Example Usage

**Feature/System Name:** User Authentication System

**Business Requirements:** 
- Users need to register, login, and manage their accounts
- Support for email/password and social login
- Password reset functionality
- User profile management

**Technical Requirements:**
- JWT-based authentication
- <200ms authentication response time
- Support for 10,000+ concurrent users
- GDPR compliance for user data
- Integration with existing user endpoints

**Existing System Context:**
- Current API has basic user CRUD operations
- No authentication currently implemented
- Using Prisma with MongoDB
- Single Lambda function architecture

## Common Blueprint Scenarios

1. **Authentication & Authorization System**
2. **File Upload & Processing Service**
3. **Real-time Notification System**
4. **Analytics & Reporting Module**
5. **Third-party API Integration**
6. **Caching Layer Implementation**
7. **Multi-tenant Architecture**
8. **Event-driven Workflow System**
9. **Search & Filtering Service**
10. **Backup & Recovery System**

## Blueprint Output Format

The generated blueprint should include:

- **Executive Summary**: 2-3 sentences describing the feature
- **Architecture Diagrams**: ASCII or mermaid diagrams
- **Code Examples**: Fastify route handlers, Prisma models
- **Configuration**: Environment variables, serverless.yml changes
- **Testing Plan**: Unit, integration, and e2e test approaches
- **Documentation**: API documentation, README updates
- **Deployment Guide**: Step-by-step deployment instructions

## Quality Checklist

Ensure your blueprint addresses:
- [ ] Fastify-specific implementation details
- [ ] TypeScript type definitions
- [ ] Prisma schema design
- [ ] Serverless best practices
- [ ] Error handling strategy
- [ ] Logging and monitoring
- [ ] Security considerations
- [ ] Performance optimization
- [ ] Cost optimization
- [ ] Maintainability aspects