import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

/**
 * NOTE: Next.jsでいうところのsrc/app/layout.tsx
 */
export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position='top-right' />
    </>
  )
})
