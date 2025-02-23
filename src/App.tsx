import './App.css';
import { VerySlowComponent } from './components/VerySlowComponent';
import { AnotherVerySlowComponent } from './components/AnotherSlowComponent';
import { Content } from './components/Content';
import { ButtonWithModalDialog } from './components/ButtonWithModalDialog';

function App() {


  return (
    <>
      <ButtonWithModalDialog/>
      <div className="container">
        <VerySlowComponent />
        <AnotherVerySlowComponent />
        <Content />
      </div>
    </>
  );
}

export default App;
