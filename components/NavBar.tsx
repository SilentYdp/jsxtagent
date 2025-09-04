import Link from 'next/link'

const navItems = [
  { href: '/', label: '首页' },
  { href: '/agents', label: '智能体目录' },
  { href: '/history', label: '对话历史' },
  { href: '/feedback', label: '反馈中心' },
  { href: '/analytics', label: '数据分析' },
  { href: '/settings', label: '系统设置' },
]

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex gap-4 p-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
