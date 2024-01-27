import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store';
import Icons from './Icons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? 'react-starter' : ''}>
        <Provider store={store}>
            <Icons />
            <App />
        </Provider>
    </BrowserRouter>
);
