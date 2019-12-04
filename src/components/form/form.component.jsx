import React from 'react';

const Form = ({onSubmit}) => (
    <form onSubmit={onSubmit}>
    <label> Browse my match history </label>
    <select  className="drop-servers">
          <option placeholder="" value="EUNE">Server</option>
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
    <input type="text" id="summonerNickname"/>
    <button type="submit"> Look </button>
</form>
)

export default Form;