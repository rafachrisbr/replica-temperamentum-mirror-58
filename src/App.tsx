import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Route path="/educacao-familiar/artigo" element={<EducacaoFamiliarArtigo />} />
  );
}

export default App;