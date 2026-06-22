import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Events' },
  { href: '/admin/events', label: 'Admin' },
]

export function Navigation() {
  const location = useLocation()

  return (
    <header className="border-b bg-card">
      <nav className="container mx-auto flex items-center gap-6 px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-primary">
          Booking Service
        </Link>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}