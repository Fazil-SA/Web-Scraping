import React, { useEffect, useState } from 'react'
import '../components/historytable.css'
import { axiosSearchInstance } from '../instance/axios'
import { DataGrid } from '@mui/x-data-grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HistoryTable = () => {
    const [tableData, setTableData] = useState([]);
    // const [favourite, setFavourite] = useState();

    useEffect(() => {
        tableDataFunc()
        async function tableDataFunc(){
            try {
                const response = await axiosSearchInstance
                response.get('/history')
                .then((res) => {
                    setTableData(res.data.datas)
                })
            } catch (error) {
                throw new Error('Data unable fetching')
            }
        }
    }, [tableData]);

    async function editProduct(id){
        try {
            const response = await axiosSearchInstance
            response.post('/historyUpdate',{id:id})
            .then((res) => {
                console.log(res)
            })
        } catch (error) {
            throw new Error('Update Error')
        }
    }

    async function deleteProduct(id){
        try {
            console.log(id)
            const response = await axiosSearchInstance
            response.post('/historyDelete',{id:id})
            .then((res) => {
                toast.error('Deleted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                console.log(res)
            })
        } catch (error) {
            throw new Error('Update Error')
        }
    }

    const columns = [
        { field: '_id', headerName: 'Id', width: 70 },
        { field: 'websiteUrl', headerName: 'WebsiteUrl', width: 130 },
        { field: 'wordsCount', headerName: 'WordCount',type: 'number', width: 130 },
        { field: 'imageCount', headerName: 'Media Count',type: 'number', width: 130 },
        { field: 'images', headerName: 'Media URLs', width: 130 },
        { field: 'favourite', headerName: 'Favourite', width: 130 },
        {
            field: "actions",headerName: "Action",width:200,
            renderCell: (tableData) => {
              
              return (
                <>
                       <FavoriteIcon sx={{cursor:'pointer'}} onClick={() => editProduct(tableData.id)}/>
                       <DeleteIcon sx={{cursor:'pointer'}} onClick={() => deleteProduct(tableData.id)}/>
                </>
                
              );
          }}
      ];

  return (
    <div className='main-div'>
        <ToastContainer />
        <h1 className='table-heading'>History</h1>
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid sx={{color:'white'}}
                rows={tableData ? tableData : ''}
                columns={columns}
                pageSize={5}
                getRowId={(row) => row?._id}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            </div>
        </div>
  )
}

export default HistoryTable
















// <table>
//             <caption>HISTORY</caption>
//             <thead>
//                 <tr className="thead">
//                 <th scope="col">Sl No.</th>
//                 <th scope="col">Website</th>
//                 <th scope="col">WordCount</th>
//                 <th scope="col">ImageCount</th>
//                 <th scope="col">Image URLs</th>
//                 <th scope="col">Video Count</th>
//                 <th scope="col">Video URLs</th>
//                 <th scope="col">Favourite</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {tableData ?
                
//                     tableData.map((element) => {
                    
//                     return <tr>
//                     <td data-label="Sl No.">Jeevan Kumar</td>
//                     <td data-label="Website">{element.websiteUrl}</td>
//                     <td data-label="WordCount">jeevankaree.com</td>
//                     <td data-label="ImageCount">Admin</td>
//                     <td data-label="Image URLs">Jeevan Kumar</td>
//                     <td data-label="Video Count">Front-end Expert</td>
//                     <td data-label="Video URLs">jeevankaree.com</td>
//                     <td data-label="Favourite">Admin</td>
//                     </tr>
//                     })

//                     :

//                     ''
//                 }
//             </tbody>
//         </table>