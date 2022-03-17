import { React, useState, useEffect } from "react";
import useFetch from "../fetcher/useFetch";
import { Typography, Container, Grid } from "@material-ui/core";
import NoteList from "../components/NoteList";

export default function Notes() {
  const { error, isLoading, data } = useFetch("http://localhost:8000/notes");

  const [notes, setNotes] = useState(null);

  useEffect(() => {
    if (data) {
      setNotes(data);
    }
  }, [data]);

  return (
    <Container>
      {error && (
        <Container
          maxWidth="md"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h4" color="error">
            {error}
          </Typography>
        </Container>
      )}
      {isLoading && (
        <Container
          maxWidth="md"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h4" color="primary">
            Loading...
          </Typography>
        </Container>
      )}
      {/* <Grid container spacing={3}>
        {notes &&
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
      </Grid> */}
      {notes && <NoteList notes={notes} setNotes={setNotes} />}
    </Container>
  );
}
