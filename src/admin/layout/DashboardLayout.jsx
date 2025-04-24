import React from "react";
import { useState } from "react";
import {
  BarChart3,
  Users,
  UserPlus,
  Vote,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, Outlet, useNavigate } from "react-router-dom";

const navItems = [
  {
    title: "Accueil",
    href: "/wp-admin",
    icon: Home,
  },
  {
    title: "Candidats",
    href: "/wp-admin/candidates",
    icon: Users,
  },
  {
    title: "Ajouter un Candidat",
    href: "/wp-admin/candidates/add",
    icon: UserPlus,
  },
  {
    title: "Vote",
    href: "/voting",
    icon: Vote,
  },
  {
    title: "Statistiques",
    href: "/statistics",
    icon: BarChart3,
  },
  {
    title: "Paramètres",
    href: "/settings",
    icon: Settings,
  },
];
const DashboardLayout = () => {
  const pathname = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* Mobile Navigation */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:hidden">
          <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:max-w-xs">
              <div className="flex h-full flex-col">
                <div className="flex items-center border-b px-2 py-4">
                  <Link
                    to="/"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Vote className="h-6 w-6" />
                    <span>Empower</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <nav className="flex-1 overflow-auto py-2">
                  <div className="grid gap-1 px-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileNavOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground"
                            : "transparent"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </nav>
                <div className="border-t p-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Admin"
                      />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Admin User</span>
                      <span className="text-xs text-muted-foreground">
                        admin@example.com
                      </span>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <LogOut className="h-5 w-5" />
                      <span className="sr-only">Log out</span>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Vote className="h-6 w-6" />
            <span>Tableau de bord de vote</span>
          </Link>
        </header>

        <div className="flex flex-1">
          {/* Desktop Navigation */}
          <aside className="hidden w-64 flex-col border-r bg-background md:flex">
            <div className="flex h-16 items-center border-b px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Vote className="h-6 w-6" />
                <span>Empower</span>
              </Link>
            </div>
            <nav className="flex-1 overflow-auto py-6">
              <div className="grid gap-1 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "transparent"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="border-t p-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Admin"
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Utilisateur Admin</span>
                  <span className="text-xs text-muted-foreground">
                    admin@example.com
                  </span>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Se déconnecter</span>
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
