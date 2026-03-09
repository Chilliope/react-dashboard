import { useState, useEffect } from "react"
import ColorPicker from "./ColorPicker"

// useState hook untuk bikin state lokal di functional component
// useEffect hook untuk handle side effects, etc = fetch data, log, subscription, dll 

export default function Playground() {
    const [ count, setCount ] = useState(0) // 0 default value
    const [ message, setMessage ] = useState("Hello react!") // Hello react! default value
    const [ color,  setColor ] = useState("bg-red-500")

    useEffect(() => {
        console.log("Message updated:", message)
        console.log("Color updated:", color)
        return () => console.log("Cleanup if needed")
    }, [message, color])

    const colors = [ 
        {
            color: "bg-red-500",
            name: "red"
        }, 
        {
            color: "bg-blue-500",
            name: "blue"
        }, 
        {
            color: "bg-green-500",
            name: "green"
        } 
    ]

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">{message}</h1>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
                onClick={() => setCount(count + 1)}
                >
                Increment: {count}
            </button>
            <input className="border p-2 mt-2" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}/>
            <div className={`${color} w-24 h-24`}></div>

            <ColorPicker setColor={setColor} color={color} colors={colors}  />
        </div>
    )
}