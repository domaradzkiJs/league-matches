import React from 'react';
import { getFormatedTime, map } from '../../lolApi.data';


const GameInfo = ({mapId,gameCreation,gameDuration}) => {
    

return (
    <div className="game-info"> 
        <div className="map"> {map.get(mapId)} </div>
        <div className="data">
        
            <span>{Math.floor(gameDuration/60) +':' + gameDuration%60}  </span>
            <span>{getFormatedTime(gameCreation)}</span>
        </div>
    </div>
 )
}

export default GameInfo;