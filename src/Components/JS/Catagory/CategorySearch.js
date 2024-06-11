import React from 'react'
import '../../Styles/Catagory/CategorySearch.css'
import { NavLink } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import AllCatrgoryPageHook from '../../../LogicHooks/Categories/AllCatrgoryPageHook';
import Loding from '../Utility/Loading';
import FilterByNavHook from '../../../LogicHooks/Products/FilterByNavHook';

export default function CategorySearch() {
  const [items,subcates,handleSubCat]=FilterByNavHook();

  return (
    <div className='categorySearch'>
      <div className='container'>
        <ul className='categorySearchList'>
         {items?items.map((item,i)=>{
            return (
            <>
              <li key={i}  onMouseEnter={()=>handleSubCat(item._id)}>
                <a href={`/allproduct/category/${item._id}`}>{item.name}</a>
                {
                  subcates.length >1?(
                    <ul id="myDropdown" class="dropdown-content"> 
                          {
                            subcates?subcates.map((sub,i)=>{
                              return (
                                <>
                                  <li key={i}><a href={`/allproduct/subcategory/${sub._id}`}>{sub.name}</a></li>
                                </>
                              )
                            }):""
                          }
                      </ul>
                  ):""
                }
              
              </li>

            </>
            )
          }):<Loding/>
 
          }
   
             {/* <li >
                <NavLink>All</NavLink>
                <ul id="myDropdown" class="dropdown-content">
                  <li><NavLink>Best</NavLink></li>
                  <li><NavLink>New</NavLink></li>
                  <li><NavLink>Recent</NavLink></li>
                </ul>
              </li>
            <li><NavLink>Best</NavLink></li>
            <li><NavLink>New</NavLink></li>
            <li><NavLink>Recent</NavLink></li>
            <li><NavLink>Top</NavLink></li>
            <li><NavLink>Discount</NavLink></li>
            <li><NavLink>offers</NavLink></li>
            <li><NavLink>Devices</NavLink></li>
            <li><NavLink>Electronics</NavLink></li>
            <li><NavLink>More</NavLink></li>  */}
        </ul>
      </div>
    </div>
  )
}
