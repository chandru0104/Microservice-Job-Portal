# 🚀 Enterprise-Grade AI-Powered Healthcare & E-Pharmacy Platform ("Care Hub") Built with Event-Driven Microservices Architecture

## 📌 Overview
Modern digital healthcare ecosystems demand high availability, strict data isolation, real-time doctor-patient communication, and automated clinical assistance. Traditional monolithic healthcare platforms fail to scale under peak traffic, suffer from single points of failure, and cannot handle complex asynchronous workflows like appointment alerts, payment reconciliations, and clinical document processing.

**Care Hub** is an enterprise-ready healthcare and e-pharmacy platform built as an **Nx Monorepo** comprising **9 decoupled microservices** and a modern **Next.js 16 / React 19** frontend. The platform provides a full digital healthcare journey: medicine e-commerce, diagnostic lab test bookings, real-time doctor consultations via **WebRTC (Jitsi Meet)**, automated **FCM push notifications**, and clinical intelligence powered by **Groq Cloud LLM inference** and **Tesseract.js OCR**. Asynchronous inter-service workflows are managed using **Apache Kafka**, while high-security OTP lifecycles are accelerated with **Upstash Redis**.

---

## 🎯 Key Problems Solved
* ✅ **Decouples Healthcare Workflows:** 9 independent microservices managed inside an Nx Monorepo eliminating single points of failure.
* ✅ **Zero-Plugin Doctor Teleconsultations:** Browser-based, encrypted 1-on-1 video calls using Jitsi Meet (WebRTC) with dynamic room allocation.
* ✅ **Real-Time Notification Dispatch:** Firebase Cloud Messaging (FCM) push notifications alert doctors and patients when video sessions are ready.
* ✅ **Non-Blocking Asynchronous Operations:** Apache Kafka handles mission-critical background jobs (User Registration OTPs, Password Resets, Appointment Confirmations).
* ✅ **Low-Latency OTP Verification:** Upstash Redis provides sub-millisecond TTL storage for signup and password-reset OTPs.
* ✅ **Ultra-Fast Clinical AI Inference:** Groq Cloud LPU engine (`gpt-oss-120b`) delivers near-instant medical triage and diagnostic report extraction.
* ✅ **Physical Document & Packaging Digitization:** Tesseract.js OCR extracts text from medicine packaging strips; `pdf-parse-new` digests lab PDF reports.
* ✅ **Multi-Tier E-Commerce Catalog:** 7-level product classification (Category, SubCategory, ChildCategory, Brand, Origin, AgeGroup, Product) with inventory and Cart handling.
* ✅ **Tamper-Proof Transactions:** Razorpay payment integration secured by server-side cryptographic HMAC SHA-256 signature verification.
* ✅ **Role-Based Access & Security:** Centralized API Gateway with Helmet, compression, CORS, rate limiting, JWT authentication, and RBAC (`Patient`, `Doctor`, `Admin`).

---

## 🏗️ System Architecture & Services Breakdown
The platform consists of an API Gateway and 8 specialized backend microservices communicating via REST and Kafka:

```
[ Next.js 16 / React 19 Client ]
                │
                ▼
      [ API Gateway : 8000 ]  ── (Helmet, Rate Limiter, Reverse Proxy)
                │
 ┌──────────────┼──────────────┬──────────────┬──────────────┐
 ▼              ▼              ▼              ▼              ▼
[Auth Service] [User Service] [Product Service] [Order Service] [Payment Service]
 │              │              │ (Catalog & Cart)             │ (Razorpay & HMAC)
 │              │              └──────────────┬──────────────┘
 ▼              ▼                             ▼
[Appointment & Telehealth]             [Lab Test Service]     [AI Healthcare Service]
 (Jitsi Meet, FCM & Kafka)              (Diagnostic Tests)     (Groq API & Tesseract OCR)
        │                                     │                      │
        └──────────────────┬──────────────────┴──────────────────────┘
                           ▼
          [ Apache Kafka (Broker) & Upstash Redis ]
                           │
                           ▼
          [ MongoDB (Database-Per-Service via Mongoose) ]
```

### 1. 🌐 API Gateway (`Port: 8000`)
* Central entry point reverse-proxying requests to internal microservices via `http-proxy-middleware`.
* Secures application traffic using `helmet`, `cors`, and `compression`.
* Implements IP-based request throttling using `express-rate-limit`.
* Validates JWT authentication headers before routing requests to protected services.

### 2. 🔐 Authentication Service
* Multi-user authentication supporting **Patients**, **Doctors**, and **Admins**.
* JWT Token generation (Access Token + Refresh Token rotation) and verification.
* **Google OAuth 2.0** login support via `google-auth-library`.
* Forgot password workflow with Kafka-driven OTP generation and verification against Upstash Redis.

### 3. 👤 User Service
* User registration with email verification via OTP (Kafka `send-mail` topic).
* Doctor onboarding & credential registration (specialties, experience, license number, consultation fees).
* Profile picture & document uploads to **Cloudinary**.
* Admin management of registered doctors and patients.

