import React from "react"

type BoxProps = {
    children?: React.ReactNode
    className?: string
}

export default function NestedBox({ children, className }: BoxProps) {
    return (
        <div className={`${className} w-24 h-24`}>
            {children}
        </div>
    )
}