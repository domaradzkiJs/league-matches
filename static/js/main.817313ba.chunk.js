(this["webpackJsonpleague-matches"]=this["webpackJsonpleague-matches"]||[]).push([[0],{13:function(t,e,a){t.exports=a(25)},18:function(t,e,a){},20:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(12),c=a.n(r),o=(a(18),a(2)),i=a(3),m=a(5),l=a(4),u=a(6),p="https://guarded-plateau-90176.herokuapp.com/",d="RGAPI-675706e6-3e61-4c67-a2e6-5d11dfe0f778",g=function(t){return"".concat(p,"https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/").concat(t,"?api_key=").concat(d)},h=function(t){return"".concat(p,"https://eun1.api.riotgames.com/lol/match/v4/matchlists/by-account/").concat(t,"?endIndex=10&api_key=").concat(d)},f=function(t){return"".concat(p,"https://eun1.api.riotgames.com/lol/match/v4/matches/").concat(t,"?api_key=").concat(d)},v=new Map;v.set(4,"Twisted Treeline"),v.set(11,"Summoner's Rift"),v.set(12,"Howling Abyss");var b=new Map;b.set(420,"5v5 Ranked Solo"),b.set(400,"5v5 Normal Draft"),b.set(440,"5v5 Ranked Flex"),b.set(430,"5v5 Normal Blind"),b.set(460,"3v3 Normal Blind"),b.set(470,"3v3 Ranked Flex"),b.set(450,"5v5 ARAM");var y=new Map;y.set(1,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_boost.png"),y.set(3,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_exhaust.png"),y.set(4,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_flash.png"),y.set(5,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_Backtrack.png"),y.set(6,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_haste.png"),y.set(7,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_heal.png"),y.set(11,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_smite.png"),y.set(12,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_teleport.png"),y.set(13,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonermana.png"),y.set(14,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonerignite.png"),y.set(21,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonerbarrier.png"),y.set(30,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/benevolence_of_king_poro_icon.png"),y.set(31,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/trailblazer_poro_icon.png"),y.set(32,"http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_mark.png");var E=a(1),k=a.n(E),w=a(7),I=(a(20),function(t){var e=t.champId;t.champLvl;return s.a.createElement("div",null," ",s.a.createElement("img",{src:"https://cdn.communitydragon.org/9.20.1/champion/".concat(e,"/square"),alt:e,width:"60",height:"60"})," ")}),N=function(t){var e=t.victory,a=t.queueId,n=t.spell1Id,r=t.spell2Id;return s.a.createElement("div",{className:"overview"},s.a.createElement("div",{className:"endgame-result"}," ",e?"Victory":"Defeat"," "),s.a.createElement("div",{className:"game-mode"}," ",b.get(a)," "),s.a.createElement("div",{className:"summ-spells"},s.a.createElement("div",null," ",n," "),s.a.createElement("div",null," ",r," ")))},j=a(10),O=a.n(j);a(26);O.a.initializeApp({apiKey:"AIzaSyANpv6Uo1IHY0RRx88WwwKMlWCnEd9UbfE",authDomain:"leagueapp-b2402.firebaseapp.com",databaseURL:"https://leagueapp-b2402.firebaseio.com",projectId:"leagueapp-b2402",storageBucket:"leagueapp-b2402.appspot.com",messagingSenderId:"849952774709",appId:"1:849952774709:web:42cfd125fc20d21760af7c",measurementId:"G-BZ5CNL4V7M"});var S=O.a.storage(),D=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(m.a)(this,Object(l.a)(e).call(this,t))).getUrl=function(){var t=Object(w.a)(k.a.mark((function t(e){var n,s,r,c,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=S.ref(),s=n.child("items"),r="".concat(e,".png"),c=s.child(r),t.next=6,c.getDownloadURL();case 6:o=t.sent,a.setState((function(t){return{url:t.url.concat(o)}}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.state={url:[]},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){for(var t=0;t<this.props.items.length;t++)this.getUrl(this.props.items[t])}},{key:"render",value:function(){return s.a.createElement("div",null,7===this.state.url.length?s.a.createElement("div",null,this.state.url.map((function(t,e){return s.a.createElement("img",{src:t,width:"16",height:"16",alt:t[e]})}))):null)}}]),e}(s.a.Component),x=function(t){var e=t.kills,a=t.deaths,n=t.assists,r=t.minionsKilled,c=t.goldEarned,o=t.item0,i=t.item1,m=t.item2,l=t.item3,u=t.item4,p=t.item5,d=t.item6;return s.a.createElement("div",{className:"game-results"},s.a.createElement(D,{items:[o,i,m,l,u,p,d]}),s.a.createElement("div",{className:"stats"},s.a.createElement("span",null,e,"/",a,"/",n),s.a.createElement("span",null,"  ",r),s.a.createElement("span",null,"  ",Math.round(c/1e3*10)/10,"k ")))},L=function(t){var e=t.mapId,a=t.gameCreation,n=t.gameDuration;return s.a.createElement("div",{className:"game-info"},s.a.createElement("div",{className:"map"}," ",v.get(e)," "),s.a.createElement("div",{className:"data"},s.a.createElement("span",null,Math.floor(n/60)+":"+n%60,"  "),s.a.createElement("span",null,function(t){var e=new Date(t),a=e.getDate(),n=e.getMonth()+1,s=e.getFullYear();return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,"/").concat(n,"/").concat(s)}(a))))},_=function(t){var e=t.playerStats,a=t.matchList;return e.map((function(t,e){return s.a.createElement("div",{key:e,className:"wrapper"},s.a.createElement(I,{champId:t.championId,champLvl:t.stats.champLevel}),s.a.createElement(N,{victory:t.stats.win,queueId:a[e].queueId,spell1Id:t.spell1Id,spell2Id:t.spell2Id}),s.a.createElement(x,{kills:t.stats.kills,deaths:t.stats.deaths,assists:t.stats.assists,minionsKilled:t.stats.totalMinionsKilled+t.stats.neutralMinionsKilled,goldEarned:t.stats.goldEarned,item0:t.stats.item0,item1:t.stats.item1,item2:t.stats.item2,item3:t.stats.item3,item4:t.stats.item4,item5:t.stats.item5,item6:t.stats.item6}),s.a.createElement(L,{mapId:a[e].mapId,gameCreation:a[e].gameCreation,gameDuration:a[e].gameDuration}))}))},M=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(m.a)(this,Object(l.a)(e).call(this,t))).getData=Object(w.a)(k.a.mark((function t(){var e,n,s,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,fetch(h(a.props.accId));case 3:return n=t.sent,t.next=6,n.json();case 6:s=t.sent,(r=s.matches.map((function(t){return t.gameId}))).map(function(){var t=Object(w.a)(k.a.mark((function t(n){var s,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(f(n));case 2:return s=t.sent,t.next=5,s.json();case 5:c=t.sent,e.push(c),e.length===r.length&&a.setState({matchList:e,loading:!1},a.getPlayerStats);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)}))),a.componentDidMount=function(){a.getData()},a.componentDidUpdate=function(t){a.props.nickName&&a.props.nickName!==t.nickName&&a.getData()},a.getPlayerStats=function(){var t=[];a.state.matchList.map((function(e,n){var s,r=n;e.participantIdentities.map((function(e){e.player.summonerName.includes(a.props.nickName)&&(s=e.participantId,t.push(a.state.matchList[r].participants[s-1])),a.setState({playerStats:t})}))}))},a.state={matchList:"",loading:!0,playerStats:[]},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state;return s.a.createElement("div",null,s.a.createElement("h1",null,this.props.nickName," Match history "),this.state.loading?"loading animation":s.a.createElement("div",{className:"matchList-container"},s.a.createElement(_,{playerStats:t.playerStats,matchList:t.matchList})),s.a.createElement("button",{onClick:function(){return console.log(t)}},"getMatchInfo"))}}]),e}(s.a.Component),C=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(m.a)(this,Object(l.a)(e).call(this))).getSummoner=Object(w.a)(k.a.mark((function e(){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g(t.state.summonerNick));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({summonerData:n});case 7:case"end":return e.stop()}}),e)}))),t.handleSubmit=function(e){e.preventDefault();var a=document.getElementById("summonerNickname").value;t.setState({summonerNick:a},(function(){return t.getSummoner()}))},t.initMatchList=function(){var e=t.state.summonerData;return s.a.createElement(M,{nickName:e.name,accId:e.accountId})},t.state={summonerNick:"",summonerData:""},t}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"search-form"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null," Browse my match history "),s.a.createElement("input",{type:"text",id:"summonerNickname"}),s.a.createElement("button",{type:"submit"}," Look ")),s.a.createElement("button",{onClick:function(){return console.log(t.state)}},"Check State"),this.state.summonerData?this.initMatchList():null)}}]),e}(s.a.Component),R=(a(24),function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(m.a)(this,Object(l.a)(e).call(this))).state={summoner:null,matchList:null},t}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,null))}}]),e}(s.a.Component));c.a.render(s.a.createElement(R,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.817313ba.chunk.js.map