// Main App Component
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tasks on component mount
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const data = await getTasks();
            setTasks(data);
            setError(null);
        } catch (err) {
            setError('Failed to load tasks. Make sure the backend server is running.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddTask = async (taskData) => {
        try {
            if (editingTask) {
                // Update existing task
                const updated = await updateTask(editingTask._id, taskData);
                setTasks(tasks.map(t => t._id === updated._id ? updated : t));
                setEditingTask(null);
            } else {
                // Create new task
                const newTask = await createTask(taskData);
                setTasks([newTask, ...tasks]);
            }
        } catch (err) {
            alert('Failed to save task. Please try again.');
            console.error(err);
        }
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteTask = async (id) => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;

        try {
            await deleteTask(id);
            setTasks(tasks.filter(t => t._id !== id));
        } catch (err) {
            alert('Failed to delete task. Please try again.');
            console.error(err);
        }
    };

    const handleCancelEdit = () => {
        setEditingTask(null);
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>✨ Task Manager</h1>
                <p>Stay organized and productive</p>
            </header>

            <main className="app-main">
                <TaskForm
                    onSubmit={handleAddTask}
                    editingTask={editingTask}
                    onCancel={handleCancelEdit}
                />

                {loading ? (
                    <div className="loading">Loading tasks...</div>
                ) : error ? (
                    <div className="error">{error}</div>
                ) : (
                    <TaskList
                        tasks={tasks}
                        onEdit={handleEditTask}
                        onDelete={handleDeleteTask}
                    />
                )}
            </main>

            <footer className="app-footer">
                <p>Built with ❤️ by Nidhi Tripathi | GlobalTrend Internship</p>
            </footer>
        </div>
    );
}

export default App;
