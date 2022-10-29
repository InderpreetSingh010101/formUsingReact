let Display = (props)=>{

    return(
        <div class={`display ${props.theme}`}>
            <p>Name - {props.name}</p>
            <p>Email - {props.email}</p>
            <p>Phone - {props.phone}</p>
            <p>Theme - {props.theme}</p>
        </div>
    )


}

export default Display ;