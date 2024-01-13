import React from 'react'
import { useSelector } from 'react-redux'
import AllProducts from './SideBarSections/AllProducts'
import AddProduct from './SideBarSections/AddProduct'
import Orders from './SideBarSections/Orders'
import UpdateProfile from '../../Pages/UpdateProfile'
import AllUsers from './SideBarSections/AllUsers'
import UpdatePassword from '../../Pages/UpdatePassword'
import OrderDetails from './SideBarSections/OrderDetails'

const SideBarPageContent = () => {
  const {page} = useSelector(state=>state.page)
  
  if(page=="All Products")
  {
    return <AllProducts/>
  }
  if(page=='Add Product')
  {
    return <AddProduct/>
  }
  if(page == "Orders")
  {
    return <Orders/>
  }
  if(page == "Update Profile")
  {
    return <UpdateProfile />
  }
  if(page == "All Users")
  {
    return <AllUsers/>
  }
  if(page == "Update Password")
  {
    return <UpdatePassword/>
  }
  if(page=='OrderDetails')
  {
    return <OrderDetails/>
  }
 
}

export default SideBarPageContent