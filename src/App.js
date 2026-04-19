import hsoubLogo from "./hsoub-logo.png"
import "./App.css";
import { useState, useEffect } from "react";
import NotePreview from "./components/NotePreview";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [creating, setCreating] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // تحميل الملاحظات من التخزين المحلي
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // حفظ الملاحظات في التخزين المحلي عند أي تغيير
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNoteClick = () => {
    setCreating(true);
    setSelectedNote(null);
    setTitle("");
    setContent("");
  };

  const handleSelectNote = (id) => {
    setSelectedNote(id);
    setCreating(false);
  };

  const handleSaveNote = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("الرجاء إدخال عنوان ومحتوى الملاحظة");
      return;
    }

    // تعديل ملاحظة موجودة
    if (selectedNote) {
      const updatedNotes = notes.map((note) =>
        note.id === selectedNote
          ? { ...note, title: title, content: content }
          : note
      );

      setNotes(updatedNotes);
      setSelectedNote(null);
      setCreating(false);
      setTitle("");
      setContent("");
      return;
    }

    // إضافة ملاحظة جديدة
    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
    setCreating(false);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setSelectedNote(note.id);
    setCreating(true);
  };

  const activeNote = notes.find((n) => n.id === selectedNote);

  return (
    <div className="app-container">
      <h1>تطبيق الملاحظات</h1>

<img src={hsoubLogo} alt="شعار أكاديمية حاسوب" className="hasoub-logo" />

      <NotesList notes={notes} onSelectNote={handleSelectNote} />

      <NotePreview
        note={activeNote}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />

      <button className="add-btn" onClick={handleAddNoteClick}>
        إضافة ملاحظة
      </button>

      {creating && (
        <NoteForm
          title={title}
          content={content}
          onTitleChange={(e) => setTitle(e.target.value)}
          onContentChange={(e) => setContent(e.target.value)}
          onSubmit={handleSaveNote}
        />
      )}
    </div>
  );
}

export default App;