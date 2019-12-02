import React from 'react';

const ChampIconAndLvl = ({champId, champLvl}) => (
    <div> <img src={`https://cdn.communitydragon.org/9.20.1/champion/${champId}/square`} alt={champId} width='60' height='60'/> </div>
)

export default ChampIconAndLvl;