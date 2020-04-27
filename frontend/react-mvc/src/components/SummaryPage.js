import React, { Fragment, useState, useEffect } from "react";
import LoadPanel from 'devextreme-react/load-panel'
import SelectArchitecturesDropDown from './SelectArchitecturesDropDown'
import RelatedArchitecturesGrid from './RelatedArchitecturesGrid'
import RelatedViewsGrid from './RelatedViewsGrid'
import CommonModelDiagram from './CommonModelDiagram'
import ModalPopup from './ModalPopup'


const SummaryPage = () => {

    const [architectureId, setArchId] = useState(512)
    const [architectureName, setArchName] = useState('IADS Architecture 2')

    useEffect(() => window.CommonModelDiagramComponent = this)

    return (
        <Fragment>
            <div id='select-menu-container'>
                <SelectArchitecturesDropDown
                    setArchId={setArchId}
                    setArchName={setArchName} />
                <ModalPopup
                    buttonText='Show Diagram (.NET)'
                    titleText='Visualization of Architecture Relationships'>
                    <CommonModelDiagram
                        architectureId={architectureId}
                        architectureName={architectureName} />
                </ModalPopup>
            </div>
            <div id='grid-container'>
                <RelatedArchitecturesGrid
                    architectureId={architectureId}
                    architectureName={architectureName}
                />
                <RelatedViewsGrid
                    architectureId={architectureId}
                    architectureName={architectureName}
                />
            </div>
        </Fragment>

    )


}

export default SummaryPage


/* <div id='select-drop-down'>
                    <DropDownBox
                        inputAttr={{ id: 'select-text-field' }}
                        valueExpr='architectureName'
                        deferRendering={false}
                        placeholder="Select an Architecture..."
                        showClearButton={false}
                        onValueChanged={(e) => {
                            let inputField = document.querySelector('#select-text-field')
                            inputField.value = e.value.architectureName
                            this.setArchId(e.value.architectureId)
                            this.setArchName(e.value.architectureName)
                        }}
                        contentRender={(e) => SelectArchitecturesGrid(e)}
                    />
                </div> */