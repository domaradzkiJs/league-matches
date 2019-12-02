import React from 'react';
import { queue, spells } from '../../lolApi.data';
const Overview = ({victory,queueId,spell1Id,spell2Id}) => (
    <div className="overview"> 
        <div className='endgame-result'> {victory ? 'Victory': 'Defeat'} </div>
        <div className="game-mode"> {queue.get(queueId)} </div>
        <div className= "summ-spells"> 
            <div> {spell1Id} </div>
            <div> {spell2Id} </div>
        </div>                        
    </div>
)

export default Overview;