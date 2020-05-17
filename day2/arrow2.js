const obj = {
    id: 1,
    name: "MyR&D"
};

const getObj = () => obj;

const getObj2 = () => ({
    id: 2, 
    name: "Development"
});

const getObj3 = () => {
    return {
        id: 2, 
        name: "Development"
    };
};

console.log(getObj3());