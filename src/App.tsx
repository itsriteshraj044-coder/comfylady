import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { routes } from './routes'
import PageLoader from './components/PageLoader'

function AppRoutes() {
  return useRoutes(routes)
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}
