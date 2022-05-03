export function InputForm(props) {
    return(
        <form onSubmit={props.onSubmit}>
            <span>GitHub username: </span>
            <input type="text" name="user" placeholder="e.g. Vododovoodvod" onChange={props.onChange}></input>
            <button type="submit">GO!</button>
        </form>
    );
}