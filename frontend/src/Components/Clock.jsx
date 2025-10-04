import { useEffect, useState } from "react"
import React from 'react'

function Clock() {
    const [clock, setClock] = useState(null)

    useEffect (() => {
        const fetchClock = async () => {
            try {
                const res = await fetch(
                    'http://worldtimeapi.org/api/timezone/Asia/Kolkata'
                )
                const data = await res.json()
                setClock(data)
            } catch(error) {
                console.error("Error fetching clock",error)
            }
        }
        fetchClock();
    },[])

    if(!clock) {
        return <div>Loading clock...</div>
    }
    return (
        <div>
            {clock.datetime}
        </div>
    )
}

export default Clock