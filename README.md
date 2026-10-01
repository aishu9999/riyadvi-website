# Riyadvi Software Technologies – Digital Solutions Website

A premium, responsive, dynamic corporate website developed for Riyadvi Software Technologies as part of the Full Stack Developer interview assignment.

The project combines modern UI/UX, 3D interactive experiences, animations, dynamic content, backend APIs, MongoDB integration, and lead management.

---

## 1. Project Overview

The objective of this project is to create a modern digital experience for Riyadvi Software Technologies that communicates its technology expertise, services, innovation, and business-focused approach.

The website is designed as a multi-page corporate platform rather than a single landing page.

### Core Areas

- Home
- Services
- Portfolio
- About
- Blog
- Careers
- Contact
- Business Health Checkup
- Software Project Planning Guide
- Consultation
- Admin Dashboard

---

## 2. Key Features

### Frontend

- Responsive multi-page website
- React-based component architecture
- React Router navigation
- Reusable service templates
- Reusable portfolio case-study templates
- Dynamic blog listing and article pages
- Dynamic career listing and job-detail pages
- Search and category filtering
- Interactive 3D sections
- Scroll-based animations
- Premium black and gold visual system
- Responsive layouts for desktop, tablet, and mobile

### Backend

- Node.js
- Express.js
- REST APIs
- MongoDB database
- Mongoose
- Form validation
- Resume upload handling
- Lead storage
- Career application storage

### Lead Management

The backend stores:

- Contact enquiries
- Consultation requests
- Business Health Checkup submissions
- Software Project Planning Guide leads
- Career applications

---

## 3. Technology Stack

### Frontend

- React
- Vite
- React Router
- JavaScript
- CSS

### 3D & Animation

- Three.js
- React Three Fiber
- Drei
- GSAP
- GSAP ScrollTrigger
- @gsap/react

### Backend

- Node.js
- Express.js
- Mongoose
- MongoDB
- Multer
- CORS
- dotenv

### Database

- MongoDB

---

## 4. 3D & Interactive Experiences

3D is used as part of the visual experience rather than only as decoration.

### Implemented Experiences

#### Homepage Hero

Interactive rotating 3D technology-inspired sphere using React Three Fiber and Drei.

#### Services

Each service card contains an interactive 3D visual using:

- Sphere
- Torus
- Float animation
- Continuous rotation

#### Portfolio Case Studies

Individual case-study pages include an interactive 3D visual experience.

#### Technology Ecosystem

An interactive technology ecosystem visualises technologies around a central 3D object.

---

## 5. Animation

GSAP and ScrollTrigger are used for scroll-based interactions and content reveals.

Examples include:

- Digital transformation storytelling
- Service card reveal animations
- Company journey animations
- Content entrance animations
- Scroll-triggered transitions

---

## 6. Dynamic Architecture

The project uses reusable data-driven components.

### Services

Service information is maintained in:

`src/data/services.js`

The same service-detail template is used for different services.

Example route:

`/services/web-development`

### Portfolio

Portfolio information is maintained in:

`src/data/portfolio.js`

The same case-study template is reused for individual projects.

Example route:

`/portfolio/puratap`

### Careers

Job information is maintained in:

`src/data/careers.js`

The same job-detail and application templates are reused for different positions.

This approach avoids creating separate hardcoded components for every item.

---

## 7. Core Pages

### Home

Includes:

- 3D hero
- Digital transformation process
- Services
- Technology ecosystem
- Why Riyadvi
- Company journey
- Business Health Checkup CTA
- Software Project Planning Guide CTA

### Services

Core services include:

- Web Development
- App Development
- Digital Marketing
- AR/VR
- 3D Modeling
- UI/UX Design

Each service has its own dynamic detail page.

### Portfolio

Portfolio includes:

- Puratap
- Wanaromah Perfumers
- Laxmi Astro AI
- Tony & Guy
- Studio11
- Sivam Physio Care
- Pearl Housing
- Nugenica Biotech Lab
- VisDoc
- Cube Dental

Each project has a reusable case-study page.

### About

Includes:

- Company story
- Mission
- Vision
- Values
- Company milestones
- Achievements
- Global presence
- Business Health Checkup CTA

### Blog

Includes:

- Featured article
- Category filtering
- Search
- Blog cards
- Individual article pages
- Related articles

### Careers

Includes:

- Job listing
- Department filter
- Employment type filter
- Location filter
- Job details
- Application form
- Resume upload

### Contact

Includes:

- Name
- Email
- Phone
- Company
- Requirement
- Message

Submitted information is stored in MongoDB.

### Business Health Checkup

A multi-step form covering:

1. Business Information
2. Website & Digital Presence
3. Marketing
4. Technology
5. Business Challenges
6. Submission

### Software Project Planning Guide

Lead form containing:

- Name
- Company
- Email
- Phone

The submitted lead is stored in MongoDB.

---

## 8. Backend API

Backend server runs on:

`http://localhost:5000`

### API Endpoints

#### Contact

`POST /api/contact`

`GET /api/contact`

#### Consultation

`POST /api/consultation`

`GET /api/consultation`

#### Business Health Checkup

`POST /api/health-checkup`

`GET /api/health-checkup`

#### Software Project Planning Guide

`POST /api/lead-magnet`

`GET /api/lead-magnet`

#### Career Applications

`POST /api/applications`

`GET /api/applications`

---

## 9. Database

MongoDB is used as the primary database.

Database name:

`riyadvi_db`

Collections are created through Mongoose models for:

- Contacts
- Consultations
- Health Checkups
- Lead Magnet submissions
- Career Applications

---

## 10. Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/riyadvi_db