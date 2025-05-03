import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  Home,
  ImageIcon,
  MessageSquare,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [location, navigate] = useLocation();
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActivePath = (path: string) => {
    return location === path || location.startsWith(`${path}/`);
  };
  
  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };
  
  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/admin",
    },
    {
      title: "Properties",
      icon: <Home className="h-5 w-5" />,
      path: "/admin/properties",
    },
    {
      title: "Cash Offers",
      icon: <MessageSquare className="h-5 w-5" />,
      path: "/admin/cash-offers",
    },
    {
      title: "Subscribers",
      icon: <Users className="h-5 w-5" />,
      path: "/admin/subscribers",
    },
    {
      title: "View Website",
      icon: <ImageIcon className="h-5 w-5" />,
      path: "/",
    },
  ];
  
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4 flex items-center justify-between">
        <Link href="/admin">
          <div className="text-primary font-bold text-xl flex items-center">
            <i className="fas fa-home mr-2"></i>
            <span>RuralHomes</span>
          </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Sidebar */}
      <aside
        className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          w-full md:w-64 bg-white border-r md:shrink-0 
          fixed md:sticky top-[57px] md:top-0 left-0 h-[calc(100vh-57px)] md:h-screen
          z-20 overflow-y-auto
        `}
      >
        <div className="hidden md:flex p-4 border-b">
          <Link href="/admin">
            <div className="text-primary font-bold text-xl flex items-center">
              <i className="fas fa-home mr-2"></i>
              <span>RuralHomes</span>
            </div>
          </Link>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <a
                    className={`
                      flex items-center px-4 py-3 rounded-md transition-colors
                      ${isActivePath(item.path)
                        ? "bg-primary text-white"
                        : "text-neutral-500 hover:bg-neutral-100"}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </a>
                </Link>
              </li>
            ))}
            
            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 rounded-md text-neutral-500 hover:bg-neutral-100 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-3">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
