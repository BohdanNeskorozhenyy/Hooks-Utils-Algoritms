const scrollPage = {
    toXY: (x, y) => window.scrollTo(x, y),
    toTop: () => window.scrollTo(0, 0),
    to: (id, block = 'center', behavior = 'smooth') => {
        const element = document.getElementById(id);
        element && element.scrollIntoView({ block, behavior });
    },
};

export default scrollPage;