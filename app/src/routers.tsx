import React, { Fragment, lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'


const RouterRoot = lazy(() => import('./routers/root.router'))
const RouterCashEntry = lazy(() => import('./routers/cash-entry.router'))


const routers = createBrowserRouter([
  {
    path: '',
    element: <RouterRoot />,
    children: [
      {
        path: '/cash-entry',
        element: (
          <Suspense fallback={<>...</>}>
            <RouterCashEntry />
          </Suspense>
        )
      }
    ]
  }
], { basename: '/' })

export default routers