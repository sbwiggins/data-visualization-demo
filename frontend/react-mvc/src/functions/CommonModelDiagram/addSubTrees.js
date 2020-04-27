import AspNetData from 'devextreme-aspnet-data-nojquery'
import DataSource from 'devextreme/data/data_source';
import buildLinksAndLaunchDiagram from './buildLinksAndLaunchDiagram'
import * as _ from 'underscore'
import Query from 'devextreme/data/query'
import * as go from 'gojs';

const addSubTrees = (relatedArchData, architectureId) => {

    let filter = []

    relatedArchData.forEach(node => {
        if (node.architectureId != architectureId) {
            filter.push(["architectureId", "=", node.architectureId])
            filter.push(",or,")
        }

    })

    filter.pop()

    const subTreeRelatedArchOptions = {

        filter: filter,
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
            loadUrl: `http://localhost/api/ArchitectureData/GetAllRelatedArchitectures`

        }),

    }

    const subTreeRelatedArchDataSource = new DataSource(subTreeRelatedArchOptions)
    //place a ' next to each repeating architectureId to prevent the model being initilized with duplicate keys
    subTreeRelatedArchDataSource.load().done(subTreeRelatedArchData => {

        let matches = []

        subTreeRelatedArchData.forEach(node => {

            if (_.findIndex(relatedArchData, { key: node.key }) > -1) {

                var index = _.findIndex(matches, { key: node.key })


                if (index == -1) {
                    matches.push({ key: node.key, hit: "'" })
                    node.key = node.key + "'"
                }
                else {
                    matches[index].hit = matches[index].hit + "'"
                    node.key = node.key + matches[index].hit
                }
            }

            relatedArchData.push(node)
        })

        buildLinksAndLaunchDiagram([...relatedArchData])

    })
}

export default addSubTrees