### 4. 💊 Product Service (Catalog & Cart)
* 7-tier e-commerce product architecture:
  * Categories & SubCategories & ChildCategories
  * Brands & Origins & AgeGroups
  * Products (Medicines, Wellness items, stock levels, pricing, compositions)
* **Cart Management System:** Built directly into the service for high-performance adding, updating, and removing cart items per user.

### 5. 🛒 Order Service
* Transforms cart contents into confirmed patient orders.
* Tracks order status, delivery addresses, and user purchasing history.
* Admin order listing with pagination and status updates.

### 6. 💳 Payment Service (Razorpay Integration)
* Creates Razorpay orders for medicine purchases and diagnostic lab tests.
* **Cryptographic Verification:** Validates incoming payments using Node.js `crypto` HMAC SHA-256 signatures against `RAZORPAY_SECRET_KEY`.
* Updates order and booking payment statuses automatically upon verified signature digest.

### 7. 🩺 Appointment & Telehealth Service
* Doctor discovery by specialization, experience, and consultation fees.
* Slot-based appointment booking and fee payment processing.
* **Teleconsultation Engine:** Generates secure Jitsi Meet video URLs (`Appointment_<appointmentId>`).
* **FCM Push Engine:** Dispatches push notifications to patient/doctor devices via Firebase Admin SDK.
* Kafka producer publishes to `appointment-email` for booking confirmation delivery via Nodemailer.

### 8. 🧪 Lab Test Service
* Management of diagnostic lab categories and comprehensive health checkup packages.
* Diagnostic test scheduling and home collection bookings for patients.
* Admin controls for creating, updating, and pricing clinical tests.

### 9. 🤖 AI Healthcare Service
* **AI Symptom Triage (`/symptoms`):** Ingests up to 5 patient symptoms and prompts Groq Cloud LLM (`gpt-oss-120b`) to return condition probabilities, clinical urgency triage levels (`Low`, `Medium`, `High`, `Emergency`), red flags, and specialist recommendations.
* **Medical Report Analyzer (`/report`):** Parses uploaded PDF lab reports via `pdf-parse-new` and outputs structured clinical summaries, key findings, and next steps in valid JSON.
* **Medicine & Food Scanner (`/medicine`):** Scans uploaded medicine packaging or food labels using **Tesseract.js OCR**, then prompts the LLM to output dosage instructions, uses, side effects, and precautions.

---

