import React from 'react'

const Header = ({onFormToggle, showAddForm}) => {
    return (
        <header className="main-header jumbotron">
            <h1>React Hotel Reservation</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus magni odio nesciunt.</p>
            <hr className="my-4"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum sint a reiciendis sapiente? Omnis iste tenetur, debitis, unde ea labore corporis velit vitae repellat itaque pariatur vero tempore reprehenderit!</p>
            <button className={`add-button btn ${showAddForm ? "btn-danger" : "btn-primary"}`} onClick = {() => onFormToggle()}>{showAddForm ? "Close" : "Add"}</button>
        </header>
    )
}
// "add-button btn btn-primary"
export default Header
