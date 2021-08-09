import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['JavaScript', 'React', 'Redux']

function SelectAndRadio() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
            <div style={{fontSize: "20px"}}>Select and Radio:</div>
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    )
}

export default SelectAndRadio
