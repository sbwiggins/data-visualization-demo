import React, { useState } from "react";
import DataGrid, { Column, FormItem, Editing, Pager, Paging } from 'devextreme-react/data-grid';
import AspNetData from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store'
import SelectArchitecturesCellTemplate from './SelectArchitecturesCellTemplate'




const EditingRelatedArchsGrid = (props) => {

    //const url = 'http://stevedemosite.westus.cloudapp.azure.com:7000'
    const url = 'http://localhost:7000'

    // const dataSource = AspNetData.createStore({
    //     key: ["architectureId", "relatedArchId"],
    //     loadUrl: `${url}/api/ArchitectureData/GetRelatedArchitecturesGridData/${props.architectureId}`
    // })

    const dataSource = new CustomStore({
        key: ["architectureId", "relatedArchId"],
        load: async () => (await fetch(`${url}/api/ArchitectureData/GetRelatedArchitecturesGridData/${props.architectureId}`)).json(),
        byKey: (key) => { },
        insert: async (values) => (await fetch(`${url}/api/ArchitectureData/GetRelatedArchitecturesGridData/${props.architectureId}`)).json(),
        update: (key, values) => { },
        remove: (key) => { },
        errorHandler: (error) => console.log(error.message)
    })

    const newRowHandler = (e) => {

        e.data.architectureId = props.architectureId
        e.data.architectureName = props.architectureName
        e.data.relateTypeId = 1

    }

    return (
        <div id='editing-related-architectures-grid'>
            <h2 className='header-text-color'>Create New Relationships for {props.architectureName}</h2>
            <DataGrid
                dataSource={dataSource}
                showBorders={true}
                allowColumnResizing={true}
                loadPanel={{ enabled: true }}
                filterRow={{ visible: true, applyfilter: "auto" }}
                onInitNewRow={newRowHandler}
            >
                <Paging defaultPageSize={10} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={[5, 10, 20]}
                    showInfo={true} />
                <Editing
                    mode="row"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}>
                </Editing>
                <Column
                    dataField="architectureId"
                    alignment='center'
                    caption='Architecture ID'
                    allowEditing={false}
                    width={125}
                />
                <Column
                    dataField="architectureName"
                    alignment='center'
                    caption='Architecture Name'
                    allowEditing={false}
                    width={175}
                />
                <Column
                    dataField="relatedArchId"
                    alignment='center'
                    caption='Related Architecture ID'
                    allowEditing={false}
                    width={140}
                />
                <Column
                    dataField="relatedArchName"
                    alignment='center'
                    caption='Related Architecture Name'
                    editCellRender={SelectArchitecturesCellTemplate}
                    width={175}
                />
                <Column
                    dataField="relateTypeId"
                    alignment='center'
                    caption='Relationship Type'
                    allowEditing={false}
                    width={120}
                    lookup={{
                        dataSource: AspNetData.createStore({
                            key: "relateTypeId",
                            loadUrl: `${url}/api/ArchitectureData/GetRelateTypesDropDown`
                        }),
                        displayExpr: "relateTypeName",
                        valueExpr: "relateTypeId"
                    }}
                />
            </DataGrid>
        </div>
    )

}

export default EditingRelatedArchsGrid