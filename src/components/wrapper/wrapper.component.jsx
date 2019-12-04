import React from 'react';

import ChampIconAndLvl from '../champ-icon-and-lvl/champIconAndLvl.component';
import Overview from '../overview/overview.component';
import GameResults from '../game-results/game-results.component';
import GameInfo from '../game-info/game-info.component';

const Wrapper = ({playerStats, matchList}) => (


    playerStats.map( (el, i )=> (
        
        <div key={i} className="wrapper">
        
        <ChampIconAndLvl champId={el.championId} champLvl={el.stats.champLevel}/>                   
        <Overview victory={el.stats.win} queueId={matchList[i].queueId} spell1Id={el.spell1Id} spell2Id={el.spell2Id}  />

        <GameResults kills={el.stats.kills} deaths={el.stats.deaths} assists={el.stats.assists} 
        minionsKilled={el.stats.totalMinionsKilled + el.stats.neutralMinionsKilled} goldEarned={el.stats.goldEarned} 
        item0={el.stats.item0}  item1={el.stats.item1} item2={el.stats.item2} item3={el.stats.item3} item4={el.stats.item4} item5={el.stats.item5} item6={el.stats.item6}    
        />
        <GameInfo mapId={matchList[i].mapId} gameCreation={matchList[i].gameCreation} gameDuration={matchList[i].gameDuration} />

       </div>


        )                     
    ) 

)

export default Wrapper;