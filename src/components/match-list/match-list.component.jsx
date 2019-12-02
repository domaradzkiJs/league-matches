import React from 'react';
import './match-list.styles.scss';
import { MatchListQuery, MatchDetailsQuery } from '../../lolApi.data';
import Wrapper from '../wrapper/wrapper.component';
class MatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state={matchList:'',
                    loading: true,
                    playerStats:[]
        }
    }

    getData = async () => {
        let arr=[];
        //fetching list of matches based on accountId
        const matchListResponse = await fetch(MatchListQuery(this.props.accId));
        const matchListData = await matchListResponse.json();   
           
        const matchesIds =  matchListData.matches.map(el=>(el.gameId));
        
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

    componentDidMount =  () => {
        this.getData();
       
    }

    componentDidUpdate = (prevProps) => {
        if ((this.props.nickName) && (this.props.nickName!==prevProps.nickName)) {
            this.getData();
        }
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



/* 
    renderMatchList = matchList => {
        
        return (
            <div className="matchList-container">
                {    
                this.state.playerStats.map( (el, i )=> (

                    <div className="wrapper" key={i}> 
                    
                        <div> <img src={`https://cdn.communitydragon.org/9.20.1/champion/${el.championId}/square`} alt={el.championId} width='60' height='60'/> </div> 
                        
                        <div className="overview"> 
                            <div className='endgame-result'> Victory </div>
                            <div className="game-mode"> Ranked Flex </div>
                            <div className= "summ-spells"> 
                                <div>sp1 </div>
                                <div>sp2</div>
                            </div>                        
                        </div>

                        <div className="game-results"> 
                            <div className="items-container"> </div>
                            <div className="stats">
                                <span>10/10/10</span>
                                <span>200</span>
                                <span>3,450</span>
                            </div>
                        </div>

                        <div className="game-info"> 
                            <div className="map"> {map.get(this.state.matchList[i].mapId)} </div>
                            <div className="data">
                                <span>32:07</span>
                                <span>01/12/2019s</span>
                             </div>
                        </div>
                    </div>

                        )                     
                    ) 
                }
                </div>
        )
    } */

    render() {

        const ts= this.state;

        return(

            <div>
                <h1>{this.props.nickName} Match history </h1>
                  {    

                   (!this.state.loading) ? 

                   <div className="matchList-container">
                    <Wrapper playerStats={ts.playerStats} matchList={ts.matchList}/>
                  </div>                    
                   :              
                                    
                   "loading animation"                      

                 } 
                <button onClick={()=>console.log(ts) }>getMatchInfo</button>
              
              
            </div> 
        )
    }
}

export default MatchList;