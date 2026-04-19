import { FaTrash, FaEdit } from "react-icons/fa";
function NotePreview({ note, onDelete, onEdit })  {
  if (!note) {
    return (
      <div className="note-preview empty">
        <p>اختر ملاحظة لعرض محتواها</p>
      </div>
    );
  }

  return (
    <div className="note-preview">
      <h2>{note.title}</h2>
      <p>{note.content}</p>

      <div className="preview-buttons">
        <button className="edit-btn" onClick={() => onEdit(note)}>
  <FaEdit /> تعديل
</button>

<button className="delete-btn" onClick={() => onDelete(note.id)}>
  <FaTrash /> حذف
</button>
      </div>
    </div>
  );
}

export default NotePreview;