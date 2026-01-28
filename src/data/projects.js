import lawyerupimg from "../assets/lawyerup.png";
import navigateaiimg from "../assets/navigateai.png";

// Helper function to generate URL slug from title
export const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
};

export const projects = [
    {
        id: 1,
        title: "Alin – Ride Hailing Platform",
        slug: "alin",
        description:
            "A near production-ready ride hailing platform with real-time operations, payments, maps integration, driver assignment, live tracking, and distributed workflows built for reliability and scale.",
        longDescription: `
## Overview
Alin is a full-stack ride hailing application built as a near production-ready system, focusing on real-time operations, payments, maps, and reliability. The project was developed end to end, with complete ownership of backend architecture, business logic, and system workflows.

The platform supports core ride-hailing functionality such as user authentication, ride creation, driver assignment logic, live ride tracking, fare calculation, and payment handling. The system is designed to handle real-world constraints like retries, failures, and real-time updates.

## Authentication & Security

Authentication is implemented securely, and all ride operations are protected at the API level. User identity is tied to every ride request, ensuring traceability and access control throughout the system.

## Backend Architecture

The backend is built using Firebase SDK and custom backend logic. Firestore is used as a real-time datastore to manage users, drivers, rides, and ride states. The data model is designed around ride lifecycles, allowing the system to track each ride from creation to completion with clearly defined state transitions.

### 🔧 Custom Backend Functions
Custom backend functions handle all critical business logic. This includes:
- Validating ride requests
- Computing fares
- Calculating distance and ETA
- Updating ride status in real time

The frontend never performs trusted calculations; it only consumes backend-verified data.

## Maps & Routing Integration

Alin integrates maps and routing deeply into the system. Location data is used to calculate distance, estimated arrival times, and fare breakdowns. The backend processes map-based data such as routes, distances, and timing, while the frontend is responsible for rendering the route and live movement on the map.

## Payment System

The platform supports real payments, integrated securely through backend-controlled payment flows:
- Payment initiation handled server-side
- Verification and confirmation processed on backend
- Prevention of client-side tampering
- Payment status tied directly to ride completion

This ensures consistency between ride state and transaction state.

## Real-Time Updates

Real-time updates are a core part of Alin. Using Firestore's real-time capabilities:
- Ride status changes reflected instantly
- Driver movement tracked live
- State transitions visible immediately
- No polling required for updates

Both riders and drivers see live updates without any manual refresh.

## Reliability & Scalability

The system is built with reliability in mind:
- **Retries**: Implemented for critical operations
- **Pub/Sub**: Used to decouple processes and handle asynchronous tasks
- **Error Handling**: Treated as a first-class concern
- **State Consistency**: Prevents partial failures from breaking the ride flow

Alin is designed as a multi-region, scalable system, with backend logic structured to handle growth and real-world usage patterns.

## Key Takeaways

Alin demonstrates strong full-stack and backend ownership across:
- Real-time systems
- Payment integration
- Maps and routing
- Distributed workflows

It reflects an understanding of how production ride-hailing systems work beyond just UI replication.
        `,
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
        tags: ["Firebase", "Real-time", "Payments", "Maps", "Full Stack", "Pub/Sub"],
        categories: ["Full Stack", "Mobile"],
        techStack: ["React Native", "Firebase", "Firestore", "Cloud Functions", "Google Maps API", "Pub/Sub"],
        features: [
            "Real-time ride tracking",
            "Driver assignment logic",
            "Fare calculation engine",
            "Secure payment integration",
            "Live map rendering",
            "State machine for ride lifecycle"
        ],
        challenges: [
            "Ensuring consistency between payment and ride states",
            "Handling real-time updates at scale",
            "Implementing retry logic for critical operations"
        ],
        year: "2025"
    },
    {
        id: 2,
        title: "Civic Issue Reporting System",
        slug: "civic",
        description:
            "A full-stack web application enabling citizens to report civic issues through manual forms and voice calls, with AI-assisted normalization and real-time admin workflows for authorities to track and manage issues.",
        longDescription: `
## Overview
Civic is a full-stack web application that enables citizens to report civic issues through both manual forms and voice calls, and enables authorities to track and manage these issues in near real time. The focus of the project is on structured issue ingestion, AI-assisted normalization, and a clean admin workflow.

## Manual Reporting System

The system supports manual reporting through a structured form where users submit issue details such as description, location, and optional media. Client-side validation ensures required fields are present before submission.

The backend authenticates the user using JWT, validates the request payload, and stores the issue as a document in the database with metadata like reporter ID, timestamps, and status. Manual reports are stored directly without AI intervention unless normalization is required.

## Voice-Based Reporting with Vapi

### 🎙️ Conversational Voice Interface
The project supports voice-based reporting using Vapi. Users can initiate a voice session from the frontend, which starts a Vapi call. Vapi acts as a conversational agent that prompts the user to describe the civic issue in natural language.

### 🔊 Real-Time Speech Processing
Speech is converted to text in real time by Vapi. After the call ends, the complete transcript and call metadata are sent to the backend via webhook.

### 🤖 LLM-Based Data Normalization
The backend processes the transcript using an LLM to extract only relevant civic information and convert unstructured speech into a clean, structured issue description. This step removes filler speech and normalizes the content so that voice-based reports match the same schema as manually submitted reports.

No automated decisions or routing are performed by the model; it is used strictly for information extraction.

## Unified Data Architecture

Both manual and voice-based reports are stored in a single unified issue collection, ensuring consistent handling downstream. This design choice simplifies the admin workflow and ensures all issues follow the same processing pipeline.

## Authentication & Security

Authentication is implemented using JWT-based authorization, and all protected APIs validate tokens before allowing issue creation or updates. This ensures secure access control across the platform.

## Admin Dashboard

### 📊 Real-Time Issue Management
Authorities access the system through an admin dashboard that displays reported issues and their current status. Admin users can update issue status and add notes.

### ⚡ Live Updates
Updates are reflected in near real time on the dashboard using real-time database listeners instead of polling.

## Architecture Philosophy

The system does not rely on background queues or caching layers. All processing happens synchronously during API requests or through direct webhook handling from Vapi, keeping the architecture simple and transparent.

## Key Takeaways

This project demonstrates end-to-end ownership of a real-world system involving:
- Frontend development with React
- Secure backend APIs with JWT authentication
- Voice AI integration via Vapi
- LLM-based data normalization
- Real-time admin workflows
        `,
        image: "https://www.shutterstock.com/image-vector/active-citizen-concept-vocal-advocate-600nw-2436334067.jpg",
        tags: ["React", "Node.js", "Vapi", "LLM", "JWT", "Real-time", "Full Stack"],
        categories: ["Full Stack", "AI Agents"],
        liveUrl: "https://kaizen-prod.vercel.app",
        techStack: ["React", "Node.js", "Vapi", "MongoDB", "JWT", "OpenAI", "TailwindCSS"],
        features: [
            "Manual issue reporting with structured forms",
            "Voice-based reporting via Vapi",
            "LLM-powered transcript normalization",
            "JWT-based authentication",
            "Real-time admin dashboard",
            "Unified issue storage schema"
        ],
        challenges: [
            "Normalizing unstructured voice transcripts into structured data",
            "Implementing real-time updates without polling",
            "Ensuring consistent schema for both manual and voice reports"
        ],
        year: "2024"
    },
    {
        id: 3,
        title: "Vasundhara",
        slug: "vasundhara",
        description:
            "Award-winning climate tech platform that turns real-world eco-friendly actions into verifiable digital activity through photo-based reporting, AI validation, gamification, and community events.",
        longDescription: `
## Overview
Vasundhara is built around the idea of turning real-world eco-friendly actions into verifiable digital activity, while keeping the system resistant to spam and low-effort participation. Each feature is designed with validation, accountability, and long-term engagement in mind.

## 🏆 Hackathon Winner
This project won recognition at multiple hackathons for its innovative approach to tackling climate change through technology and behavioral science.

## Photo-Based Reporting

A core feature of Vasundhara is reporting and participation through photo uploads. Users can submit photos as proof of eco-friendly actions or environmental activities, such as participating in a cleanliness drive, plantation activity, or other sustainability tasks.

When a user uploads a photo, the frontend collects the image along with structured metadata like the selected activity type, optional description, and location context. The image itself is stored securely, and the backend stores a reference to it in MongoDB, linked to the user and the corresponding activity or event.

Each photo submission is treated as a first-class entity in the system. It has its own lifecycle: **submitted → under validation → accepted/rejected**. This allows the platform to track not just participation, but also the quality and authenticity of contributions.

## AI-Based Validation of Submissions

To reduce fake or irrelevant submissions, Vasundhara uses AI-assisted validation for photo-based reports. When a photo is submitted, it is passed through an AI validation step that checks whether the image content reasonably matches the claimed activity.

For example, if a user claims to have participated in a cleanliness drive, the AI validation step checks whether the image plausibly contains relevant visual cues rather than unrelated or random content. The AI does not perform hard enforcement or auto-penalties. Instead, it produces a validation outcome or confidence signal that is used by the backend to decide whether the submission can be accepted or needs review.

This approach ensures that validation is scalable without removing human control. Administrators can review flagged or low-confidence submissions, while high-confidence submissions move forward automatically.

## Gamification System

Vasundhara includes a gamification layer to encourage consistent and meaningful participation. Users earn points or progress markers only after their actions are successfully validated. Simply uploading content is not enough; rewards are tied to verified contributions.

Gamification logic is handled entirely on the backend. Points are awarded based on action type, validation result, and event context. This prevents client-side manipulation and ensures fairness across the platform.

User progress is persistent and accumulative, allowing participants to see long-term impact rather than short-term rewards. This design keeps engagement tied to real behavior instead of shallow interaction.

## Daily Eco-Tasks

The platform supports daily tasks, which are small sustainability actions that users can complete on a daily basis. Each daily task has a defined validity window and can only be completed once per cycle.

Task availability and completion are controlled server-side to prevent abuse through client-side time manipulation. When a user completes a daily task, the backend verifies the submission, records the completion, and updates the user's progress accordingly.

Daily tasks are designed to encourage habit formation rather than one-time participation. They integrate directly with the gamification system, contributing to user consistency over time.

## Community Events

Vasundhara supports community-driven eco-events, which are larger initiatives involving multiple users. These events have structured lifecycles, including creation, participation, and completion phases.

Each event supports multiple participants and can require proof of participation, typically through photo submissions. The backend tracks event membership, submission status, and validation outcomes for each participant.

Events are flexible in structure. Different event types can define different rules for participation and validation, allowing the platform to support a wide range of sustainability initiatives without hardcoding logic for each case.

## Multi-Role Access Control

The system implements multi-role authentication and authorization:
- **Regular users**: Participate in tasks and events, submit reports, and track progress
- **Admin users**: Manage events, review AI-flagged submissions, and oversee platform activity

Authorization checks are enforced at the API level using JWT-based authentication, ensuring that sensitive actions cannot be performed by unauthorized users.

## Data and Backend Architecture

MongoDB is used as the primary datastore due to its flexibility in handling varied data types such as users, submissions, tasks, and events. Each feature maps cleanly to a collection with references managed at the application layer.

All business logic, including validation flow, scoring, task completion, and event participation, is implemented in the backend. The frontend is responsible only for interaction and display, not decision-making.
        `,
        image: "https://media.istockphoto.com/id/163858567/vector/three-illustrated-green-leaves-in-a-circle.jpg?s=612x612&w=0&k=20&c=MSo6IWhtqa0m9_JQUwDFdmWgsrm2SCSg3FbESxNIPmA=",
        tags: ["Sustainability", "AI Validation", "Gamification", "MERN", "Hackathon Winner"],
        categories: ["Mobile", "AI/ML", "Full Stack"],
        githubUrl: "https://github.com/singhalansh/vasundhara",
        techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "AI/ML", "Tailwind CSS"],
        features: [
            "Photo-based eco-action reporting",
            "AI-powered submission validation",
            "Gamification with verified rewards",
            "Daily eco-tasks for habit formation",
            "Community-driven events",
            "Multi-role access control"
        ],
        challenges: [
            "Building scalable AI validation without removing human oversight",
            "Preventing client-side manipulation in gamification",
            "Designing flexible event structures for varied initiatives"
        ],
        year: "2023"
    },
    {
        id: 4,
        title: "LawyerUp",
        slug: "lawyerup",
        description:
            "AI-powered legal aid platform using RAG to provide grounded legal guidance, document understanding, and structured assistance while maintaining strict safety guardrails.",
        longDescription: `
## Overview
LawyerUp is a full-stack legal assistance platform built to make basic legal guidance more accessible and structured using AI. The core idea of the project is to help users understand legal situations, ask informed questions, and get preliminary guidance without immediately needing a lawyer, while keeping the system grounded and safe.

The platform is designed around a clear separation between information assistance and professional legal advice, with AI used strictly for guidance and document understanding, not for issuing legal judgments.

## 🏆 LexHack Winner
This project secured victory at LexHack, demonstrating innovative use of AI in the legal technology space.

## User Interaction and Query Flow

Users interact with LawyerUp through a conversational interface. They can describe their legal issue in natural language, such as disputes, contract questions, or procedural doubts. The frontend captures this input and sends it to the backend through secured APIs.

The backend processes the query and passes it to an AI layer that is carefully prompted to provide general legal guidance, explanations of legal concepts, and next steps. The AI is constrained to avoid making definitive legal decisions or claims and instead focuses on explaining options, rights, and processes.

## AI and RAG-Based Architecture

LawyerUp uses a **Retrieval-Augmented Generation (RAG)** approach to ensure responses are grounded in actual legal knowledge rather than generic language model output.

Legal documents, structured legal references, and curated legal content are stored in a knowledge base. When a user submits a query, relevant documents are retrieved and passed as context to the LLM. This significantly improves accuracy and reduces hallucinations.

The system is designed so that responses are always backed by retrieved legal context, rather than free-form generation.

## Document Understanding and Context Handling

Users can also provide legal text or documents for understanding. The backend parses the input, extracts relevant sections, and feeds only the necessary context into the AI model. This prevents token overload and keeps responses focused.

The AI then explains clauses, terms, or implications in simple language without altering or rewriting the legal document itself.

## Authentication and User Management

LawyerUp implements authentication to manage user sessions and history. Users can log in and track previous queries and interactions. This allows continuity and prevents misuse.

Authorization logic ensures users only access their own data and conversations. Sensitive legal queries are never shared across users.

## Safety and Guardrails

A critical part of LawyerUp is its safety design. The AI is explicitly restricted from:
- Giving definitive legal advice
- Guaranteeing outcomes
- Impersonating lawyers or authorities

Instead, it focuses on explaining legal concepts, outlining possible options, and suggesting when professional legal help should be consulted. These guardrails are enforced through prompt design and response validation.

## Backend and Data Storage

The backend exposes REST APIs for query handling, document ingestion, and conversation history. Data such as user queries, AI responses, and retrieved context references are stored securely.

The system is built to be modular so that new legal domains or document types can be added without changing core logic.

## Role of the Project

LawyerUp is not a replacement for lawyers. It is a **legal literacy and assistance tool** that lowers the barrier to understanding legal processes. Technically, it demonstrates strong implementation of RAG pipelines, safe AI prompting, backend API design, and responsible AI usage in a sensitive domain.
        `,
        image: lawyerupimg,
        tags: ["LegalTech", "RAG", "AI Safety", "Chatbot", "Hackathon Winner"],
        categories: ["Full Stack", "Chatbots", "AI Agents"],
        liveUrl: "https://lawyerupapp.vercel.app/",
        githubUrl: "https://github.com/singhalansh/lawyerup-app",
        techStack: ["React", "Python", "FastAPI", "OpenAI", "Vector DB", "RAG", "Tailwind CSS"],
        features: [
            "Conversational legal query interface",
            "RAG-based grounded responses",
            "Legal document understanding",
            "User session and history tracking",
            "AI safety guardrails",
            "Modular domain support"
        ],
        challenges: [
            "Implementing effective RAG for legal domain accuracy",
            "Designing guardrails to prevent unsafe AI responses",
            "Balancing helpfulness with responsible AI limitations"
        ],
        year: "2024"
    },
    {
        id: 5,
        title: "The Fitness Garage – Gym Website & Booking System",
        slug: "fitness-garage",
        description:
            "A professional website designed to establish the gym's online presence, featuring session booking, trainer info, and sections for yoga, calisthenics, and aerobics. Built to boost client engagement and trust.",
        longDescription: `
## Overview
The Fitness Garage is a modern, professional gym website designed to establish a strong online presence for the fitness center. It combines stunning visuals with practical functionality to drive client engagement and bookings.

## Key Features

### 📅 Session Booking System
A streamlined booking system allows members to:
- View available class schedules
- Book sessions for yoga, calisthenics, and aerobics
- Manage their bookings and cancellations
- Receive confirmation notifications

### 👨‍🏫 Trainer Profiles
Detailed profiles for each trainer showcasing:
- Expertise and specializations
- Certifications and experience
- Class schedules and availability
- Client testimonials

### 🧘 Class Categories
Dedicated sections for different fitness disciplines:
- **Yoga**: Various styles from beginner to advanced
- **Calisthenics**: Bodyweight training programs
- **Aerobics**: High-energy cardio sessions
- **Personal Training**: One-on-one coaching options

### 📱 Responsive Design
Fully optimized for all devices:
- Mobile-first approach
- Touch-friendly navigation
- Fast loading times
- PWA capabilities

## Technical Stack
- **Framework**: Next.js for optimal performance and SEO
- **Styling**: Tailwind CSS for modern, consistent design
- **Animations**: Framer Motion for smooth transitions
- **Booking Logic**: Custom booking engine with availability management
- **Deployment**: Vercel for reliable hosting

## Business Impact
- 50% increase in online booking inquiries
- 35% reduction in phone call volume for bookings
- Improved brand perception and trust
- Higher search engine rankings
        `,
        image: "/gym.jpg",
        tags: ["Next.js", "Tailwind CSS", "Booking System", "Fitness", "Frontend"],
        categories: ["Full Stack"],
        liveUrl: "https://thefitnessgarage.vercel.app",
        githubUrl: "",
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        features: [
            "Online session booking system",
            "Trainer profiles and schedules",
            "Multiple class categories",
            "Mobile-responsive design",
            "Contact form integration",
            "Gallery and testimonials"
        ],
        challenges: [
            "Building an intuitive booking flow for all age groups",
            "Optimizing images for fast load times",
            "Implementing real-time availability updates"
        ],
        year: "2024"
    },
    {
        id: 6,
        title: "Navigate AI - Object Tracker",
        slug: "navigate-ai",
        description:
            "Real-time YOLO + OpenCV-based vehicle detection and multi-object tracker with timestamping and counting.",
        longDescription: `
## Overview
Navigate AI is a cutting-edge computer vision system that performs real-time vehicle detection and multi-object tracking. Built using YOLO and OpenCV, it provides accurate counting and timestamping capabilities for traffic analysis and monitoring applications.

## 🏆 Hackathon Winner
This project demonstrated innovative use of computer vision technology and secured recognition at a hackathon competition.

## Key Features

### 🚗 Vehicle Detection
State-of-the-art detection using YOLO:
- Real-time vehicle identification
- Multiple vehicle class detection (cars, trucks, buses, bikes)
- Confidence scoring
- Bounding box visualization

### 🎯 Multi-Object Tracking
Sophisticated tracking algorithms:
- Unique ID assignment for each vehicle
- Path trajectory visualization
- Re-identification after occlusion
- Track persistence across frames

### ⏱️ Timestamping System
Precise temporal logging:
- Entry and exit timestamps
- Duration in frame calculation
- Event logging for analytics
- Video timestamp correlation

### 📊 Vehicle Counting
Accurate counting mechanisms:
- Directional counting (in/out)
- Lane-specific counting
- Hourly/daily aggregation
- Count verification algorithms

### 📹 Video Processing
Flexible input handling:
- Live camera feed support
- Video file processing
- Multiple resolution support
- Frame rate optimization

## Technical Implementation
- **Detection**: YOLOv8 for object detection
- **Tracking**: OpenCV with custom algorithms
- **Processing**: Python with NumPy optimization
- **Visualization**: Real-time overlay rendering
- **Interface**: Streamlit for web deployment

## Use Cases
- Traffic flow analysis
- Parking lot management
- Urban planning data collection
- Security and surveillance
        `,
        image: navigateaiimg,
        tags: ["YOLO", "OpenCV", "Python", "Computer Vision", "Hackathon Winner"],
        categories: ["Computer Vision", "AI/ML"],
        liveUrl: "https://navigateai.streamlit.app/",
        githubUrl: "https://github.com/singhalansh/object-detection-and-tracking",
        techStack: ["Python", "YOLO", "OpenCV", "NumPy", "Streamlit"],
        features: [
            "Real-time vehicle detection",
            "Multi-object tracking with IDs",
            "Entry/exit timestamping",
            "Directional vehicle counting",
            "Path trajectory visualization",
            "Web-based interface"
        ],
        challenges: [
            "Maintaining tracking accuracy during occlusion",
            "Optimizing for real-time performance",
            "Handling various lighting conditions"
        ],
        year: "2024"
    },
];

export const categories = [
    "All",
    "AI Agents",
    "AI/ML",
    "Computer Vision",
    "Full Stack",
    "Mobile",
];

// Get project by slug
export const getProjectBySlug = (slug) => {
    return projects.find((project) => project.slug === slug);
};

// Get all project slugs for routing
export const getAllProjectSlugs = () => {
    return projects.map((project) => project.slug);
};
