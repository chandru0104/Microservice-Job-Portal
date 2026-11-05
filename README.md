Analyzed apollo-pharmacy-microservices-project.md:L101-250
Analyzed apollo-pharmacy-microservices-project.md:L251-360
Analyzed apollo-pharmacy-microservices-project.md:L361-450
Ran list ai-service src
Analyzed aiService.ts:L1-60
Analyzed aiService.ts:L61-140
Analyzed aiService.ts:L141-216

# 🚀 Enterprise-Grade AI-Powered Healthcare & E-Pharmacy Platform Built with Event-Driven Microservices Architecture

## 📌 Overview
Modern digital healthcare platforms face immense challenges regarding scalability, service dependency, data privacy, and intelligent clinical triage as user traffic and regulatory demands grow. Traditional monolithic healthcare applications suffer from tight coupling, single points of failure, slow deployments, and an inability to provide real-time diagnostic and prescription intelligence. 

This project solves these challenges by implementing an enterprise-grade, event-driven microservices architecture within an **Nx Monorepo**, combined with **AI-powered symptom triage, medical report analysis, and automated medicine scanning**. The platform leverages **Apache Kafka** for asynchronous event streaming, **Redis** for sub-millisecond caching, and **LLMs (Google Gemini & OpenAI) alongside Tesseract OCR** to automate healthcare workflows. Designed around distributed system principles, it offers medicine e-commerce, doctor appointments, diagnostic lab tests, and AI triage in a unified, resilient ecosystem.

---

## 🎯 Key Problems Solved
* ✅ **Eliminates tight service coupling** using Apache Kafka distributed event streaming
* ✅ **Guarantees high fault tolerance & scalability** through independently deployable microservices
* ✅ **Optimizes database performance & latency** using Redis caching for high-traffic endpoints
* ✅ **Ensures complete data isolation** via the database-per-service pattern (MongoDB)
* ✅ **Centralizes security & traffic routing** through an enterprise API Gateway with rate limiting
* ✅ **Secures authentication** using JWT tokens, refresh token rotation, and Google OAuth 2.0
* ✅ **Implements multi-role access control (RBAC)** for Patients, Doctors, Lab Technicians, and Admins
* ✅ **Automates medical report interpretation** via PDF parsing and clinical LLM summarization
* ✅ **Provides AI clinical symptom triage** with condition probabilities, red flags, and triage urgency levels
* ✅ **Digitizes physical prescriptions and medicine strips** using OCR (Tesseract.js) and AI
* ✅ **Enables secure digital transactions** and automated webhook reconciliation via Razorpay
* ✅ **Delivers a production-ready foundation** configured with Docker, CI/CD, and Nx Monorepo tooling

---

## 🏗️ System Architecture
The application is structured into decoupled, independently deployable microservices orchestrated via an API Gateway:

### 🌐 API Gateway
**Responsible for:**
* Centralized request routing and reverse proxying
* Rate limiting and brute-force protection
* Security headers enforcement (Helmet) & CORS configuration
* Central JWT authentication and request validation

### 🔐 Authentication Service
**Responsible for:**
* User registration, secure login, and session logout
* Access & refresh token generation and rotation
* Google OAuth 2.0 integration
* OTP generation, storage, and password reset workflows
* Multi-role authorization (`Patient`, `Doctor`, `Lab Technician`, `Admin`)

### 👤 User Service
**Responsible for:**
* Patient medical profile & health records management
* Delivery address management
* Doctor credentials, specialization, and availability setup
* Historical consultation & test record aggregation

### 💊 Product Service (Pharmacy & Inventory)
**Responsible for:**
* Comprehensive medicine and healthcare catalog
* Advanced search & categorization (OTC vs. Prescription-only `rxRequired`)
* Real-time inventory tracking and automated low-stock alerts
* Batch, composition, side-effects, and manufacturer data management

### 🛒 Order Service
**Responsible for:**
* Cart management and pricing calculations
* Order placement and prescription upload handling
* Multi-stage order lifecycle tracking (`Pending` → `Confirmed` → `Packed` → `Shipped` → `Delivered`)
* Order cancellation and automated refund dispatch

### 💳 Payment Service
**Responsible for:**
* Razorpay payment gateway integration (UPI, Cards, NetBanking)
* Payment signature verification and security checks
* Webhook ingestion for asynchronous payment events
* Transaction audit history and digital PDF invoice generation

### 🩺 Appointment Service (Telehealth)
**Responsible for:**
* Doctor discovery by specialty, experience, language, and fees
* Real-time slot booking and calendar schedule management
* Consultation notes and digital prescription generation
* Video consultation access and meeting link lifecycle

