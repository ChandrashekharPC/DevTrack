

🚩 Milestone 2 - Requirement Analysis & Project Planning

Existing Problem

Many companies still struggle to track bugs efficiently.

Problems include:

Bugs are forgotten.
Developers don't know what to work on.
Testers don't know whether bugs are fixed.
Managers can't track project progress.
Duplicate bugs are reported.
No centralized communication.
Our Solution

DevTrack is an AI-powered Bug & Issue Tracking System that helps software teams manage projects, report bugs, assign work, track progress, and collaborate efficiently from a single platform.

Step 2: Who Will Use It?
Role	Responsibilities
Admin	Manage users, roles, projects
Project Manager	Create projects, assign issues
Developer	Fix bugs, update status
Tester	Report and verify bugs
Step 3: Functional Requirements

These are the features our application must provide.

Module 1: Authentication
Register
Login
Logout
Forgot Password
Change Password
JWT Authentication
Role-Based Authorization
Module 2: User Management

Admin can:

Create users
Edit users
Delete users
Assign roles
Module 3: Project Management

Project Manager can:

Create Project
Edit Project
Archive Project
Add Team Members
Module 4: Issue Management

Create Issue

Edit Issue

Delete Issue

Assign Developer

Priority

Deadline

Labels

Status

Module 5: Comments

Every issue will have a discussion thread.

Example:

Developer:
Bug fixed.

Tester:
Still failing.

Developer:
Fixed again.

Manager:
Approved.
Module 6: File Upload

Users can upload

Images
PDFs
Logs
ZIP files
Module 7: Dashboard

Dashboard will show:

Total Projects
Active Projects
Open Bugs
Closed Bugs
High Priority Bugs
Assigned Tasks
Module 8: Notifications

Examples:

Issue Assigned

Deadline Tomorrow

Comment Added

Project Updated
Module 9: Reports

Monthly Reports

Developer Performance

Bug Statistics

Project Progress

Module 10: AI Assistant

This is what makes our project unique.

AI will:

Summarize bug descriptions
Suggest priority
Detect duplicate bugs
Generate test cases
Recommend possible solutions
Step 4: Non-Functional Requirements

These describe how the system should behave.

Security
JWT Authentication
Password Encryption
Role-Based Access
Performance

Response time under 2 seconds.

Scalability

Should support multiple projects and hundreds of users.

Reliability

Data should never be lost.

Maintainability

Code should follow clean architecture.

Step 5: Technologies
Layer	Technology
Frontend	React.js
Backend	Spring Boot
ORM	Hibernate
Database	MySQL
Security	Spring Security + JWT
API Testing	Postman
Version Control	Git
Repository	GitHub
IDE	Eclipse
Build Tool	Maven
Step 6: Future Enhancements

We'll build these after the core project:

Dark Mode
Email Notifications
Mobile Responsive UI
AI Bug Assistant
GitHub Integration
Calendar View
Sprint Board
Kanban Board
Activity Timeline