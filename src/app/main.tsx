'use client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './styles.css'
import './main.css'
import { QueryClient } from '@tanstack/react-query'
import { IntlayerProvider } from 'react-intlayer'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      refetchInterval: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
  throttleTime: 1000 * 30
})

// Render the app
// biome-ignore lint/style/noNonNullAssertion: reason
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ThemeProvider>
        <PersistQueryClientProvider client={client} persistOptions={{ persister: persister, maxAge: 1000 * 30 }}>
          <IntlayerProvider>
            <RouterProvider router={router} />
          </IntlayerProvider>
        </PersistQueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  )
}
