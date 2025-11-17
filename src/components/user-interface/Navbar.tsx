import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Sparkles, Menu, X, ArrowRight, Calendar, Image, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { name: 'About', icon: Sparkles },
  { name: 'Services', icon: Calendar },
  { name: 'Gallery', icon: Image },
  { name: 'Testimonials', icon: MessageCircle },
  { name: 'Contact', icon: Mail }
];

const NavigationItems = ({ isScrolled = false, isMobile = false, onItemClick = () => {} }) => (
  <NavigationMenuList className={cn(
    isMobile ? "flex flex-col space-y-2 w-full" : "flex items-center gap-2",
  )}>
    {navigationLinks.map((item) => (
      <NavigationMenuItem key={item.name}>
        <NavigationMenuLink
          onClick={() => onItemClick()}
          className={cn(
            "group relative flex items-center gap-2 transition-all duration-300 cursor-pointer",
            isMobile
              ? "text-gray-900 text-base font-medium py-3 px-4 rounded-xl hover:bg-rose-50 w-full"
              : isScrolled
                ? "text-gray-700 hover:text-rose-600 px-4 py-2 rounded-full hover:bg-rose-50/50 font-medium text-sm"
                : "text-white/90 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 font-medium text-sm backdrop-blur-sm"
          )}
        >
          {isMobile && <item.icon className="w-4 h-4 text-rose-500" />}
          <span>{item.name}</span>
          {!isMobile && (
            <div className={cn(
              "absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
              isScrolled ? "bg-rose-500" : "bg-white"
            )} />
          )}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);

const Navbar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-500",
      isScrolled
        ? "bg-white/40 backdrop-blur-3xl border-b border-white/30 shadow-2xl shadow-black/10 py-3 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/50 before:to-transparent before:pointer-events-none"
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
              isScrolled
                ? "bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg group-hover:shadow-rose-500/50"
                : "bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20"
            )}>
              <Sparkles className={cn(
                "w-5 h-5 transition-all duration-300",
                isScrolled ? "text-white" : "text-white"
              )} />
            </div> */}
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-serif font-bold transition-all duration-300 leading-none",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                EventCraft
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-wider transition-all duration-300",
                isScrolled ? "text-rose-500" : "text-rose-200"
              )}>
                Premium Events
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationItems isScrolled={isScrolled} />
            </NavigationMenu>

            <button className={cn(
              "ml-4 flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group backdrop-blur-xl",
              isScrolled
                ? "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg hover:shadow-xl hover:shadow-rose-500/50 hover:scale-105"
                : "bg-white/90 text-rose-600 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/50"
            )}>
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "lg:hidden p-2 rounded-xl transition-all duration-300",
                  isScrolled
                    ? "text-gray-700 hover:bg-rose-50"
                    : "text-white hover:bg-white/10 backdrop-blur-sm"
                )}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-white/95 backdrop-blur-2xl border-l border-gray-200/50 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="px-6 py-6 border-b border-gray-200/50">
                  <SheetTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-serif font-bold text-gray-900 leading-none">
                        EventCraft
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-rose-500">
                        Premium Events
                      </span>
                    </div>
                  </SheetTitle>
                </div>

                {/* Mobile Menu Content */}
                <nav className="flex-1 px-6 py-6">
                  <NavigationMenu orientation="vertical" className="w-full">
                    <NavigationItems
                      isScrolled={true}
                      isMobile={true}
                      onItemClick={() => setMobileMenuOpen(false)}
                    />
                  </NavigationMenu>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="px-6 py-6 border-t border-gray-200/50 space-y-3">
                  <button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                    <span>Plan Your Event</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <div className="text-center text-xs text-gray-500">
                    Creating unforgettable moments since 2009
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;