## 📹 Real-Time Doctor Video Consultation (WebRTC / Jitsi Meet)
1. **Booking & Confirmation:** Patient books a doctor slot and completes consultation payment.
2. **Room Generation:** Appointment Service dynamically provisions a private Jitsi Meet room:
   $$\text{meetUrl} = \text{https://meet.jit.si/Appointment\_}\{\text{appointmentId}\}$$
3. **FCM Notification Trigger:** The service calls `message.send()` via Firebase Admin SDK with the user's FCM token, instantly sending a device notification that the call is ready.
4. **Browser-Based Joining:** In the Next.js client (`user-appointment`), the patient clicks the video icon, opens an interactive modal, and joins the encrypted audio/video consultation via WebRTC with no extra apps required.

---

## ⚡ Event-Driven Communication with Apache Kafka
The platform utilizes **KafkaJS** to decouple asynchronous notifications from critical business operations:

| Kafka Topic | Producer Service | Consumer Service | Workflow Description |
| :--- | :--- | :--- | :--- |
| **`send-mail`** | `user-service` | `user-service` (Consumer) | Emits OTP upon patient signup; consumer sends verification email via Nodemailer. |
| **`reset-password`** | `auth-service` | `auth-service` (Consumer) | Emits password-reset OTP for patients; consumer sends email with HTML template. |
| **`reset-password-doctor`** | `auth-service` | `auth-service` (Consumer) | Emits password-reset OTP for doctors; consumer sends secure reset token email. |
| **`appointment-email`** | `appointment-service` | `appointment-service` (Consumer) | Fires after successful appointment payment; consumer dispatches appointment confirmation email with doctor details and date/time. |

---

## 🚀 Caching & In-Memory Storage with Upstash Redis
* **Serverless Redis Client (`@upstash/redis`):** Connects to Upstash via low-latency REST tokens without requiring long-lived socket management.
* **OTP Verification Lifecycles:** Stores generated 6-digit OTPs with strict TTL (Time-To-Live expiration), guaranteeing security against replay attacks during registration and password recovery.
* **High Efficiency:** Offloads verification state from MongoDB, ensuring lightning-fast authentication verification under heavy load.

---

## 🧠 Artificial Intelligence Workflow
```
[ Patient Upload / Input ] 
       │
       ├─► Text Symptoms ────────────► Groq Cloud LLM (gpt-oss-120b)
       ├─► Medical Report (PDF) ─────► pdf-parse-new ──► Groq Cloud LLM
       └─► Medicine Box (Image) ────► Tesseract OCR ──► Groq Cloud LLM
                                                              │
                                                              ▼
                                            [ Validated JSON Response ]
                                            • Probable Conditions & Urgency
                                            • Medicine Uses & Side Effects
                                            • Recommended Doctor Specialist
```
1. **Input Submission:** Patient inputs up to 5 symptoms or uploads an image/PDF file.
2. **Document/Image Extraction:**
   * Images are processed through `Tesseract.recognize(buffer, "eng")` to extract medicine/food text.
   * PDFs are parsed into raw strings via `pdf-parse-new`.
3. **Structured Prompting:** AI Service sends a strict JSON-enforced prompt to Groq Cloud API (`baseURL: "https://api.groq.com/openai/v1"`).
4. **Clinical Triage Generation:** The model returns valid JSON containing condition likelihoods, emergency warnings, specialist suggestions, and safety disclaimers.

---

## 🛠️ Technology Stack

### Frontend Application
* **Framework:** Next.js 16 (App Router), React 19, TypeScript
* **UI Components:** Tailwind CSS, Material UI (`@mui/material`, `@mui/x-data-grid`, `@mui/icons-material`)
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Icons & Media:** Lucide React, React Icons (`react-icons`)
* **HTTP Client:** Axios with custom interceptors and error handlers

### Microservices Backend
* **Runtime:** Node.js (v20+), Express.js, TypeScript
* **Monorepo Tooling:** Nx Workspace (`@nx/express`, `@nx/next`, `@nx/node`)
* **API Documentation:** Swagger UI Express (`swagger-ui-express`, `swagger-jsdoc`)
* **Security & Middleware:** Helmet, CORS, Compression, Morgan, Express Rate Limit

### Real-Time Video & Telehealth
* **Video Protocol:** WebRTC via Jitsi Meet API (`meet.jit.si`)
* **Push Notifications:** Firebase Cloud Messaging (FCM) & Firebase Admin SDK (`firebase-admin`)

### Databases & In-Memory Layer
* **Primary Database:** MongoDB with Mongoose (Database-Per-Service pattern)
* **In-Memory Caching:** Upstash Redis (`@upstash/redis`)

### Event Streaming & Notifications
* **Message Broker:** Apache Kafka (`kafkajs`)
* **Email Engine:** Nodemailer (Gmail SMTP with HTML templates)

### AI, OCR & Document Processing
* **LLM Engine:** Groq Cloud API (`openai/gpt-oss-120b`) via OpenAI SDK
* **Computer Vision & OCR:** Tesseract.js (English language engine)
* **Document Parser:** `pdf-parse-new`

### Payments, Storage & Cloud
* **Payment Gateway:** Razorpay SDK with Node.js crypto HMAC SHA-256 verification
* **Cloud Asset Storage:** Cloudinary (`cloudinary`, `multer`)
* **Authentication:** Google Auth Library (`google-auth-library`), JWT (`jsonwebtoken`), bcrypt

### DevOps & Infrastructure
* **Containerization:** Docker, Docker Compose (Kafka broker, MongoDB, Mongo-Express)
* **CI/CD:** GitHub Actions (`ci.yml`, `cd.yml`)

---

## 🌟 Advanced Features
* **Nx Monorepo Architecture:** Centralized multi-package management allowing shared linting, build pipelines, and separate service containers.
* **Integrated Teleconsultation:** Instant virtual appointments using Jitsi Meet and Firebase FCM push alerts without external plugins.
* **Dual OCR & LLM AI Pipeline:** Combines Tesseract OCR and Groq-accelerated LLMs to analyze medicine packaging and medical lab PDFs.
* **Cryptographically Verified Payments:** Server-side HMAC SHA-256 signature verification for payments across orders, appointments, and diagnostic tests.
* **Comprehensive Admin Portal:** Dedicated Next.js dashboard featuring Material UI DataGrids to manage users, doctors, appointments, orders, and 7-tier product categories.

---

## 🎯 What This Project Demonstrates
* **Real-World Microservices Engineering:** Practical implementation of decoupled services communicating through an API Gateway and Kafka event streaming.
* **Modern Full-Stack Proficiency:** Building scalable, type-safe interfaces using **Next.js 16, React 19, and TypeScript**.
* **Real-Time Telehealth Integration:** Practical WebRTC video calling integration and FCM push messaging.
* **Applied Generative AI & Computer Vision:** Real-world document parsing using Groq LPU inference, Tesseract OCR, and PDF parsing.
* **Enterprise Security Standards:** Rate limiting, JWT rotation, Google OAuth 2.0, RBAC, and cryptographic payment verification.

---

## 🔥 Why This Project Stands Out
Unlike standard CRUD applications, **Care Hub** is an end-to-end distributed system that mirrors modern production architectures like Practo or Apollo 24|7:
* It integrates **E-Commerce (7-Tier Catalog + Cart)**, **Telehealth (WebRTC Video Calls)**, and **Diagnostic Lab Bookings** in one platform.
* It leverages **Apache Kafka** for resilient event-driven background processing and **Upstash Redis** for fast, stateless OTP management.
* It applies **Groq AI & Tesseract OCR** to real medical use cases (symptom triage, lab report summarization, medicine strip analysis) with built-in safety boundaries.
* It is engineered with **production discipline** — Dockerized services, Nx build caching, Swagger API docs, and automated GitHub Actions CI/CD workflows.
