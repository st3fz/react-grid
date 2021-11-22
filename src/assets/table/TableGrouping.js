import React, { useState, useEffect, useRef } from 'react';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-enterprise';

const TableGrouping = () => {

    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, []); 

    const onButtonClick = e => {
        const selectedNodes = gridRef.current.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model} ${node.price}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    return(
        <div
        className="ag-theme-alpine" 
        style={{height: 400, width: 600}}
        >

            <button 
            onClick={onButtonClick}
            >Get selected rows
            </button>
            
            <AgGridReact
            rowData={rowData}
            ref={gridRef}
            rowSelection="multiple"
            groupSelectsChildren={true}
            autoGroupColumnDef={{
                headerName: "Model",
                field: "model",
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                checkbox: true
                }
            }}
            >
                <AgGridColumn 
                field="make" 
                sortable={true}
                filter={true}
                checkboxSelection={true}
                rowGroup={true}
                >
                </AgGridColumn>
                
                <AgGridColumn 
                field="price" 
                sortable={true}
                filter={true}
                >
                </AgGridColumn>
            </AgGridReact>
        </div>
    )
}

export default TableGrouping;