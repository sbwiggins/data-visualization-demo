import React, { Component } from "react";
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import AspNetData from 'devextreme-aspnet-data-nojquery';

class RelatedViewsGrid extends Component {

    dataSource = {}

    render() {

        this.dataSource = AspNetData.createStore({
            key: ["architectureId", "relatedArchId"],
            loadUrl: `http://localhost/api/ViewData/GetRelateViewsGridData/${this.props.architectureId}`
        });

        return (
            <div id='related-views-grid'>
                <h2 className='header-text-color' >Views Related to {this.props.architectureName}</h2>
                <DataGrid
                    dataSource={this.dataSource}
                    showBorders={true}
                    allowColumnResizing={true}
                    loadPanel={{ enabled: true }}
                    filterRow={{ visible: true, applyfilter: "auto" }}
                >
                    <Paging defaultPageSize={10} />
                    <Pager
                        showPageSizeSelector={true}
                        allowedPageSizes={[5, 10, 20]}
                        showInfo={true} />

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
                        dataField="viewName"
                        alignment='center'
                        caption='View Name'
                        allowEditing={false}
                        width={125}
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
                        allowEditing={false}
                        width={175}
                    />
                    <Column
                        dataField="relatedViewName"
                        alignment='center'
                        caption='Related View Name'
                        allowEditing={false}
                        width={125}
                    />
                    <Column
                        dataField="relateTypeName"
                        alignment='center'
                        caption='Relationship Type'
                        allowEditing={false}
                        width={115}
                    />
                </DataGrid>
            </div>
        );
    }
}

export default RelatedViewsGrid