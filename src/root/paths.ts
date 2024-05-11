export const productionPath = 'react-starter';

export const paths = {
    api: process.env.NODE_ENV === 'production' ? `/${productionPath}/data` : 'data',
    basename: process.env.NODE_ENV === 'production' ? productionPath : '',
    index: '/'
};

