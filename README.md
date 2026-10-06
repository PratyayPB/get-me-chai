# Get Me Chai ☕

**A crowdfunding and support platform for creators, allowing fans to buy them a "chai" (tea) via secure payments.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://get-me-chai-one.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Demo](https://get-me-chai-one.vercel.app/) · [Report an Issue](https://github.com/PratyayPB/get-me-chai/issues)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Screenshots / Demo](#screenshots--demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Database](#database)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [License](#license)
- [Author](#author)

---

## Overview

**Get Me Chai** is a platform built for creators, developers, and artists to receive financial support from their audience. Similar to "Buy Me a Coffee" or Patreon, fans can easily send payments to their favorite creators to show appreciation for their work. 

The project leverages modern web technologies to provide a seamless, responsive user interface, secure authentication, and a robust payment gateway integration.

---

## Key Features

- **Creator Profiles:** Dedicated pages for creators to receive messages and payments.
- **Secure Payments:** Integrated with Razorpay for handling transactions safely.
- **Social Login:** Quick and easy authentication using GitHub and Google.
- **Responsive UI:** Styled beautifully with Tailwind CSS to work across all devices.
- **Real-time Database:** Data persistence for users, receipts, and payments using MongoDB.

---

## Screenshots / Demo

**Live Application:** [https://get-me-chai-one.vercel.app/](https://get-me-chai-one.vercel.app/)

### Application Preview

<p align="center">
  <img src="https://ik.imagekit.io/ulycoljug/Portfolio-resources/get-me-chai/Screenshot%202026-02-04%20022836.png" width="48%" alt="App Screenshot 1"/>
  <img src="https://ik.imagekit.io/ulycoljug/Portfolio-resources/get-me-chai/Screenshot%202026-02-04%20022929.png" width="48%" alt="App Screenshot 2"/>
</p>
<p align="center">
  <img src="https://ik.imagekit.io/ulycoljug/Portfolio-resources/get-me-chai/Screenshot%202026-02-04%20023053.png" width="48%" alt="App Screenshot 3"/>
  <img src="https://ik.imagekit.io/ulycoljug/Portfolio-resources/get-me-chai/Screenshot%202026-02-04%20022852.png" width="48%" alt="App Screenshot 4"/>
</p>
<p align="center">
  <img src="https://ik.imagekit.io/ulycoljug/Portfolio-resources/get-me-chai/Screenshot%202026-02-04%20023003.png" width="48%" alt="App Screenshot 5"/>
  <img src="https://ik.imagekit.io/ulycoljug/Portfolio-resources/get-me-chai/Screenshot%202026-02-04%20023017.png" width="48%" alt="App Screenshot 6"/>
</p>

---

## Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS
- **Notifications:** React Toastify

### Backend
- **Framework:** Next.js Server Actions / API Routes
- **Payment Gateway:** Razorpay API

### Database
- **Database:** MongoDB
- **ODM:** Mongoose

### Authentication
- **Provider:** NextAuth.js (GitHub & Google Providers)

---

## Project Structure

```text
get-me-chai/
├── actions/         # Next.js Server Actions for backend logic
├── app/             # App Router pages and layouts
├── components/      # Reusable React UI components
├── db/              # Database connection utilities
├── models/          # Mongoose database schemas
├── public/          # Static assets (images, fonts)
├── .env.local       # Environment variables (not committed)
├── package.json     # Project dependencies and scripts
└── tailwind.config.js # Tailwind CSS configuration
```

---

## Getting Started

### Prerequisites

Make sure the following are installed on your machine:
- Node.js
- npm / pnpm / yarn
- Git
- MongoDB (Local or Atlas)

### Clone the Repository

```bash
git clone https://github.com/PratyayPB/get-me-chai.git
cd get-me-chai
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The application will be running at: `http://localhost:3000`

---

## Environment Variables

Create a `.env.local` file in the root of your project and add the following variables. 

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_URL` | The public URL of the application (e.g., http://localhost:3000) |
| `MONGODB_URI` | Your MongoDB connection string |
| `NEXTAUTH_URL` | Base URL for NextAuth (same as NEXT_PUBLIC_URL in dev) |
| `NEXTAUTH_SECRET` | Secret key used to encrypt NextAuth session cookies |
| `GITHUB_ID` | Client ID from your GitHub OAuth App |
| `GITHUB_SECRET` | Client Secret from your GitHub OAuth App |
| `GOOGLE_ID` | Client ID from your Google Cloud Console (if using Google Auth) |
| `GOOGLE_SECRET` | Client Secret from your Google Cloud Console |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Your Razorpay public Key ID |
| `RAZORPAY_KEY_SECRET` | Your Razorpay secret key |

> **Note:** Never commit real secrets, API keys, credentials, or private tokens to the repository.

---

## Usage

1. **Sign In:** Users authenticate securely via GitHub or Google.
2. **Setup Profile:** Creators can configure their username and shareable link.
3. **Receive Chai:** Supporters visit the creator's link and make a payment via the Razorpay interface.
4. **Dashboard:** Creators can view their top supporters and total funds raised.

---

## Database

The application utilizes **MongoDB** with **Mongoose** to handle data efficiently. 

### Core Entities
- **User:** Stores profile information, authentication IDs, and creator details.
- **Payment:** Tracks transactions, status, amounts, and sender messages.

---

## Authentication

Authentication is handled via **NextAuth.js**.
- **Providers:** GitHub and Google OAuth.
- **Security:** Secure, HTTP-only session cookies ensure safe access to protected routes (like the Dashboard).

---

## Deployment

This Next.js application is optimized for deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Add all the required **Environment Variables** in the Vercel project settings.
4. Click **Deploy**.

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Pratyay Pratim Borah**

- **GitHub:** [@PratyayPB](https://github.com/PratyayPB)
- **LinkedIn:** [Pratyay Pratim Borah](https://www.linkedin.com/in/pratyaypratimborah/)
- **Portfolio:** [https://portfolio-pratyay.vercel.app/](https://portfolio-pratyay.vercel.app/)
