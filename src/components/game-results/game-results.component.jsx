import React from 'react';

const GameResults = ({kills,deaths,assists,minionsKilled,goldEarned}) => (
    <div className="game-results"> 
    <div className="items-container"> </div>
    <div className="stats">
        <span>{kills}/{deaths}/{assists}</span>
        <span>  {minionsKilled}</span>
        
        <span>  {Math.round((goldEarned / 1000) * 10) / 10}k </span>
    </div>
</div>
)

export default GameResults;