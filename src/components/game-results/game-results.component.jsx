import React from 'react';
import Items from '../items/items.component';
const GameResults = ({
    kills,deaths,assists,minionsKilled,goldEarned,item0,item1,item2,item3,item4,item5,item6
}) => (
    <div className="game-results"> 
    <Items items={[item0,item1,item2,item3,item4,item5,item6]}/>
    <div className="stats">
        <span>{kills}/{deaths}/{assists}</span>
        <span>  {minionsKilled}</span>
        
        <span>  {Math.round((goldEarned / 1000) * 10) / 10}k </span>
    </div>
</div>
)

export default GameResults;