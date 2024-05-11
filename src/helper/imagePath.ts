import {productionPath} from '../root/paths';

const imagePath = (pathName: string) => {
    const fullPath = process.env.NODE_ENV === 'production' ? `/${productionPath}/img/content/` : `/img/content/`;

    return fullPath + pathName;
};

export default imagePath;
