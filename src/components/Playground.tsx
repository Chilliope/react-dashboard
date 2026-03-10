import { useState, useEffect } from "react"
import ColorPicker from "./ColorPicker"
import Box from "./Box"
import NestedBox from "./NestedBox"

// useState hook untuk bikin state lokal di functional component
// useEffect hook untuk handle side effects, etc = fetch data, log, subscription, dll 

export default function Playground() {
    const [ count, setCount ] = useState(0) // 0 default value
    const [ message, setMessage ] = useState("Hello react!") // Hello react! default value
    const [ color, setColor ] = useState("bg-red-500")
    const [ nestedColor, setNestedColor ] = useState("bg-green-500")

    useEffect(() => {
        console.log("Message updated:", message)
        console.log("Color updated:", color)
        console.log("Nested color update:", nestedColor)
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

            <div className="flex gap-2">
                <Box className={color}>
                    <h1>{message}</h1>
                    <h1>count: {count}</h1>
                    <ColorPicker setColor={setColor} color={color} colors={colors}  />
                </Box>

                <Box className={color} />
                <Box className={color}>
                    <h1>Message</h1>
                    <NestedBox className={nestedColor}>
                        <ColorPicker setColor={setNestedColor} color={nestedColor} colors={colors}/>
                    </NestedBox>    
                </Box>
            </div>

        </div>
    )
}