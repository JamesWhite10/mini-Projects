import React from 'react'
import Dialogs from '../../Dialogs/Dialogs'
import TodoMini from '../../Todo-mini/Todo-mini'
import Greetings from '../../Greetings/Greetings'
import HomemadeInpButCheck from '../../HomemadeInpButCheck/HomemadeInpButCheck'
import EditableSpan from '../../EditableSpan/EditableSpan'

function PreJunior() {
    return (
        <div>
            <Dialogs/>
            <TodoMini/>
            <Greetings/>
            <HomemadeInpButCheck/>
            <EditableSpan/>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз