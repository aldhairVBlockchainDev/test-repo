import {useState} from 'react';

const CustomInput = (props) => {
    const [text,setText] = useState("");
    const {type, name} = props;

    return (
        <div className='card'>
            <h1>Custom Input - {name}</h1>
            <div>            
                <input type={type} value={text} onChange={(e)=>setText(e.target.value)}></input>
                {
                    text === "" && <p>Write something</p>
                }
                {
                    text != "" && <h1>{text}</h1>
                }
            </div>
        </div>
    )
}

export default CustomInput;