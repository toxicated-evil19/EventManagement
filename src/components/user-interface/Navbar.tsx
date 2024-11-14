import React from 'react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationItems = () => (
  <>
    <NavigationMenuItem>
      <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Services</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Gallery</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Testimonials</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Contact</NavigationMenuLink>
    </NavigationMenuItem>
  </>
);

const Navbar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <span className={cn(
            "text-2xl font-semibold transition-colors duration-300",
            isScrolled ? "text-gray-800" : "text-gray-100"
          )}>Events</span>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-8">
              <NavigationItems />
              <NavigationMenuItem>
                <Button variant="outline" className="flex items-center gap-2 bg-white/30 hover:bg-white/50 text-gray-800 border-gray-300/50">
                  <LogIn className="w-4 h-4" /> Login
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isScrolled ? "text-gray-800" : "text-gray-100"
                )} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <NavigationItems />
                <Button className="w-full" variant="outline">
                  <LogIn className="mr-2 h-4 w-4" /> Login
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