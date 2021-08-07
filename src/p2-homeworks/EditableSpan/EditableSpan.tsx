import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../HomemadeInpButCheck/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function EditableSpan() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div>
            <div style={{fontSize: "20px", marginTop: "60px"}}>EditableSpan:</div>

            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

        </div>
    )
}

export default EditableSpan
