import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledTask } from './styled';
library.add(fas);
export default function Task({ task, onChangeStatus, onDelete, ...props }) {
  return (
    <StyledTask>
      <div className="task">
        <p
          className="task-title"
          style={{
            textDecoration: task.status ? 'line-through' : '',
            opacity: task.status ? 0.2 : 1,
          }}
        >
          {task.name}
        </p>
        {task.status ? (
          <FontAwesomeIcon
            icon="xmark"
            onClick={() => {
              onChangeStatus(task);
            }}
            className="icon"
          />
        ) : (
          <FontAwesomeIcon
            icon="check"
            onClick={() => {
              onChangeStatus(task);
            }}
            className="icon"
          />
        )}
        <FontAwesomeIcon icon="trash" onClick={() => onDelete(task)} className="icon" />
      </div>
    </StyledTask>
  );
}
