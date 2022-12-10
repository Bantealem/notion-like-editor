import TypeEditor from './components/text/type-editor';
import Body from './components/body/body';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App container-flex">
      <header className="App-header container-flex">
        <NavBar />
        <Body />
      </header>
      <TypeEditor />
    </div>
  );
}

export default App;
