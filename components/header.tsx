"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
	{ name: "home", href: "/" },
	{ name: "projects", href: "/projects" },
	{ name: "about me", href: "/about" },
	{ name: "travels", href: "/travels" },
]

export function Header() {
	const pathname = usePathname()
	const { theme, setTheme } = useTheme()

	return (
		<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
			<nav className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 dark:bg-muted/60 backdrop-blur-md border border-border/50">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden mr-2 ring-2 ring-primary/20 hover:ring-primary/50 transition-all"
				>
					<Image
						src="/KM.jpg"
						alt="Konrad Martens"
						width={32}
						height={32}
						className="object-cover w-full h-full"
					/>
				</Link>

				{/* Navigation Links */}
				<div className="flex items-center gap-1">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								"px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
								pathname === item.href
									? "bg-background text-foreground shadow-sm"
									: "text-muted-foreground hover:text-foreground hover:bg-background/50"
							)}
						>
							{item.name}
						</Link>
					))}
				</div>

				{/* Divider */}
				<div className="w-px h-6 bg-border mx-2" />

				{/* Social Icons & Theme Toggle */}
				<div className="flex items-center gap-1">
					<Button
						variant="ghost"
						size="icon"
						className="w-8 h-8 rounded-full"
						asChild
					>
						<a
							href="https://github.com/Calli-ope"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub Profile"
						>
							<Github className="w-4 h-4" />
						</a>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="w-8 h-8 rounded-full"
						asChild
					>
						<a
							href="https://linkedin.com/in/konrad-martens"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn Profile"
						>
							<Linkedin className="w-4 h-4" />
						</a>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="w-8 h-8 rounded-full"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						aria-label="Toggle theme"
					>
						<Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					</Button>
				</div>
			</nav>
		</header>
	)
}
