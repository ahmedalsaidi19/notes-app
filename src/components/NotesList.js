function NotesList({ notes, onSelectNote }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="empty-message">لا توجد ملاحظات بعد</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              className="note-item"
              onClick={() => onSelectNote(note.id)}
            >
              {note.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesList;