import React, { useEffect, useState } from "react"

const SelectList = (props) => {
    const [List, SetList] = useState(props.options);
    const [SearchValue, SetSearchValue] = useState('');

    const selectItem = (id, e) => {
        const prevList = [...List];
        const option = prevList.filter(x => x.id === id);
        option[0].isSelected = true;
        SetList(prevList);
        SetSearchValue('');
        document.getElementById(props.inputId).value = '';
    }

    const deleteItem = (id, e) => {
        const prevList = [...List];
        const option = prevList.filter(x => x.id === id);
        option[0].isSelected = false;
        SetList(prevList);
    }

    const inputChange = (e) => {
        SetSearchValue(document.getElementById(props.inputId).value.toLowerCase());
        if(document.getElementById(props.name).classList.contains("d-none")){
            document.getElementById(props.name).classList.remove("d-none");
        }
    }

    const closeList = (e) => {
        document.getElementById(props.name).classList.toggle("d-none")
    }

    useEffect(() => {
        document.body.addEventListener('click', () => {
             document.getElementById(props.name).classList.add("d-none");
        })
    })

    return <div className="selectList" onClick={(e) => { e.stopPropagation() }}>
        <div className="input-section">
            <input
                type="text"
                placeholder={"Search " + props.inputId + "..."}
                id={props.inputId}
                onChange={(e) => inputChange(e)}
                onFocus={() => { document.getElementById(props.name).classList.remove("d-none"); }}
            />
            <i className="fas fa-angle-down" onClick={(e) => closeList(e)}></i>
        </div>

        <div className="selected-options">
            {List.filter(x => x.isSelected).map((item, key) => {
                return <button
                    className="btn-delete-option"
                    key={key}
                    onClick={(e) => deleteItem(item.id, e)}> {item.name}
                    <i className="fas fa-minus-circle"></i>
                </button>
            })}
        </div>

        <div className="options d-none" id={props.name}>
            {List.filter(x => !x.isSelected && x.name.toLowerCase().includes(SearchValue)).map((item, key) => {
                return <p onClick={(e) => selectItem(item.id, e)} key={key}>{item.name}</p>
            })}
        </div>
    </div>
}

export default SelectList;