# Issue Tracker

This is a simple **MERN Issue Tracker** application that allows users to add issues via a form and display them in a table. The application uses **Tailwind CSS** for styling and connects to a **MongoDB** database via a Node.js backend.

---

## Features

1. **Add Issues**:
   - Users can add new issues using a form with fields for title, owner, status, effort, and due date.

2. **Display Issues**:
   - Issues are displayed in a responsive table with columns for ID, title, owner, status, creation date, effort, and due date.

3. **Dynamic State Management**:
   - The application dynamically updates the issue list when a new issue is added.

4. **Backend Integration**:
   - Issues are stored in a MongoDB database via a Node.js backend.

5. **Styling**:
   - Tailwind CSS is used for clean and responsive styling.

6. **Edit Issues**:
   - Users can edit existing issues directly in the table.
   - Inline editing allows users to modify fields such as title, owner, status, effort, and due date.

---

## File Structure

### **`src` Folder**
- **`App.js`**:
  - The main component that renders the issue form and issue table.
  - Manages the state of the issues list and interacts with the backend API.
- **`IssueForm.js`**:
  - A form component for adding new issues.
  - Handles user input and form submission.
- **`IssueTable.js`**:
  - A table component for displaying the list of issues.
  - Dynamically renders rows based on the issues passed as props.

### **`backend` Folder**
- **`server.js`**:
  - A Node.js server that connects to MongoDB and provides API endpoints for fetching and adding issues.

---

## Installation

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB installed and running locally.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadnavas/IssueTracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd IssueTracker
   ```
3. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```
4. Install dependencies for the backend:
   ```bash
   cd ../backend
   npm install
   ```
5. Start the MongoDB server locally.
6. Start the backend server:
   ```bash
   node server.js
   ```
7. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

---

## Usage

### Adding Issues
1. Fill out the form fields:
   - Title
   - Owner
   - Status (Open/Closed)
   - Effort (numeric value)
   - Due Date
2. Click the **Submit** button to add the issue to the table.

### Viewing Issues
- The issues are displayed in a table below the form.
- Each issue includes details such as ID, title, owner, status, creation date, effort, and due date.

### Editing Issues
- Click on an issue to edit it.
- Modify the fields as needed.
- Click **Submit** to save the changes.

### **Filters**

- **Status Filter**:
  - Allows users to filter issues based on their status (e.g., Open, Closed).
  - Dropdown menu for selecting the desired status.

- **Text Filter**:
  - Enables users to search for issues by title or owner.
  - Case-insensitive search for better usability.

### **Deleting Issues**

- Users can delete issues directly from the table.
- A confirmation option is provided to prevent accidental deletions.
- Once confirmed, the issue is removed from both the frontend and the database.

---

## Technologies Used

1. **React**:
   - Component-based architecture for building the UI.
2. **Tailwind CSS**:
   - Utility-first CSS framework for styling.
3. **Node.js**:
   - Backend server for handling API requests.
4. **MongoDB**:
   - Database for storing issues.
5. **Axios**:
   - Library for making HTTP requests from the frontend to the backend.

---

## Components

### **`App.js`**
- Manages the state of the issues list.
- Passes the issues list to `IssueTable` and the `addIssue` function to `IssueForm`.
- Interacts with the backend API to fetch and save issues.

### **`IssueForm.js`**
- A controlled form component for adding new issues.
- Handles form submission and resets the form after submission.

### **`IssueTable.js`**
- Displays the list of issues in a table format.
- Dynamically renders rows based on the `issues` prop.
- Formats the `createdAt` field to display only the date (`YYYY-MM-DD`).

### **`server.js`**
- Connects to MongoDB and provides API endpoints:
  - **GET `/issues`**: Fetches all issues from the database.
  - **POST `/issues`**: Saves a new issue to the database.
  - **PUT `/issues/:id`**: Updates an existing issue in the database.
  - **DELETE `/issues/:id`**: Removes an issue from the database.

---

## Author

Created by **Muhammad Navas**.
