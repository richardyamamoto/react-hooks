import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techList, setTechList] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleChange = event => {
    setNewTech(event.target.value);
  };

  const handleAdd = () => {
    setTechList([...techList, newTech]);
    setNewTech('');
  };

  useEffect(() => {
    const storageTechList = localStorage.getItem('techList');

    if (storageTechList) {
      setTechList(JSON.parse(storageTechList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techList', JSON.stringify(techList));
  }, [techList]);

  const techListSize = useMemo(() => {
    return techList.length;
  }, [techList]);

  return (
    <>
      <ul>
        {techList.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Lista possui {techListSize} tecnologias</strong>
      <br />
      <input type="text" value={newTech} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
