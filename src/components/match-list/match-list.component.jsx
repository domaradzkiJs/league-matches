import React from 'react';
import './match-list.styles.scss';
import { MatchListQuery, MatchDetailsQuery } from '../../lolApi.data';
import Wrapper from '../wrapper/wrapper.component';
import SpinnerLoader from '../spinner-loader/spinner-loader.component';
class MatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state={matchList:'',
                    loading: true,
                    playerStats:[],
                    showItem: 10
        }
    }

    getData = async () => {
        let arr=[];
        //fetching list of matches based on accountId
        const matchListResponse = await fetch(MatchListQuery(this.props.accId,this.props.region,this.state.showItem));
        const matchListData = await matchListResponse.json();   
           
        const matchesIds =  matchListData.matches.map(el=>(el.gameId));
        
        //fetching match details 
        // how to save order?
        matchesIds.map(async el => {
            let resMatchDetails =  await fetch(MatchDetailsQuery(el,this.props.region));
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
                                    
                   <SpinnerLoader/>                      

                 } 
         
              
             
            </div> 
        )
    }
}

export default MatchList;