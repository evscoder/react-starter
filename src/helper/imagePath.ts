const imagePath = (pathName: string) => {
    const fullPath = process.env.NODE_ENV === 'production' ? `/react-starter/img/content/` : `/img/content/`;

    return fullPath + pathName;
};

export default imagePath;
