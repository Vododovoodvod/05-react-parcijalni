export function GitProfile(props) {

    return(
        <div>
            <img src={props.profile.avatar_url}/>
            <div>{props.profile.name}</div>
            <div>BIO: {props.profile.bio}</div>
            <div>LOCATION: {props.profile.location}</div>
            <span>REPOSITORIES:</span>
        </div>
    );

    
}