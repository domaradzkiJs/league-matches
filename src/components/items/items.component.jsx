import React from 'react';
 import { storage } from '../../firebase.utili'; 
class Items extends React.Component{
    constructor(props){
        super(props);
        this.state={url:[]};
    }

    componentDidMount() {
       for (let i=0; i<this.props.items.length;i++){
        this.getUrl(this.props.items[i]);
       }
    
    }
 
    getUrl = async (item) => {
    let storageRef = storage.ref();
    let itemsRef = storageRef.child('items');
    let itemNumb = `${item}.png`;
    let itemRef = itemsRef.child(itemNumb);
     let downloadUrl = await itemRef.getDownloadURL();
     //use concat array method
     this.setState( state=> {
        const url = state.url.concat(downloadUrl);
       return {
           url
       };
    
    })
    

    }  




    render() {

      return  (
          <div>
               { (this.state.url.length===7) ?
                  <div>{
                     this.state.url.map((el,i)=>(
                        <img key={i} src={ el } width="20" height="20" alt={ el[i] }/>
                     ))
                     }
                 
                  
                  </div>
                  : null
              }
             
          </div>
      )
    }
} 



export default Items;