import { deleteTodo } from ".././redux/todoSlice";
import { useDispatch } from "react-redux";


export default function Todo({item}) {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo({ id: item.id }));
    };

    return <div className="todosItem">
                <span className="todoText">{item.title}</span>
                <button 
                onClick={handleDelete} 
                className="btnTrash"></button>
            </div>;
}