# Getränkemarkt  🍷🍺

My first full web application for learning web-design,CRUD and authentification. The website is for a madeup beverage store (Getränkemarkt) with inventory management, customer contact system, newsletter functionality, and administrative dashboard.

> **PRIVACY DISCLAIMER:** This project's git history was reset because personal information was mistakenly included at some point.

> **PROJECT DISCLAIMER:** This project was created solely as a learning exercise and remains incomplete and will not be deployed.

## 📋 What is this project?

This is a full-stack web application built for a beverage store that includes:

- **Public Website**: Showcasing products, services, and company information
- **Product Catalog**: Complete inventory management for beverages (wine, beer, spirits, soft drinks)
- **Contact Management**: Customer inquiry system with email integration
- **Newsletter System**: Email marketing and subscriber management
- **Admin Dashboard**: Comprehensive management interface for store operations
- **User Authentication**: Secure login system with role-based access
- **Email Integration**: Automated email responses and notifications

## 🎓 What I Learned

Through building this project, I gained first real experience with:

### General
- Web programming
- Git version control
- Project organization 
- Environment variable management

### Database & Backend
- Designing and implementing MongoDB schemas for different data models
- Creating RESTful APIs for CRUD operations
- Implementing secure user authentication with NextAuth.js
- Password encryption and security best practices

### Frontend Development
- Building responsive layouts with Tailwind CSS
- Creating reusable React components
- Implementing complex UI interactions and forms
- Working with multiple UI libraries and maintaining consistency

### Email & Communication
- Setting up automated email systems with Nodemailer
- Creating responsive email templates with React Email
- Building newsletter subscription and management features

### File Management
- Handling file exports (CSV, Excel)
- Managing static assets and images
- Implementing file upload functionality

### Authentication & Authorization
- Role-based access control
- Session management
- Protected routes and middleware


## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Material Tailwind** - UI components
- **NextUI** - Modern React UI library
- **Ant Design** - Additional UI components
- **React Icons** - Icon library

### Backend & API
- **Next.js API Routes** - Server-side functionality
- **NextAuth.js** - Authentication system
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Additional Tools
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **React Email** - Email templates
- **TinyMCE** - Rich text editor
- **ExcelJS** - Excel file handling
- **React CSV** - CSV export functionality

## 🚀 How to Run

### Prerequisites
- Node.js (version 18 or higher)
- MongoDB instance (local or cloud)
- Email service credentials (for Nodemailer)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd getränkemarkt
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USER=your_email_username
EMAIL_PASSWORD=your_email_password
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Admin dashboard
│   ├── sortiment/         # Product catalog
│   └── ...               # Other pages
├── components/            # Reusable React components
├── models/               # MongoDB schemas
├── lib/                  # Database connection
├── assets/               # Static images and files
├── styles/               # Global CSS styles
└── utils/                # Utility functions
```

## 🔐 Authentication

The application includes a secure authentication system with:
- User registration and login
- Password encryption with bcryptjs
- Session management with NextAuth.js
- Role-based access control
- Protected admin routes

## 📧 Features

### Customer Features
- Browse product catalog by categories
- Contact form for inquiries
- Newsletter subscription
- Company information and services

### Admin Features
- Product inventory management
- Customer inquiry management
- Newsletter subscriber management
- User account management
- Email campaign creation
- Export functionality (CSV, Excel)

## 🚀 Deployment

This Next.js application can be deployed on various platforms:

### Vercel (Recommended)
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Make sure to configure your environment variables in your deployment platform.

## 📝 License

This project is for educational purposes and personal use.

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome!

---

Built with ❤️ using Next.js and modern web technologies.
