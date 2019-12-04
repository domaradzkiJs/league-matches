import React from 'react';
import { queue, spells } from '../../lolApi.data';
const Overview = ({victory,queueId,spell1Id,spell2Id}) => (
    <div className="overview"> 
        <div className='endgame-result'> {victory ? 'Victory': 'Defeat'} </div>
        <div className="game-mode"> {queue.get(queueId)} </div>
        <div className= "summ-spells"> 
            <div> <img src={ spells.get(spell1Id) } alt={spell1Id} width='16' height='16'/> </div>
            <div> <img src={ spells.get(spell2Id) } alt={spell2Id} width='16' height='16'/> </div>
        </div>                        
    </div>
)

export default Overview;

