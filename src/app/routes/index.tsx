import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

export const Route = createFileRoute('/')({
  component: Page
})

/**
 * NOTE: src/app/page.tsx
 */
export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center gap-2'>
        <a href='https://vite.dev' target='_blank' rel='noopener'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noopener'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        {/** biome-ignore lint/a11y/useButtonType: reason */}
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/app/routes/index.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}
