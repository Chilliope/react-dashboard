import { useState, useEffect } from "react"

// useState hook untuk bikin state lokal di functional component
// useEffect hook untuk handle side effects, etc = fetch data, log, subscription, dll 

export default function Playground() {
    const [ count, setCount ] = useState(0) // 0 default value
    const [ message, setMessage ] = useState("Hello react!") // Hello react! default value

    useEffect(() => {
        console.log("Message updated:", message)
        return () => console.log("Cleanup if needed")
    }, [message])

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
        </div>
    )
}