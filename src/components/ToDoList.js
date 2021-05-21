import React from "react";

const ToDoList = ({ list, setList }) => {
    const handleChecked = (item) => {
        itemChecked(item);
    };

    const itemChecked = (item) => {
        const newList = list.map((i) => {
            if (item.id === i.id) {
                item.completed = true;
                return item;
            } else return i;
        });
        setList(newList);
    };
    const handleDelete = (item) => {
        const newList =  list.filter((i) => item.id !== i.id);
        setList(newList);
    };
    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            id={item.id}
                            value={item.name}
                            defaultChecked={item.completed}
                            onChange={(e) => handleChecked(item)}
                        />
                        {item.name}
                        <button onClick={() => handleDelete(item)}>
                            Delete
                        </button>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;
