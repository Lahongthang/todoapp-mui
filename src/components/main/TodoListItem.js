import { useSelector } from "react-redux";
import { selectTodoById } from "../../features/todos/todosSlice";

import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));

  return (
    <ListItem
      secondaryAction={
        <IconButton>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={todo.text} />
      </ListItemButton>

      <ListItemButton dense>
        <IconButton>
          <EditIcon/>
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
