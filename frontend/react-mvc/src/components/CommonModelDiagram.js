import React, { Component, Fragment } from "react"
import createCommonModelDiagram from '../functions/CommonModelDiagram/createCommonModelDiagram'
import bindCommonModelDiagram from '../functions/CommonModelDiagram/bindCommonModelDiagram'

class CommonModelDiagram extends Component {

    componentDidMount = () => {
        const commonModelDiagram = createCommonModelDiagram()
        window.commonModelDiagram = commonModelDiagram
        bindCommonModelDiagram(this.props.architectureId, this.props.architectureName)
    }

    render() {
        return (
            <div style={{ position: 'relative' }} >
                <div id='common-model-diagram'></div>
            </div>


        )
    }

}

export default CommonModelDiagram

