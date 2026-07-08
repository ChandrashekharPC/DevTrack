🚩 Milestone 3: Database Design (ER Diagram & Schema)
Goal

By the end of this milestone, you'll understand:

What tables we need
Why we need them
How they relate to each other
Primary Keys and Foreign Keys
One-to-One, One-to-Many, Many-to-Many relationships

This is a very common interview topic.

Step 1: Identify the Main Entities

Let's think about our application.

We have:

Users

Projects

Issues

Comments

Attachments

Notifications

Roles

Activity Logs

Each of these becomes a table in MySQL.

Step 2: User Table

Every user logs into the system.

users
Column	Type	Description
id	BIGINT	Primary Key
first_name	VARCHAR(100)	First Name
last_name	VARCHAR(100)	Last Name
email	VARCHAR(150)	Login Email
password	VARCHAR(255)	Encrypted Password
role_id	BIGINT	FK → Roles
status	VARCHAR(20)	Active/Inactive
created_at	TIMESTAMP	Creation Date

Primary Key

id
Step 3: Roles Table

Instead of storing

ADMIN
DEVELOPER
TESTER
MANAGER

inside every user,

we store them in another table.

roles
id	role_name
1	ADMIN
2	MANAGER
3	DEVELOPER
4	TESTER

Relationship

Role

↓

Many Users

This is called

One-to-Many

Step 4: Projects Table

Each company has many projects.

projects
Column	Type
id	BIGINT
project_name	VARCHAR
description	TEXT
start_date	DATE
end_date	DATE
status	VARCHAR
manager_id	BIGINT

Notice

manager_id

points to

users.id

because a manager is also a user.

Step 5: Issues Table

This is the heart of the project.

issues
Column	Type
id	BIGINT
title	VARCHAR
description	TEXT
priority	VARCHAR
status	VARCHAR
issue_type	VARCHAR
deadline	DATE
project_id	BIGINT
assigned_to	BIGINT
reported_by	BIGINT
created_at	TIMESTAMP

Here

project_id

connects to

projects

while

assigned_to

and

reported_by

connect to

users
Step 6: Comments

Every issue has comments.

Issue

↓

Comment

↓

Comment

↓

Comment
comments
Column	Type
id	BIGINT
issue_id	BIGINT
user_id	BIGINT
comment	TEXT
created_at	TIMESTAMP
Step 7: Attachments

Sometimes developers upload screenshots.

Issue

↓

Screenshot.png

↓

ErrorLog.txt

↓

Video.mp4

Table

attachments
id	BIGINT
issue_id	BIGINT
file_name	VARCHAR
file_url	VARCHAR
Step 8: Notifications

Example

Issue Assigned

↓

Notify Developer

Table

notifications
id
user_id
title
message
is_read
Step 9: Activity Logs

Very useful.

Every activity is recorded.

Example

John

Created Issue

10:20 AM

Table

activity_logs
id
user_id
activity
created_at
Relationships
Role
 │
 │ 1
 │
 ▼
Users
 │
 │ 1
 │
 ▼
Projects
 │
 │ 1
 │
 ▼
Issues
 │
 ├────────► Comments
 │
 ├────────► Attachments
 │
 └────────► Notifications
Question 🤔

Should one project have only one manager, or should it support multiple managers?

For Version 1, we'll keep it one manager per project because it's simpler and enough for interviews. Later, we can extend it.

A Small Improvement (Real Company Design)

Instead of storing values like:

HIGH

LOW

MEDIUM

or

OPEN

IN_PROGRESS

DONE

as plain strings, we'll use Java Enums in the backend. This reduces bugs and makes the code cleaner.

Example:

public enum IssuePriority {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL
}

We'll learn this when we build the backend.