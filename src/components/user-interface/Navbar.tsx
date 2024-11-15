import React from 'react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { LogIn, Menu, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationItems = ({ isScrolled = false, isMobile = false }) => (
  <NavigationMenuList className={cn(
    isMobile ? "flex flex-col space-y-4" : "space-x-8",
    "items-center"
  )}>
    {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
      <NavigationMenuItem key={item} className="mx-2">
        <NavigationMenuLink
          className={cn(
            "font-sans transition-all duration-300 cursor-pointer relative group",
            isMobile ? "text-gray-900 text-lg" : 
            isScrolled ? "text-gray-800 hover:text-rose-500" : "text-white hover:text-rose-300",
            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5",
            isScrolled 
              ? "after:bg-rose-500" 
              : "after:bg-white",
            "after:transition-all after:duration-300 hover:after:w-full"
          )}
        >
          {item}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);

const Navbar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  return (
    <nav className={cn(
      "fixed w-full h-16 z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/30 backdrop-blur-md border-b border-white/20"
        : "bg-black/5 backdrop-blur-sm"
    )}>
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <span className={cn(
            "text-2xl md:text-3xl font-sans transition-all duration-300",
            isScrolled ? "text-gray-800" : "text-white"
          )}>
            Events
          </span>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationItems isScrolled={isScrolled} /> 
              <NavigationMenuItem className="ml-4">
                <Button
                  className={cn(
                    "flex items-center gap-2 transition-all duration-300",
                    isScrolled
                      ? "bg-rose-500/80 hover:bg-rose-600/90 text-white shadow-md hover:shadow-lg"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:shadow-lg"
                  )}
                >
                  <LogIn className="w-4 h-4" />
                  Login
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden",
                  isScrolled ? "text-gray-800 hover:text-rose-500" : "text-white hover:text-rose-300"
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6 bg-white/60 backdrop-blur-xl">
              <SheetTitle className="text-2xl font-sans text-gray-800 mb-4">
                Menu
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                <NavigationMenu orientation="vertical" className="w-full">
                  <NavigationItems isScrolled={true} isMobile={true} />
                </NavigationMenu>
                <Button
                  className="w-full bg-rose-500/80 hover:bg-rose-600/90 text-white mt-4 shadow-md hover:shadow-lg"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;