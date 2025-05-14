"use client"

import { motion, useSpring } from "framer-motion"
import { RefObject, useEffect, useRef } from "react"

export default function CursorDrag() {
	const ref = useRef<HTMLDivElement>(null)
	const { x, y } = useFollowPointer(ref)

	return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement>) {
	const x = useSpring(0, spring)
	const y = useSpring(0, spring)

	useEffect(() => {
		if (!ref.current) return

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
			const element = ref.current!

			const rect = element.getBoundingClientRect()

			x.set(clientX - rect.left - rect.width / 2)
			y.set(clientY - rect.top - rect.height / 2)
		}

		window.addEventListener("pointermove", handlePointerMove)

		return () => window.removeEventListener("pointermove", handlePointerMove)
	}, [ref])

	return { x, y }
}

export const ball = {
	width: 12,
	height: 12,
	backgroundColor: "#53cc93",
	borderRadius: "50%",
	position: "absolute" as const,
}
