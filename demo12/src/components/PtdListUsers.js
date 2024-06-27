import React from 'react'

export default function PtdListUsers({renderPtdListUsers}) {
    console.log("PtdListUses:",renderPtdListUsers);
    //hien thi du lieu
    let ptdElementUser= renderPtdListUsers.map((ptdUser,index)=>{
        return(
            <>
            <tr>  
                    <td>{ptdUser.id}</td>
                    <td>{ptdUser.UserName}</td>
                    <td>{ptdUser.PassWord}</td>
                    <td>{ptdUser.Email}</td>
                    <td>{ptdUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <tb>Id</tb>
                    <tb>UserName</tb>
                    <tb>Password</tb>
                    <tb>Email</tb>
                    <tb>Phone</tb>
                    <tb>Chuc nang</tb>
                </tr>
            </thead>
            <tbody>
               {ptdElementUser}
            </tbody>
        </table>
        </div>

    </div>
  )
}
