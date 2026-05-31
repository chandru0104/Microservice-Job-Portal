# 🚀 Enterprise-Grade AI-Powered Job Portal Built with Event-Driven Microservices Architecture

## 📌 Overview

Modern job portals often face challenges related to scalability, maintainability, service dependency, and intelligent candidate evaluation as user traffic and business requirements grow. Traditional monolithic applications become difficult to scale, maintain, and deploy, while providing limited personalization for candidates and recruiters.
This project addresses these challenges by implementing a fully decoupled, event-driven microservices architecture combined with AI-powered resume analysis and career guidance capabilities.
The platform leverages Apache Kafka for asynchronous communication, Redis for high-performance caching, and Google Gemini API for intelligent resume evaluation, skill-gap analysis, and personalized career recommendations.
The system is designed using distributed system principles and modern software architecture patterns commonly used in large-scale recruitment platforms.

---

## 🎯 Key Problems Solved

✅ Eliminates tight coupling between services using Apache Kafka event streaming
✅ Improves scalability through independently deployable microservices
✅ Reduces database load and improves response time with Redis caching
✅ Enables asynchronous communication between services
✅ Provides secure authentication and authorization using JWT
✅ Implements OTP-based password recovery workflow
✅ Supports role-based access control for Candidates and Recruiters
✅ Provides AI-powered resume analysis and ATS evaluation
✅ Detects skill gaps and recommends learning paths
✅ Generates personalized career guidance using LLMs
✅ Creates a production-ready foundation for future scaling and feature expansion

---

## 🏗️ System Architecture
The application is divided into independently deployable services.

### 🔐 Authentication Service

Responsible for:
* User Registration
* User Login
* JWT Authentication
* OTP Verification
* Forgot Password
* Authorization

### 👤 User Service

Responsible for:
* Candidate Profile Management
* Resume Management
* User Information Management
* Application History

### 💼 Job Service

Responsible for:
* Job Posting
* Job Search
* Job Applications
* Recruiter Operations
* Job Management

### 💳 Payment Service

Responsible for:
* Premium Plans
* Subscription Management
* Featured Job Listings

### 🛠️ Utility Service

Responsible for:
* Email Notifications & OTP Delivery
* Cloudinary File Storage
* Resume Upload Management
* Media Processing
* Third-Party API Integrations
* Shared Utility Operations Across Services

Each service owns its own business logic and can scale independently without affecting other services.

---

## ⚡ Event-Driven Communication with Apache Kafka
Instead of tightly coupling services through direct API communication, Apache Kafka acts as the central event streaming platform.

### Recruiter Workflow
1. Recruiter registers and creates a company profile.
2. Recruiter publishes a job posting.
3. Job Service stores job details.
4. Kafka publishes a `JOB_CREATED` event.
5. Other services consume the event asynchronously.

### Candidate Workflow
1. Candidate creates a profile.
2. Candidate uploads a resume.
3. Candidate searches available jobs.
4. Candidate applies for a job.
5. Job Service stores the application.
6. Kafka publishes an `APPLICATION_SUBMITTED` event.
7. User Service updates application history.
8. Recruiters review applications.

### Password Recovery Workflow
1. User enters registered email.
2. Authentication Service generates OTP.
3. OTP is stored securely in Redis.
4. Kafka publishes a password reset event.
5. Email service sends OTP.
6. User verifies OTP and resets password.

---

## 🤖 AI-Powered Resume Analysis & Career Guidance
The platform integrates Google Gemini API to provide intelligent career assistance and resume evaluation.

### Resume Analysis Features
* AI-powered resume parsing
* Resume quality assessment
* ATS compatibility evaluation
* Missing keyword detection
* Resume improvement suggestions
* Professional summary optimization

### Skill Gap Analysis
* Compares candidate skills against job requirements
* Identifies missing technical skills
* Identifies missing soft skills
* Generates personalized upskilling recommendations
* Highlights candidate strengths and weaknesses

### AI Career Guidance
* Personalized career path recommendations
* Role suitability analysis
* Learning roadmap generation
* Certification recommendations
* Industry trend insights

### Smart Job Matching
* AI-powered candidate-job matching
* Resume-job compatibility scoring
* Personalized job recommendations
* Skill relevance ranking

---

## 🚀 High Performance with Redis
Redis is used as a high-speed caching layer to improve performance and reduce database load.

### Cached Data
* Frequently accessed job listings
* User session data
* OTP verification data
* Search results
* Profile information
* AI-generated recommendations

Benefits:
* Reduced database load
* Faster API response times
* Improved scalability
* Better user experience under high traffic

---

## 🧠 Artificial Intelligence Workflow
1. Candidate uploads a resume.
2. Resume is parsed and structured.
3. Gemini API analyzes skills, education, experience, and projects.
4. ATS compatibility score is generated.
5. Skill gaps are identified.
6. Career recommendations are generated.
7. Personalized job matches are suggested.
8. Learning paths are recommended for career growth.

---

## 🛠️ Technology Stack

### Frontend
* Next.js 16
* React 19
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Axios

### Backend
* Node.js
* Express.js
* TypeScript

### Database
* Neon PostgreSQL

### Event Streaming
* Apache Kafka
* KafkaJS

### Caching
* Redis

### Cloud Storage & Media Management
* Cloudinary
* Resume Storage
* Profile Image Management
* Document Upload & Delivery
* Secure File Hosting

### AI & Machine Learning
* Google Gemini API
* Resume Analysis Engine
* Skill Gap Analysis
* Career Recommendation System

### Security
* JWT Authentication
* bcrypt Password Hashing
* Role-Based Access Control (RBAC)

### DevOps & Tools
* Docker
* Git
* GitHub

---

## 🌟 Advanced Features
* AI Resume Analysis
* ATS Resume Evaluation
* AI Career Guidance
* Skill Gap Detection
* Personalized Learning Recommendations
* AI Job Recommendation Engine
* Event-Driven Microservices
* Apache Kafka Messaging
* Redis Caching
* JWT Authentication
* OTP-Based Password Recovery
* Role-Based Access Control
* Dockerized Deployment
* Scalable Distributed Architecture

---

## 🎯 What This Project Demonstrates
* Distributed System Design
* Event-Driven Architecture
* Microservices Development
* Apache Kafka Integration
* Redis Caching Strategies
* Secure Authentication & Authorization
* Role-Based Access Control
* AI Integration using Google Gemini API
* Resume Intelligence Systems
* Skill Gap Analysis using LLMs
* Career Recommendation Engines
* Production-Ready Backend Engineering
* Scalable Software Architecture
* Modern Full-Stack Development Practices

---

## 🔥 Why This Project Stands Out

Unlike traditional CRUD-based job portals, this project focuses on solving real-world scalability, maintainability, and intelligent recruitment challenges using modern software architecture patterns.

It demonstrates practical experience with:

* Microservices Architecture
* Event-Driven Systems
* Distributed Communication
* Apache Kafka
* Redis Caching
* JWT Security
* AI Resume Analysis
* ATS Optimization
* Skill Gap Detection
* Career Guidance Systems
* Production-Oriented Backend Engineering

The architecture is designed to be extensible, enabling future integration of services such as notifications, analytics, recommendation engines, interview assistance, and real-time communication without major architectural changes.
