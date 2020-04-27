import AspNetData from 'devextreme-aspnet-data-nojquery'
import DataSource from 'devextreme/data/data_source';
import Query from 'devextreme/data/query'
import * as go from 'gojs';

const buildLinksAndLaunchDiagram = (relatedArchData,commonModelDiagram) => {

    let nodeDataArray = []

    let linkDataArray = []

    const relatedViewOptions = {

        store: AspNetData.createStore({
            key: "architectureId",
            loadUrl: "http://localhost/api/ViewData/GetAllRelatedViews"
        }),

    }

    const relatedViewDataSource = new DataSource(relatedViewOptions)

    relatedViewDataSource.load().done(relatedViewData => {

        const relatedViewQuery = Query(relatedViewData)


        let nodeDataArray = relatedArchData
        const nodeDataArrayQuery = Query(nodeDataArray)

        let linkDataArray = relatedArchData.map(node => {

            return {

                from: node.parentArchKey,
                to: node.key,
                text: relatedViewQuery.filter([
                    ["architectureId", "=", node.parentArchKey],
                    "and",
                    ["relatedArchId", "=", node.architectureId]]).toArray().length > 0 ? "+" : null

            }
        })


        commonModelDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

    })
}

export default buildLinksAndLaunchDiagram