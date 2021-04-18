import React from 'react'

export default function Todoist() {
    return (
        <iframe src="https://todoist.com/showProject?id=2263508135" frameBorder="0" title="Todoist" className="h-full w-full"></iframe>
        // just to bypass the headers 🙃
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}
