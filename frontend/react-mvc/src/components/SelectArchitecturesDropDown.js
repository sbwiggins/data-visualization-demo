import React, { useState, useEffect } from 'react'
import { DropDownBox } from 'devextreme-react';
import SelectArchitecturesGrid from './SelectArchitecturesGrid'


const SelectArchitecturesDropDown = (props) => {

    return (
        <div id='select-drop-down'>
            <DropDownBox
                inputAttr={{ id: 'select-text-field' }}
                valueExpr='architectureName'
                deferRendering={false}
                placeholder="Select an Architecture..."
                showClearButton={false}
                onValueChanged={(e) => {
                    let inputField = document.querySelector('#select-text-field')
                    inputField.value = e.value.architectureName
                    props.setArchId(e.value.architectureId)
                    props.setArchName(e.value.architectureName)
                }}
                contentRender={(e) => SelectArchitecturesGrid(e)}
            />
        </div>)

}


export default SelectArchitecturesDropDown