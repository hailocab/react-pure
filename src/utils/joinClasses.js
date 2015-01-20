export default (...cls) =>  {
    return cls
    .reduce((res, c) => {
        if (c) res.push(c);
        return res;
    }, [])
    .join(' ');
};
