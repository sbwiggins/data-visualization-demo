import React, { useState, useEffect } from 'react'
import { DropDownBox } from 'devextreme-react';
import DataGrid, { Column, Selection, Scrolling, FilterRow, Paging } from 'devextreme-react/data-grid';
import AspNetData from 'devextreme-aspnet-data-nojquery';


const url = 'http://localhost'

const dataSource = AspNetData.createStore({
    key: 'architectureId',
    loadUrl: `${url}/api/ArchitectureData/GetSelectedArchitectureGridData`
});


const SelectArchsGridTemplate = (cellInfo, e) => {
    console.log(cellInfo)
    return (
        <DataGrid
            dataSource={dataSource}
            showBorders={true}
            headerFilter={{ visible: true, allowSearch: true }}
            onSelectionChanged={row => {
                //e.component._popup.hide()
                e.component.option("value", cellInfo.data)
                cellInfo.setValue(row.currentSelectedRowKeys[0])
                cellInfo.component.cellValue(cellInfo.rowIndex, "relatedArchId", row.selectedRowsData[0]["architectureId"])
                cellInfo.component.repaintRows([cellInfo.rowIndex])


            }}
        >
            <Paging defaultPageSize={10} />
            <Selection mode="single" />
            <Scrolling mode="infinite" />
            <FilterRow visible={true} />
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
                dataField="lastModifiedDate"
                alignment='center'
                caption='Last Modified Date'
                allowEditing={false}
                format={{ type: 'shortDateShortTime' }}
                width={125}
            />
            <Column
                dataField="lastModifiedBy"
                alignment='center'
                caption='Last Modified By'
                allowEditing={false}
                width={125}
            />
        </DataGrid>
    );

}


const SelectArchitecturesCellTemplate = (props) => {

    return (
        <div id='select-drop-down'>
            <DropDownBox
                inputAttr={{ id: 'select-template-field' }}
                valueExpr='architectureName'
                displayExpr='architectureName'
                deferRendering={false}
                showClearButton={false}
                onValueChanged={(e) => {
                    let inputField = document.querySelector('#select-template-field')
                    inputField.value = e.value.architectureName

                }}
                contentRender={(e) => SelectArchsGridTemplate(props, e)}
            />
        </div>)

}


export default SelectArchitecturesCellTemplate

 // 