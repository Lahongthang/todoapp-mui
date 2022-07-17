import TodoList from "./components/main/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const containerTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#f2f2f2",
          maxWidth: '922px',
          margin: 'auto'
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={containerTheme}>
      <Container>
        <Paper elevation={3}>
          <Grid container>
            <TodoList />
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
