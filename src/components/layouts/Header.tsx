"use client";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	return (
		<div className="border-b flex justify-between items-center h-19 w sticky top-0 z-50 shadow-sm mb-10 rounded-3xl bg-[#FFFFFF]/65 bg-[#FFFFFF]/50 !backdrop-filter !backdrop-blur-[25px]">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/">
					<Image src="./logo.svg" alt="Logo" width={100} height={50} className="h-12" />
				</Link>
				<div className="flex items-center space-x-12">
					{menuItems?.map((menu) => (
						<div
							key={menu.label}
							className="relative"
							onMouseEnter={() => menu?.sections ? setOpenMenu(menu.label) : setOpenMenu(null)}
							onMouseLeave={() => setOpenMenu(null)}
						>
							<button className="flex items-center text-sm font-medium text-gray-800 hover:text-green-600">
								{menu.label} {menu?.sections ? <ChevronDown size={16} /> : null}
							</button>
							<AnimatePresence>
								{openMenu === menu.label && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										className="absolute left-0 mt-2 w-[480px] rounded-2xl border border-gray-100 bg-white p-4 shadow-xl"
									>
										{menu?.sections?.map((section, index) => (
											<div key={index} className="mb-4">
												<p className="mb-2 text-sm font-semibold text-gray-500">
													{section.heading}
												</p>
												<div className="space-y-2">
													{section?.items?.map((item, i) => (
														<Link
															key={i}
															href={item.href}
															className="block rounded-lg px-3 py-3 transition hover:bg-gray-100"
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
				</div>
				<Button className="cursor-pointer">
					Trở Thành Khách Hàng
					<ArrowUpRight />
				</Button>
			</div>
		</div>
	)
}