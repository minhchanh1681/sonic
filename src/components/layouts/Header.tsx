"use client";

import {
	Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-xl shadow-sm mb-5">
			<div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={120}
						height={50}
						className="h-10 w-auto"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center space-x-10">
					{menuItems?.map((menu) => (
						<div
							key={menu.label}
							className="relative"
							onMouseEnter={() => (menu?.sections ? setOpenMenu(menu.label) : setOpenMenu(null))}
							onMouseLeave={() => setOpenMenu(null)}
						>
							<button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-green-600">
								{menu.label}
								{menu?.sections ? <ChevronDown size={16} /> : null}
							</button>

							{/* Dropdown */}
							<AnimatePresence>
								{openMenu === menu.label && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										className="absolute left-0 mt-2 w-[480px] rounded-xl border border-gray-100 bg-white p-4 shadow-xl z-50"
									>
										{menu.sections?.map((section, index) => (
											<div key={index} className="mb-4">
												<p className="mb-2 text-sm font-semibold text-gray-500">
													{section.heading}
												</p>
												<div className="space-y-2">
													{section.items?.map((item, i) => (
														<Link
															key={i}
															href={item.href}
															className="block rounded-lg px-3 py-2 transition hover:bg-gray-100"
														>
															<p className="text-sm font-medium text-gray-900">
																{item.title}
															</p>
															<p className="text-xs text-gray-500">{item.desc}</p>
														</Link>
													))}
												</div>
												{index !== menu.sections.length - 1 && (
													<div className="my-4 border-t border-gray-200" />
												)}
											</div>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</nav>

				{/* Action button */}
				<div className="hidden lg:flex">
					<Button>
						Trở Thành Khách Hàng
						<ArrowUpRight className="ml-1 h-4 w-4" />
					</Button>
				</div>

				{/* Mobile Menu */}
				<div className="lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-72 sm:w-96">
							<SheetHeader>
								<SheetTitle className="sr-only">Menu</SheetTitle>
								<Image src="/logo.svg" alt="Logo" width={100} height={40} />
							</SheetHeader>

							<nav className="mt-6 space-y-4 mx-4">
								<Accordion type="multiple" className="w-full">
									{menuItems.map((menu) => (
										<AccordionItem key={menu.label} value={menu.label}>
											{menu?.sections ?
												<AccordionTrigger className="text-sm font-medium text-gray-800 hover:text-green-600">
													{menu.label}
												</AccordionTrigger>
												:
												<Link href="/" className="text-sm font-medium text-gray-800 hover:text-green-600">
													{menu.label}
												</Link>
											}
											<AccordionContent className="px-4">
												{menu.sections?.map((section, index) => (
													<div key={index} className="mb-4">
														<p className="text-xs font-semibold text-gray-500 mb-2">
															{section.heading}
														</p>
														<div className="space-y-1">
															{section.items.map((item, i) => (
																<Link
																	key={i}
																	href={item.href}
																	className="block text-sm text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded-lg p-2"
																>
																	{item.title}
																	<p className="text-xs text-gray-500">{item.desc}</p>
																</Link>
															))}
														</div>
													</div>
												))}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>

								<Button className="w-full mt-6 cursor-pointer">
									Trở Thành Khách Hàng
									<ArrowUpRight className="ml-1 h-4 w-4" />
								</Button>
							</nav>
						</SheetContent>

					</Sheet>
				</div>
			</div>
		</header>
	);
}