import React from "react";
import DataGrid, { Column, Paging, FilterRow, Scrolling, Selection } from 'devextreme-react/data-grid';
import AspNetData from 'devextreme-aspnet-data-nojquery';


export let currentArchitectureId = 512;
export let currentArchitectureName = 'IADS Architecture 2';


const dataSource = AspNetData.createStore({
    key: 'architectureId',
    loadUrl: 'http://localhost/api/ArchitectureData/GetSelectedArchitectureGridData'
});

const SelectArchitecturesGrid = (e) => {

    const rowClickHandler = (row, e) => {
        e.component._popup.hide()
        e.component.option("value", row.data)
        currentArchitectureId = row.data["architectureId"]
        currentArchitectureName = row.data["architectureName"]
    }


    return (
        <DataGrid
            dataSource={dataSource}
            showBorders={true}
            onRowClick={(row) => rowClickHandler(row, e)}
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

export default SelectArchitecturesGrid