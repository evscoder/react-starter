import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store';
import {paths} from './root/paths';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter basename={paths.basename}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
