import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function DreamForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit({
      id: uuidv4(),
      username: username.trim() || 'Anonymous',
      text: text.trim(),
      likes: 0
    });
    setText('');
    setUsername('');
  };

  return (
    <form className="dream-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username (optional)"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <textarea
        placeholder="What did you dream last night?"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
}
