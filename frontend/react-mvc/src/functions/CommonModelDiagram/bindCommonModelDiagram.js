import AspNetData from 'devextreme-aspnet-data-nojquery'
import DataSource from 'devextreme/data/data_source';
import addSubTrees from './addSubTrees'
import Query from 'devextreme/data/query'
import * as go from 'gojs';

const bindCommonModelDiagram = (architectureId, architectureName) => {

    var relatedArchOptions = {

        map: item => {
            return {
                key: item.relatedArchId.toString(),
                text: item.relatedArchName,
                architectureId: item.relatedArchId,
                parentArchKey: item.architectureId.toString(),
                parentArchName: item.architectureName
            }
        },
        store: AspNetData.createStore({
            key: "architectureId",
            loadUrl: `http://localhost/api/ArchitectureData/GetRelatedArchitecturesGridData/${architectureId}`
        }),

    }

    var relatedArchDataSource = new DataSource(relatedArchOptions)

    relatedArchDataSource.load().done(relatedArchData => {

        // add root node
        relatedArchData.push({ key: architectureId.toString(), text: architectureName, architectureId: architectureId })

        addSubTrees([...relatedArchData], architectureId)

    })

}

export default bindCommonModelDiagram 