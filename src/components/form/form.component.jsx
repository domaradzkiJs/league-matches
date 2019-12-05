import React from 'react';
import './form.styles.scss';
const Form = ({onSubmit}) => (
    <form onSubmit={onSubmit}>
        
        
        <select  className="drop-servers">
            <option value="EUNE">Server</option>
            <option>EUNE</option>
            <option>EUW</option>
            <option>LAS</option>
            <option>LAN</option>
            <option>TR</option>
            <option>NA</option>
            <option>JP</option>
            <option>OCE</option>
            <option>BR</option>
            <option>KR</option>
            <option>RU</option>
            </select>
        <input type="text" id="summonerNickname" placeholder="check player for ex. Mad Texas"/>
        <button type="submit"> Look </button>
    </form>
)

export default Form;