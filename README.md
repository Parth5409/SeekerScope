# SeekerScope: A Job Portal with Roadmap Features

SeekerScope is a MERN stack-based job portal designed to bridge the gap between job seekers and recruiters. It offers advanced features like profile creation, job applications, roadmap tracking for career progress, and dedicated admin tools for managing job posts and company profiles.

## Features

### For Job Seekers
- **Profile Creation and Management:** Customize your profile to showcase skills and achievements.
- **Browse Jobs:** Explore job listings from various companies.
- **Job Applications:** Apply for jobs and track your applications.
- **Roadmaps:**
  - Create personalized career roadmaps.
  - Highlight achievements and progress over time.
  - Share your career journey with recruiters.

### For Recruiters
- **Company Management:** Add and edit company profiles.
- **Post Jobs:** Create job listings for potential candidates.
- **View Applicants:** Manage applications and shortlist candidates.

### Admin Dashboard
- **Company Management:** Add, view, and edit company details.
- **Job Management:** Post jobs, view applications, and manage listings.
- **Roadmap Management:** Oversee users' career roadmaps.

---

## Project Routes

### General User Routes
- `/` - Home Page
- `/login` - Login Page
- `/signup` - Signup Page
- `/jobs` - View available job listings
- `/jobs/description/:id` - Detailed view of a specific job listing
- `/browse` - Explore job-related content
- `/profile` - User Profile Page

### Roadmap Routes
- `/roadmaps` - View user-created roadmaps
- `/roadmaps/:id` - View a specific user’s roadmap
- `/roadmaps/:id/create` - Create a new roadmap

### Admin Routes
- `/admin/companies` - View all companies
- `/admin/companies/create` - Add a new company
- `/admin/companies/:id` - Edit a specific company’s details
- `/admin/jobs` - View and manage job postings
- `/admin/jobs/create` - Create a new job post
- `/admin/jobs/:id/applicants` - View job applicants for a specific posting

### Fallback
- `*` - NotFound page for undefined routes

---

## Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, ShadCN UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Redux Toolkit
- **Other Tools:** Cloudinary for file uploads, Axios for API calls, Sonner for notifications

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/seeker-scope.git
