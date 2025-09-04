import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'

export const metadata: Metadata = {
  title: '江苏信托智能体平台',
  description: '基于现代 React 技术栈的智能体平台',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