### 🧪 Lab Test Service (Diagnostics)
**Responsible for:**
* Diagnostic test packages & health checkup catalog
* Home sample collection scheduling and technician assignment
* Sample tracking (`Booked` → `Sample Collected` → `Processing` → `Completed`)
* Digital lab report upload and secure PDF delivery

### 🤖 AI Healthcare Service
**Responsible for:**
* AI-driven symptom analysis and emergency triage classification
* Medical report extraction (PDF) and structured summarization
* OCR-based medicine packaging and food safety evaluation
* Specialist doctor and relevant lab test recommendations

### 🔔 Notification & Utility Service
**Responsible for:**
* Transactional emails for orders, appointments, and lab test reports
* OTP dispatch via SMS/Email (Nodemailer)
* Cloudinary/S3 asset and prescription document hosting
* Shared utility workflows across microservices

---

## ⚡ Event-Driven Communication with Apache Kafka
Instead of fragile, synchronous HTTP communication between services, **Apache Kafka** acts as the central event-streaming backbone:

### 1. Medicine Order & Payment Workflow
1. Patient places an order with required prescription.
2. Order Service validates stock and publishes an `ORDER_CREATED` event.
3. Payment Service creates Razorpay transaction; patient completes checkout.
4. Payment webhook verifies signature and publishes `PAYMENT_SUCCESS`.
5. Order Service consumes `PAYMENT_SUCCESS` and transitions status to `CONFIRMED`.
6. Product Service consumes the event and decrements inventory automatically.
7. Notification Service triggers order confirmation email and SMS to the patient.

### 2. Doctor Appointment Workflow
1. Patient selects a slot and books a doctor consultation.
2. Appointment Service locks the slot and publishes `APPOINTMENT_BOOKED`.
3. Payment Service verifies the consultation fee.
4. Notification Service delivers confirmation with meeting link to both Doctor and Patient.
5. Completed appointment triggers `CONSULTATION_COMPLETED` for health record update.

### 3. Lab Test & Sample Collection Workflow
1. Patient books a home collection health panel.
2. Lab Service creates booking and publishes `LAB_BOOKING_CREATED`.
3. Lab technician collects sample and updates status to `SAMPLE_PROCESSING`.
4. Once the lab uploads the result, a `LAB_REPORT_READY` event fires.
5. AI Service automatically summarizes the PDF report for patient clarity.
6. Notification Service dispatches the report download link to the user.

---

## 🤖 AI-Powered Clinical Intelligence & Document Processing
The platform integrates **Google Gemini API**, **OpenAI**, and **Tesseract.js OCR** to provide intelligent clinical triage and document digitization:

### 1. AI Symptom Triage & Analysis
* Analyzes multi-symptom patient inputs
* Calculates probable medical conditions with confidence ratings (High / Medium / Low)
* Assigns clinical triage urgency levels: `Low`, `Medium`, `High`, or `Emergency`
* Identifies clinical red flags and critical warning signs
* Recommends relevant medical specialists (e.g., Cardiologist, Pulmonologist)
* Provides safe home-care guidance with professional medical disclaimers

### 2. Medical Report Summarization (PDF)
* Extracts textual data from lab and diagnostic PDF reports using `pdf-parse-new`
* Validates whether the uploaded file is a legitimate clinical document
* Summarizes complex medical reports into concise, patient-friendly key findings
* Generates actionable follow-up questions for the patient’s next doctor visit

### 3. OCR Medicine & Food Scanner
* Processes medicine box/strip images using Tesseract OCR
* Identifies medicine brand, generic composition, primary uses, and precautions
* Flags potential side effects and contraindications
* Analyzes food packaging labels to evaluate nutritional health scores

---

## 🚀 High Performance with Redis
**Redis / Upstash** serves as the in-memory caching and session state layer to guarantee low latency:

### Cached Data:
* Frequently queried medicine catalogs and category filters
* Active doctor availability schedules and slot bookings
* High-volume diagnostic test packages
* Rate-limiting counters and API request quotas
* OTPs with TTL for secure, fast verification
* High-frequency AI triage and condition recommendations

### Performance Benefits:
* **80%+ reduction** in redundant database queries
* **Sub-15ms response times** for cached search and catalog queries
* **Zero race conditions** on concurrent doctor slot reservations
* **High throughput** under intense e-commerce and booking traffic

---

