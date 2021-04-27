import React from 'react';
import planet from '../../../img/ФОН ПЛАНЕТА.png'
const Heading = () => {
    return (
        <div className="heading">
            <div className="grid">
                <div className="square">

                </div>
                <div className="text">
                    <div className="under-text">
                        Tours to
                                    </div>
                    <div className="bottom-text">
                        Distant planets
                                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="background-planets">
                    <img src={planet} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Heading