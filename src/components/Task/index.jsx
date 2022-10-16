import "./style.css"

export default function (props) {
    return (
        <>
            <div className="task-container">
                <p className="task-title">{props.text}</p>

                <input className="task-date" type="date"/>
            </div>
        </>
    )
}