## 🧠 Artificial Intelligence Workflow
1. Patient enters symptoms or uploads a prescription/lab report (PDF or Image).
2. API Gateway validates JWT authentication and routes request to AI Service.
3. If an image or PDF is supplied, **Tesseract OCR** or **PDF-Parse** extracts raw text.
4. AI Service structures the prompt with clinical domain rules and constraints.
5. **OpenAI / Gemini LLM** evaluates the input and responds with strict JSON schema.
6. The system categorizes clinical urgency, generates condition hypotheses, and flags red flags.
7. Relevant doctor specialties and recommended diagnostic panels are mapped.
8. Parsed result is cached in Redis and returned in structured JSON to the frontend.

---

## 🛠️ Technology Stack

### Frontend
* **Framework:** React 19 / Next.js 16
* **Language:** TypeScript
* **State Management:** Redux Toolkit, Zustand
* **UI & Styling:** Tailwind CSS, Material UI (MUI), Lucide Icons
* **Forms & Validation:** React Hook Form, Zod

### Backend & Microservices
* **Runtime:** Node.js (v20+)
* **Framework:** Express.js, TypeScript
* **Architecture:** Microservices with Nx Monorepo
* **API Documentation:** Swagger / OpenAPI

### Databases & In-Memory Layer
* **Primary Database:** MongoDB with Mongoose (Database-Per-Service pattern)
* **Caching & Sessions:** Redis / Upstash Redis

### Event Streaming & Message Broker
* **Event Streaming:** Apache Kafka (`kafkajs`)
* **Architecture:** Asynchronous Event-Driven Pub/Sub

### AI & Computer Vision
* **LLM Engines:** Google Gemini API (`@google/genai`), OpenAI API
* **OCR & Extraction:** Tesseract.js, `pdf-parse-new`
* **Features:** Symptom Triage, Medical Report Analysis, Medicine Scanner

### Storage, Media & Payments
* **Payment Gateway:** Razorpay SDK (Orders, Verification, Webhooks)
* **Cloud Storage:** Cloudinary (Prescription & Document hosting)
* **Email & Auth:** Nodemailer, Firebase Auth, Google Auth Library

### Security
* **Authentication:** JWT (Access & Refresh tokens), bcrypt hashing
* **Protection:** Helmet, CORS, Express Rate Limiter, Role-Based Access Control (RBAC)

### DevOps & Engineering
* **Monorepo Engine:** Nx Workspace
* **Containers:** Docker, Docker Compose
* **Version Control & CI/CD:** Git, GitHub Actions

---

## 🌟 Advanced Features
* **Nx Monorepo Management:** Shared libraries, centralized configurations, and isolated service builds.
* **Database-Per-Service Isolation:** Independent MongoDB instances per microservice preventing cross-database locking.
* **Asynchronous Order Lifecycle:** Non-blocking order and payment processing via Kafka events.
* **Intelligent Clinical Triage:** Emergency-aware symptom triage system with structured specialist mapping.
* **Prescription & Report OCR:** Automated text extraction from physical medical files and prescriptions.
* **Real-time Telehealth Booking:** Doctor slot scheduling and automated video consultation URL generation.
* **Diagnostic Test Home Collection:** End-to-end sample tracking from doorstep pickup to report generation.

---

## 🎯 What This Project Demonstrates
* **Distributed System Engineering:** Decoupled, production-ready microservices communicating via events.
* **Event-Driven Architecture:** Asynchronous event streaming using Apache Kafka for high-throughput workflows.
* **Modern Monorepo Tooling:** Enterprise repository management using Nx Workspace.
* **Production Caching Patterns:** Multi-layer caching and session handling using Redis.
* **Applied Generative AI & OCR:** Real-world LLM and Computer Vision integration for healthcare triage and document parsing.
* **Payment Gateway Integration:** Razorpay payment orders, signature verification, and automated webhook handlers.
* **Enterprise Security Standards:** Centralized API Gateway, JWT rotation, and granular RBAC.

---

## 🔥 Why This Project Stands Out
Unlike standard monolithic healthcare or e-commerce CRUD apps, this project reflects real-world enterprise engineering:

* **Solves true distributed systems challenges:** Eliminates single points of failure by decoupling auth, orders, payments, doctors, lab tests, and AI into dedicated services.
* **High-demand modern stack:** Combines **Node.js, TypeScript, Kafka, Redis, MongoDB, React 19, and Nx Monorepo** in one cohesive architecture.
* **Clinical Value with AI:** Rather than a simple chatbot, it uses **OCR + LLMs** to extract structured medical information from prescriptions and lab PDFs with strict clinical safety disclaimers.
* **Production-Oriented Code:** Includes containerized deployment with Docker, centralized API Gateway security, and automated CI/CD pipelines.
