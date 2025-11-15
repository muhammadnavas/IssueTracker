# Issue Tracker

This is a simple **React-based Issue Tracker** application that allows users to add issues via a form and display them in a table. The application uses **Tailwind CSS** for styling.

---

## Features

1. **Add Issues**:
   - Users can add new issues using a form with fields for title, owner, status, effort, and due date.

2. **Display Issues**:
   - Issues are displayed in a responsive table with columns for ID, title, owner, status, creation date, effort, and due date.

3. **Dynamic State Management**:
   - The application dynamically updates the issue list when a new issue is added.

4. **Styling**:
   - Tailwind CSS is used for clean and responsive styling.

---

## File Structure

### **`src` Folder**
- **`App.js`**:
  - The main component that renders the issue form and issue table.
  - Manages the state of the issues list.
- **`IssueForm.js`**:
  - A form component for adding new issues.
  - Handles user input and form submission.
- **`IssueTable.js`**:
  - A table component for displaying the list of issues.
  - Dynamically renders rows based on the issues passed as props.

---

## Installation

### Prerequisites
- Node.js and npm installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadnavas/IssueTracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd IssueTracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
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

---

## Technologies Used

1. **React**:
   - Component-based architecture for building the UI.
2. **Tailwind CSS**:
   - Utility-first CSS framework for styling.
3. **JavaScript**:
   - Logic for handling state and events.

---

## Components

### **`App.js`**
- Manages the state of the issues list.
- Passes the issues list to `IssueTable` and the `addIssue` function to `IssueForm`.

### **`IssueForm.js`**
- A controlled form component for adding new issues.
- Handles form submission and resets the form after submission.

### **`IssueTable.js`**
- Displays the list of issues in a table format.
- Dynamically renders rows based on the `issues` prop.

---

## Author

Created by **[Muhammad Navas]**.
