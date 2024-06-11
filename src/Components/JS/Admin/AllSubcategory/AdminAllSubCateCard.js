
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import sub from '../../../../images/all/s1.jpg'
import sub2 from '../../../../images/all/s2.jpg'
import sub3 from '../../../../images/all/s3.png'
import sub4 from '../../../../images/all/s4.png'
import sub5 from '../../../../images/all/s5.svg'
import sub6 from '../../../../images/all/s7.png'
import sub7 from '../../../../images/all/s6.png'
import sub8 from '../../../../images/all/s8.png'
import DeleteSubCateHook from '../../../../LogicHooks/Admin/DeleteSubCateHook';
export default function AdminAllSubCateCard({item}) {
  const imgs =[sub,sub2,sub3,sub4,sub5,sub6,sub7,sub8]
  const [show,handelDelete,handleClose,handleShow]=DeleteSubCateHook(item._id)
  return (
    <div className='SubcateItem'>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black"}}>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color:"black"}}>Are you sure to delete this SubCategory?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelDelete}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
     <div className='SubcateItemBtns'>
        <Link to={`/admin/edit-subcategory/${item._id}`}><button className='changeCat'>Edit</button></Link>
        <button className='changeCat' onClick={handleShow} >Delete</button>
     </div>
      <div className='SubcateItemImg'>
        <img src={imgs[1 ]} alt='Subcate' />
      </div>
      <h3 className='SubcateItemTitle'>{item.name}</h3>

      <ToastContainer />

    </div>
  )
}
