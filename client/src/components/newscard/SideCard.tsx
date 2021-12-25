import React from 'react'

interface TopNews {
    name: string
}
const SideCard = ({name}: TopNews) => {
    return (
        <div>
            <ol>{name}</ol>
        </div>
    )
}

export default SideCard
