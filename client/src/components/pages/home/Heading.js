import React from 'react';
import planet from '../../../img/ФОН ПЛАНЕТА.png'
const Heading = () => {
    return (
        <div class="heading">
            <div class="grid">
                <div class="square">

                </div>
                <div class="text">
                    <div class="under-text">
                        Tours to
                                    </div>
                    <div class="bottom-text">
                        Distant planets
                                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="background-planets">
                    <img src={planet} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Heading