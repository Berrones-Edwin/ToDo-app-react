const KEY = "todos";
export const saveLocalStorage = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos));
};

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};
