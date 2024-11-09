import React, { useContext, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"
import { ArrowRight, Brain, Coins, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="w-full h-fit border-b glassMorph sticky top-0 z-50">
      <div className="flex justify-between items-center px-8 h-[60px] max-w-7xl mx-auto">
        <div>
            <a href="/">InnoHub</a>
        </div>
        <div>
            <NavigationMenuData />
        </div>
        <button className="max-lg:hidden relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Join Us
            </span>
        </button>
        <Sheet className="" open={hamburgerOpen} onOpenChange={setHamburgerOpen}>
        <SheetTrigger className="lg:hidden navTrigger z-50">
            <label htmlFor="check">
                <input type="checkbox" id="check" checked={hamburgerOpen} onChange={setHamburgerOpen}/> 
                <span></span>
                <span></span>
                <span></span>
            </label>
        </SheetTrigger>
        <SheetContent side="left">
            <SheetHeader>
            <SheetTitle>InnoHub</SheetTitle>
            <SheetDescription hidden></SheetDescription>
            </SheetHeader>
            <div className="h-full flex flex-col justify-between py-4">
                <div className="grow p-4 flex flex-col  gap-2">
                    <a href="#" className="flex gap-2 items-center transition duration-200 text-neutral-500 hover:underline hover:text-primary">Home <ArrowRight className="w-4 h-4" /></a>
                    <a href="#" className="flex gap-2 items-center transition duration-200 text-neutral-500 hover:underline hover:text-primary">Solutions <ArrowRight className="w-4 h-4" /></a>
                    <a href="#" className="flex gap-2 items-center transition duration-200 text-neutral-500 hover:underline hover:text-primary">Products <ArrowRight className="w-4 h-4" /></a>
                    <a href="#" className="flex gap-2 items-center transition duration-200 text-neutral-500 hover:underline hover:text-primary">Insights <ArrowRight className="w-4 h-4" /></a>
                    <a href="#" className="flex gap-2 items-center transition duration-200 text-neutral-500 hover:underline hover:text-primary">Contact <ArrowRight className="w-4 h-4" /></a>
                </div>
                <div className="flex justify-center">
                    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Join Us
                        </span>
                    </button>
                </div>
                <div className="p-4 pb-8 flex justify-center gap-2">
                    <div className="p-2 bg-neutral-500 rounded-full"><Facebook className="h-4 w-4" /></div>
                    <div className="p-2 bg-neutral-500 rounded-full"><Instagram className="h-4 w-4" /></div>
                    <div className="p-2 bg-neutral-500 rounded-full"><Linkedin className="h-4 w-4" /></div>
                </div>
            </div>
        </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

const components = [
    {
      title: "The Future of AI in Everyday Life",
      href: "#home",
      description:
        "Exploring how AI is reshaping daily interactions and its impact on society.",
    },
    {
      title: "Top Trends in Custom Software Development",
      href: "#home",
      description:
        "A look at the most influential trends in creating bespoke software solutions.",
    },
    {
      title: "Cloud Integration: Benefits and Best Practices",
      href: "#home",
      description:
        "A comprehensive guide to seamlessly connecting systems with cloud technology.",
    },
    {
      title: "The Role of IoT in Smart Cities",
      href: "#home",
      description:
        "How IoT devices are transforming urban areas into intelligent and efficient ecosystems.",
    },
    {
      title: "Understanding the Basics of Machine Learning",
      href: "#home",
      description:
        "An introductory guide to machine learning, its algorithms, and real-world applications.",
    },
    {
      title: "Enhancing Cybersecurity with AI",
      href: "#home",
      description:
        "Examining how artificial intelligence is being used to detect and prevent cyber threats.",
    },
  ];  

function NavigationMenuData() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="#home">
            <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent"}>
                Home
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            <a href="#services">
                Solutions
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Brain className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Artificial Intelligence
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                        Transforming data into actionable insights and automation through advanced algorithms.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Custom Software Development">
                Tailored software solutions built to meet unique business needs and drive innovation.
              </ListItem>
              <ListItem href="/docs/installation" title="Cloud Integration">
                Seamless connection of systems and services to leverage the power of cloud technology.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Internet of Things">
                Connecting devices to enhance data collection, automation, and real-time insights for smarter operations.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            <a href="#insights">
                Insight
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a href="#contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent"}>
                Contact
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <span
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </span>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
