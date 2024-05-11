import './styles/app.scss';
import 'simplebar-react/dist/simplebar.min.css';
import Router from './components/routes/Router';

function App() {
  return (
    <div className={'page-wrapper'}>
      <Router />
    </div>
  );
}

export default App;
