import React, { Fragment, useState, useEffect } from "react";
import SelectArchitecturesDropDown from './SelectArchitecturesDropDown'
import EditingRelatedArchsGrid from './EditingRelatedArchsGrid'
import CommonModelDiagram from './CommonModelDiagram'
import ModalPopup from './ModalPopup'


const ArchitecturesPage = () => {

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
                <EditingRelatedArchsGrid
                    architectureId={architectureId}
                    architectureName={architectureName}
                />
            </div>
        </Fragment>

    )


}



export default ArchitecturesPage