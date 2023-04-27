import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Toaster position='top-center' />
    <Routes />

  </QueryClientProvider>,
)
