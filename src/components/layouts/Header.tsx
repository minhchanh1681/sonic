"use client"

import { menus } from "@/data/navigation"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react';

export default function Header() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div className="border-b bg-white flex justify-between items-center ">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/">
					<Image src="./logo.svg" alt="Logo" width={100} height={50} className="h-12" />
				</Link>
				<div className=" px-4 flex space-x-6 py-4 relative">
					{menus.map((menu, index) => (
						<div
							key={index}
							className="relative"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div className="cursor-pointer px-4 py-2 rounded hover:bg-gray-100">
								{menu.href ? (
									<Link href={menu.href}>{menu.label}</Link>
								) : (
									<span>{menu.label}</span>
								)}
							</div>

							{/* Dropdown */}
							{!menu.href && hoveredIndex === index && (
								<div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded z-50">
									{menu.items?.map((item, idx) => (
										<Link
											key={idx}
											href={item.href}
											className="block px-4 py-2 hover:bg-gray-100 text-sm"
										>
											{item.label}
										</Link>
									))}
								</div>
							)}
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
