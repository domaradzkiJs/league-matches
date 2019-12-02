import React from 'react';
import { MatchListQuery, MatchDetailsQuery } from '../../lolApi.data';
class MatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state={matchList:'',
                    loading: true,
                    playerStats:[]
        }
    }

    componentDidMount = async () => {
        let arr=[];
        //fetching list of matches based on accountId
        const matchListResponse = await fetch(MatchListQuery(this.props.accId));
        const matchListData = await matchListResponse.json();   
        console.log(matchListData);     
        const matchesIds =  matchListData.matches.map(el=>(el.gameId));
        console.log(matchesIds);
        //fetching match details 
        // how to save order?
        matchesIds.map(async el => {
            let resMatchDetails =  await fetch(MatchDetailsQuery(el));
            let matchesDetails = await resMatchDetails.json();    

            arr.push(matchesDetails);     
            

           if (arr.length===matchesIds.length)  this.setState({matchList: arr, loading:false},this.getPlayerStats)
            /* this.setState({matchList: arr, loading:false}); */
            
            })
       
    }
    //get Data based on participandId
    getPlayerStats = () => {
        let statsArr=[];
        this.state.matchList.map((el,i)=>{
            let myId;
            let index = i;
            
            el.participantIdentities.map(el=>{
                // check if nickname is included based on search prop and set his id
                if (el.player.summonerName.includes(this.props.nickName)) {
                    myId = el.participantId;
                    //get searched player stats from all participants data
                    statsArr.push( this.state.matchList[index].participants[myId-1]);
                }
    
                
                this.setState({playerStats:statsArr});
            } 
          
            )

    })          

    }




    renderMatchList = matchList => {
        return (
            <ul>
                {    
                this.state.playerStats.map( (el, i )=> (
                    <li key={i}> <img src={`https://cdn.communitydragon.org/9.20.1/champion/${el.championId}/square`} alt={el.championId}/> 

                    </li>)) 
                } 
             </ul>
        )
    }

    render() {

    

        return(

            <div>
                <h1>{this.props.nickName} Match history </h1>
                  {    
                   (!this.state.loading) ? this.renderMatchList(this.state.matchList)  : "loading animation"                      

                 } 
                <button onClick={()=>console.log(this.state) }>getMatchInfo</button>
              
              
            </div> 
        )
    }
}

export default MatchList;