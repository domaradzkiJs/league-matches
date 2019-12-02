
const myProxy = 'https://guarded-plateau-90176.herokuapp.com/';
const API_KEY = "RGAPI-0cacc4ed-4411-40d9-b423-f213440cd6fc";



const Region = {
	'RU' : 'ru',
	'KR' : 'kr',
	'BR1' : 'br1',
	'OCE' : 'oc1',
	'JP' : 'jp1',
	'NA' : 'na1',
	'EUNE' : 'eun1',
	'EUW' : 'euw1',
	'TR' : 'tr1',
	'LAN' : 'la1',
	'LAS' : 'la2'
};




export const SummonerQuery = (nickName) => (
	`${myProxy}https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${API_KEY}`
)

export const MatchListQuery = (accountId) => (
	`${myProxy}https://eun1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=10&api_key=${API_KEY}`
)

export const MatchDetailsQuery = (matchId) => (
	`${myProxy}https://eun1.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${API_KEY}`
)


export const map = new Map();

map.set(4, 'Twisted Treeline');
map.set(11, `Summoner's Rift`);
map.set(12, `Howling Abyss`);


export const queue = new Map();

queue.set(420, "5v5 Ranked Solo");
queue.set(400, "5v5 Normal Draft");
queue.set(440, "5v5 Ranked Flex");
queue.set(430, "5v5 Normal Blind");
queue.set(460, "3v3 Normal Blind");
queue.set(470, "3v3 Ranked Flex");
queue.set(450, "5v5 ARAM");

export const spells = new Map();

spells.set(1,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_boost.png');
spells.set(3,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_exhaust.png');
spells.set(4,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_flash.png');
spells.set(5,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_Backtrack.png');
spells.set(6, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_haste.png');
spells.set(7, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_heal.png');
spells.set(11, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_smite.png');
spells.set(12, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_teleport.png');
spells.set(13, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonermana.png');
spells.set(14, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonerignite.png');
spells.set(21, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonerbarrier.png');
spells.set(30, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/benevolence_of_king_poro_icon.png');
spells.set(31, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/trailblazer_poro_icon.png');
spells.set(32, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_mark.png');

export const getFormatedTime = (mili) => {
    let d = new Date(mili);
  
    let dd = d.getDate();
    let mm = d.getMonth()+1;
    let year= d.getFullYear()
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    
    return `${dd}/${mm}/${year}`
  }