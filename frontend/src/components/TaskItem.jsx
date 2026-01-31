// TaskItem Component - displays individual task with actions
function TaskItem({ task, onEdit, onDelete }) {
    const getStatusClass = (status) => {
        switch (status) {
            case 'completed':
                return 'status-completed';
            case 'in-progress':
                return 'status-in-progress';
            default:
                return 'status-pending';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="task-item">
            <div className="task-header">
                <h3 className="task-title">{task.title}</h3>
                <span className={`status-badge ${getStatusClass(task.status)}`}>
                    {task.status}
                </span>
            </div>

            {task.description && (
                <p className="task-description">{task.description}</p>
            )}

            <div className="task-footer">
                <span className="task-date">Created: {formatDate(task.createdAt)}</span>
                <div className="task-actions">
                    <button onClick={() => onEdit(task)} className="btn-icon btn-edit" title="Edit task">
                        ✏️
                    </button>
                    <button onClick={() => onDelete(task._id)} className="btn-icon btn-delete" title="Delete task">
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
