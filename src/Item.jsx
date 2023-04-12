import "./App.css"
import axios from 'axios';

const Item = (props) => {
    return(
        <>
            <div className='row'>
                <div className='cell'>
                    {props.user.id}
                </div>
                <div className='cell'>
                    {props.user.username}
                </div>
                <div className='cell'>
                    {props.user.password}
                </div>
                <div className='cell'>
                    {props.user.email}
                </div>
                <div className='cell'>
                    <div className="buttons">
                        <button onClick={async (e) => {await axios.delete(`http://localhost:5000/user/${props.user.id}`); }}>
                            Видалити
                        </button>
                        <button onClick={async (e) => {
                            let username = prompt("Введите имя пользователя");
                            const form = {
                                username : username,
                                id: props.user.id
                              };
                            await axios.post(`http://localhost:5000/user/update`, form); 
                            }}>
                            Обновить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;