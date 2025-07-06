export default function DreamList({ dreams, onLike }) {
  return (
    <div className="dream-list">
      {dreams.map(d => (
        <div key={d.id} className="dream-card">
          <div className="dream-header">{d.username}</div>
          <div className="dream-text">{d.text}</div>
          <button
            className="like-button"
            onClick={() => onLike(d.id)}
          >
            ❤️ {d.likes}
          </button>
        </div>
      ))}
    </div>
  );
}
