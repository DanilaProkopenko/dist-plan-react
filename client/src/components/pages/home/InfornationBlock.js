import React from 'react';
import cosmoman from '../../../img/КОСМОНАВТ.png'
const InfornationBlock = () => {
    return (
        <div className="block-with-information">
            <div className="square">

            </div>
            <div className="text">
                <div className="under-text">
                    О компании
                            </div>
                <div className="bottom-text">
                    Наша компания предоставляет прекрасные туры, которые помогут вам справить прекрасные
                    дни. Это будет незабываемый отдых, который подярит бурю эмоций и море вдохновений.
                    Наша компания предоставляет прекрасные туры, которые помогут вам справить прекрасные
                    дни. Это будет незабываемый отдых, который подярит бурю эмоций и море вдохновений. Наша
                    компания предоставляет прекрасные туры, которые помогут вам справить прекрасные дни. Это
                    будет незабываемый отдых, который подярит бурю эмоций и море вдохновений.
                            </div>
            </div>

            <div className="space-man">
                <img src={cosmoman} alt="" />
            </div>
        </div>
    );
}

export default InfornationBlock