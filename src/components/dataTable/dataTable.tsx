import * as React from 'react';
import { DataGrid, GridColDef, GridColumnHeaderParams, GridFilterInputValue, GridValueFormatterParams, GridValueGetterParams } from '@material-ui/data-grid';
import moment from 'moment';
import { useStyles } from './dataTableStyle';
import './dataTable.css'
import { Button } from '@material-ui/core';

interface DataTableProps {
    rows: Array<any>
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 130,
    editable: false ,
    headerClassName: 'header',
    headerAlign: 'left'
  },
  {
    field: 'lut',
    headerName: 'Last Update Time',
    type: 'dateTime',
    width: 200, 
    editable: false,
    valueGetter: (params?: GridValueGetterParams) => {
      return new Date(params?.value ? + params.value * 1000 : '')
    },
    headerClassName: 'header',
    headerAlign: 'left'
  },
  {
    field: 'longitude',
    headerName: 'Longitude',
    type: 'number',
    width: 140,
    editable: false,
    headerClassName: 'header',
    headerAlign: 'left'
  },
  {
    field: 'latitude',
    headerName: 'Latitude',
    type: 'number',
    width: 130,
    editable: false,
    headerClassName: 'header',
    headerAlign: 'left'
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    minWidth: 1000,
    editable: false,
    headerClassName: 'header',
    headerAlign: 'left'
  },
  
];

export default function DataTable(props : DataTableProps) {
    const classes = useStyles();

  return (
    <div style={{ height: 653, width: '95%' }}>
      <DataGrid
        classes={{
            root: classes.root,
            columnHeader: classes.columnHeader,
        }}
        rows={props.rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
