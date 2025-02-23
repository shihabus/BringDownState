import { useState } from 'react';
import './App.css';
import { ModalDialog } from './components/ModalDialog';
import { Button } from './components/Button';
import { VerySlowComponent } from './components/VerySlowComponent';
import { AnotherVerySlowComponent } from './components/AnotherSlowComponent';
import { Content } from './components/Content';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
      <div className="container">
        <VerySlowComponent />
        <AnotherVerySlowComponent />
        <Content />
      </div>
    </>
  );
}

export default App;
