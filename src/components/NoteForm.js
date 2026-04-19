function NoteForm({ title, content, onTitleChange, onContentChange, onSubmit }) {
  return (
    <div className="note-form">
      <h2>إضافة ملاحظة جديدة</h2>

      <input
        type="text"
        placeholder="عنوان الملاحظة"
        value={title}
        onChange={onTitleChange}
        className="form-input"
      />

      <textarea
        rows="8"
        placeholder="محتوى الملاحظة"
        value={content}
        onChange={onContentChange}
        className="form-input"
      />

      <button className="button" onClick={onSubmit}>
        حفظ
      </button>
    </div>
  );
}

export default NoteForm;