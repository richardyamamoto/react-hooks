import React, { useState } from 'react';

function App() {
  const [techList, setTechList] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  const handleChange = event => {
    setNewTech(event.target.value);
  };

  const handleAdd = () => {
    setTechList([...techList, newTech]);
    setNewTech('');
  };
  return (
    <>
      <ul>
        {techList.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input type="text" value={newTech} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
