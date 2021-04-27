import React from 'react';
import {Link} from 'react-router-dom' 

const ButtonForInformation = () => {
    return (
        <div className="button-for-tours">
            <svg width="59" height="66" viewBox="0 0 59 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="33.0001" cy="33.0001" r="25.4571" fill="#00041C" fillOpacity="0.5" />
                <circle cx="33.0001" cy="33.0001" r="24.9571" stroke="#001697" strokeOpacity="0.5" />
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66C42.9243 66 51.8254 61.6191 57.8749 54.6857H55.1524C49.5252 60.4333 41.6791 64 33 64C15.8792 64 2 50.1208 2 33C2 15.8792 15.8792 2 33 2V0Z"
                    fill="#0024FF" fillOpacity="0.5" />
            </svg>
            <div className="text-tours">
                <Link className="inf-button" to={'/ourTours'}>Открыть список туров</Link>

               
                {/* <a href="/our-tours.php">Открыть список туров</a> */}
            </div>
        </div>
    );
}

export default ButtonForInformation