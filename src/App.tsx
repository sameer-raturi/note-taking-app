import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NewNote from "./components/newNote";
import EditNote from "./components/editNote";

import { NoteData, RawNote, RawNoteData, Tag } from "./constants/types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useMemo } from "react";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      const tagsPresentInTagIds = tags.filter((tag) =>
        note.tagIds.includes(tag.id)
      );
      return {
        ...note,
        tags: tagsPresentInTagIds,
      };
    });
  }, [notes, tags]);

  const onCreateNode = (note: NoteData) => {
    const { tags: _tags, ...data } = note;
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        ...data,
        id: String(Date.now()),
        tagIds: _tags.map((tag) => tag.id),
      },
    ]);
  };

  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Home Screen</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>id</h1>} />
          <Route path="edit" element={<EditNote />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Container>
  );
}

export default App;
