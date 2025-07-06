import { useState, useEffect } from 'react';
import DreamForm from '../components/DreamForm';
import DreamList from '../components/DreamList';

export default function Home() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('dreams')) || [];
    setDreams(stored);
  }, []);

  const addDream = (dream) => {
    setDreams(prev => {
      const updated = [dream, ...prev];
      localStorage.setItem('dreams', JSON.stringify(updated));
      return updated;
    });
  };

  const likeDream = (id) => {
    setDreams(prev => {
      const updated = prev.map(d =>
        d.id === id ? { ...d, likes: d.likes + 1 } : d
      );
      localStorage.setItem('dreams', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Doraemon_'s Dream Center</h1>
      </header>
      <DreamForm onSubmit={addDream} />
      <DreamList dreams={dreams} onLike={likeDream} />
    </div>
  );
}
