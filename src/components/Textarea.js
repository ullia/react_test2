import React, { useState, useEffect, useCallback } from 'react';
import './Textarea.scss';

const Textarea = ({ status }) => {
    // const [ textAreaProps, setTextAreaProps ] = useState({
    //     placeholder : '텍스트를 입력하세요',
    //     value : '',
    //     textcount : 0,
    //     active : false,
    // });

    const placeholder = '텍스트를 입력하세요';
    const [value, setValue] = useState('');
    const [textcount, setTextcount] = useState(0);
    const [active, setActive] = useState(false);
    
    // const { placeholder, value, textcount, active } = textAreaProps;

    useEffect (() => {
        // console.log(textcount);
        // setTextAreaProps({
        //     ...textAreaProps, 
        //     textcount: value.length,
        //     active: (textcount > 0 ? true : false),
        // });
        setTextcount(value.length);
        setActive(textcount > 0 ? true : false);
    }, [value, textcount]);

    const onChange = useCallback((e) => {
        e.preventDefault();

        // setTextAreaProps({
        //     ...textAreaProps, 
        //     value : e.target.value,
        // });
        setValue(e.target.value);
    }, [value]);

    const txtBtn = <button className="textarea__button" type="button">Save</button>;

    return (
        <div className={"form__textarea " + (status ? status : "")}>
            <div className={"textarea__wrap " + (active ? active : "")}>
                <textarea name="textarea__box" id="textarea__box" rows="8" 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={status}
                    readOnly={status}
                ></textarea>
                <span className="textarea__counter">{textcount}</span>
            </div>
            {!active ? active : txtBtn}
        </div>
    )
}

export default Textarea;
