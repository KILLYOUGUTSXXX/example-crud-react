import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <div className="p-2 pl-4 pr-4 bg-slate-300">
      <Outlet />
    </div>
  )
}