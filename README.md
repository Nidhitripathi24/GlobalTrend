# 📝 Task Management Application

A simple and elegant full-stack Task Management Web Application built for the GlobalTrend internship assignment.

## ✨ Features

- ✅ Create, Read, Update, and Delete (CRUD) tasks
- 📊 Task status management (Pending, In Progress, Completed)
- 🎨 Modern and responsive UI design
- 💾 Persistent data storage with MongoDB
- 🚀 Fast and lightweight Vite-powered frontend
- 🔄 Real-time task updates

## 🛠️ Tech Stack

### Frontend
- **React** (v18+) - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation)
- npm (comes with Node.js)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Nidhitripathi24/GlobalTrend.git
cd GlobalTrend
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start MongoDB (if not running already)
# On Windows: Start MongoDB service from Services
# On Mac/Linux: brew services start mongodb-community (if using Homebrew)

# Start the backend server
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
GlobalTrend/
├── backend/
│   ├── models/
│   │   └── Task.js          # Task schema definition
│   ├── routes/
│   │   └── tasks.js         # CRUD API routes
│   ├── db.js                # MongoDB connection
│   ├── server.js            # Express server setup
│   ├── .env                 # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx    # Add/Edit task form
│   │   │   ├── TaskList.jsx    # Display all tasks
│   │   │   └── TaskItem.jsx    # Individual task card
│   │   ├── App.jsx             # Main application
│   │   ├── App.css             # Styling
│   │   └── api.js              # API integration
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get single task by ID |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Sample Request Body (POST/PUT)

```json
{
  "title": "Complete assignment",
  "description": "Finish the GlobalTrend internship task",
  "status": "in-progress"
}
```

## 🎯 Usage

1. **Create a Task**: Fill in the form at the top with task title, description, and status, then click "Add Task"
2. **View Tasks**: All tasks are displayed in a responsive grid below the form
3. **Edit a Task**: Click the ✏️ (edit) button on any task card
4. **Delete a Task**: Click the 🗑️ (delete) button and confirm
5. **Update Status**: Edit a task to change its status between Pending, In Progress, and Completed

## 🎨 Screenshots

The application features:
- Beautiful gradient background
- Card-based task layout
- Color-coded status badges
- Smooth hover animations
- Fully responsive design for mobile and desktop

## 🔧 Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGODB_URI=mongodb://localhost:27017/taskmanagement
PORT=5000
```

## 🧪 Testing

### Manual Testing Steps

1. Start both backend and frontend servers
2. Open browser to `http://localhost:5173`
3. Create a new task with all fields
4. Verify task appears in the list
5. Edit the task and verify changes
6. Delete the task and confirm removal
7. Test responsive design by resizing browser window

## 🚢 Deployment

### Backend Deployment (Example: Render/Railway)
1. Create a new web service
2. Connect your GitHub repository
3. Set environment variables (MONGODB_URI)
4. Deploy

### Frontend Deployment (Example: Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Update API_URL in `src/api.js` to your backend URL

## 👨‍💻 Developer

**Nidhi Tripathi**
- GitHub: [@Nidhitripathi24](https://github.com/Nidhitripathi24)
- Email: tripathinidhi172@gmail.com

## 📝 License

This project is created for the GlobalTrend Full Stack Development Internship assessment.

## 🙏 Acknowledgments

- GlobalTrend team for the opportunity
- React and Node.js communities for excellent documentation

---

Made with ❤️ for GlobalTrend Internship Assignment
