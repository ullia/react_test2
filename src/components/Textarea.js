import React, { useState, useEffect, useCallback } from 'react';
import './Textarea.scss';

const Input = ({ status }) => {
    const [ textarea, setTextarea ] = useState({
        placehold : '텍스트를 입력하세요',
        value : '',
        textcount : 0,
        active : false,
    });
    const { placehold, value, textcount, active } = textarea;

    useEffect (() => {
        // console.log(textcount);
        setTextarea({
            ...textarea, 
            textcount: value.length,
            active: (textcount > 0 ? true : false),
        });
    }, [value, textcount]);

    const onChange = useCallback((e) => {
        e.preventDefault();

        setTextarea({
            ...textarea, 
            value : e.target.value,
        });
    }, [textarea]);

    const txtBtn = <button className="textarea__button" type="button">Save</button>;

    return (
        <div className={"form__textarea " + (status ? status : "")}>
            <div className={"textarea__wrap " + (active ? active : "")}>
                <textarea name="textarea__box" id="textarea__box" rows="8" 
                    placeholder={placehold}
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

export default Input;
