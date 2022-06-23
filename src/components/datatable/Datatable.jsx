import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';

const actionColumn = [
    {
        fields: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: () => {
            return (
                <div className='cellAction'>
                    <div className='viewButton'>View</div>
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }
    }
]

const Datatable = () => {
    return (
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>

    )
}

export default Datatable