import React from 'react';
import cosmoman from '../../../img/КОСМОНАВТ.png'
const InfornationBlock = () => {
    return (
        <div class="block-with-information">
            <div class="square">

            </div>
            <div class="text">
                <div class="under-text">
                    О компании
                            </div>
                <div class="bottom-text">
                    Наша компания предоставляет прекрасные туры, которые помогут вам справить прекрасные
                    дни. Это будет незабываемый отдых, который подярит бурю эмоций и море вдохновений.
                    Наша компания предоставляет прекрасные туры, которые помогут вам справить прекрасные
                    дни. Это будет незабываемый отдых, который подярит бурю эмоций и море вдохновений. Наша
                    компания предоставляет прекрасные туры, которые помогут вам справить прекрасные дни. Это
                    будет незабываемый отдых, который подярит бурю эмоций и море вдохновений.
                            </div>
            </div>

            <div class="space-man">
                <img src={cosmoman} alt="" />
            </div>
        </div>
    );
}

export default InfornationBlock