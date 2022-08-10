export const SingleNote = (props) => {
  return (
    <div className="note-list">
      <div className="note">
        <div className="note-info">
          <h1>Date: {props.note.date}</h1>
          <span>Note:</span>
          <p>{props.note.note}</p>
        </div>
      </div>
    </div>
  );
};
