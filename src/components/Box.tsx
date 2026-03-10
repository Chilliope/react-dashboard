import React from "react"

type BoxProps = {
    children?: React.ReactNode
    className?: string
}

export default function Box({ children, className }: BoxProps) {
    return (
        <div className={`${className} w-54 h-32`}>
            {children}
        </div>
    )
}