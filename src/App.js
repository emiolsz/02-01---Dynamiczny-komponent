import './App.css';
import SquareOrCircle from './components/SquareOrCircle';

function App() {
  return (
    <>
      <SquareOrCircle isCircle={true} />
      <SquareOrCircle isCircle={false} />
    </>
  );
}

export default App;
