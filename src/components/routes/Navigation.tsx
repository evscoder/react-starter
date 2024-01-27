import {Route, Routes} from 'react-router-dom';
import ScreenAuth from './screens/ScreenAuth';

const Navigation = () => {
    return (
        <Routes>
            <Route path={'/'} element={<ScreenAuth />} />
        </Routes>
    );
};

export default Navigation;
