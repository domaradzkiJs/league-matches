
const myProxy = 'https://guarded-plateau-90176.herokuapp.com/';
const API_KEY = "RGAPI-46fe25d1-f68a-4c63-a160-4aceaf853faf";



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
