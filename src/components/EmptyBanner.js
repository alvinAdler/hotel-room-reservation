import React from 'react'

const EmptyBanner = () => {
    return (
        <div className="empty-banner">
            <h1>Empty list</h1>
            <p className="lead">No data to be displayed</p>
            <p className="lead">Add some reservations by using the "add" button above</p>
        </div>
    )
}

export default EmptyBanner
