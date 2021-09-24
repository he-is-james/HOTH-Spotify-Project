import './Profile.css';

function Profile(props) {
    return (
        <div className="profileBox">
            <div className="headerBox1">
                <div className="headers">
                    <h2><u><strong>{props.account}</strong></u></h2>
                    <img className="NImage" src={props.isNImage}/>
                </div>
            </div>
            <div className="divider" />
            <div className="headerBox2">
                <div className="text">
                    <p><u>Currently Listening To:</u></p>
                    {props.isListening} <img className="LImage" src={props.isLImage}/>
                </div>
            </div>
            <div className="divider1" />
            <div className="headers">
                <strong>RANKINGS:</strong>
            </div>
            <div className="headerBox2">
                <div className="text">
                    <p><u>Most played song: </u></p>
                </div>
                <div className="text">
                    {props.mostPlayed} <img className="LImage" src={props.isPImage} />
                </div>
            </div>
            <div className="headerBox2">
                <div className="text">
                    <p><u>Genres: </u></p>
                    <p> #1: {props.topGenre1}</p>
                    <p> #2: {props.topGenre2}</p>
                    <p> #3: {props.topGenre3}</p>
                    {/* <p>{props.topGenre4}</p>
                    <p>{props.topGenre5}</p> */}
                </div>
            </div>
        </div>
    )
}

export default Profile;