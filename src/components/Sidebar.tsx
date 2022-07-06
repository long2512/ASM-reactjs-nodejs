import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div>
      

      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link to="/admin/dashboard" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>
          <Link to="/admin/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">List Products</Link>
          <Link to="/admin/category" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">List Category</Link>
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
        </div>
      </div>
    </div>

  )
}

export default Sidebar