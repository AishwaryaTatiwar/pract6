// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Book from './Book';
import Gdsfp from './Gdsfp';

function App() {
  return (
    <div className="App">
      <h1>Hi I am Aishwarya</h1>
<ErrorBoundary>
<Book bookName="Let Us C"/>
</ErrorBoundary>
<ErrorBoundary>
<Book bookName="The Hitvada"/>
</ErrorBoundary>
<Gdsfp></Gdsfp>
</div>
  );
}

export default App;
