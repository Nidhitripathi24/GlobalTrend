// TaskList Component - displays all tasks in a grid
import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <h3>📋 No tasks yet!</h3>
                <p>Create your first task to get started.</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            <h2>📝 Your Tasks ({tasks.length})</h2>
            <div className="tasks-grid">
                {tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
