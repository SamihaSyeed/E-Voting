import React, { useState } from 'react'
import {list} from './List'
import './VoteList.css'
const VoteList = (props) => {
    const [voteList, setVoteList] = useState(list);
    const [vote, setVote] = useState(0);
    console.log(voteList)

    function handleSelect(event){
        console.log(event.target.value)
        setVote(event.target.value)
        console.log(vote)
    }
  return (
    <div className='voters-list'>
    <table>
        <thead>
            <tr>
            <th>S NO.</th>
            <th>SYMBOL</th>
            <th>PARTY</th>
            <th>CANDIDATE NAME</th>
            <th>VOTE</th></tr>
        </thead>  
        <tbody>
        {
            voteList.map(item =>{
                return (
                    
                    <tr key={item.key}>
                        <td>{item.key}</td>
                        <td><img src={item.symbol} alt='symbol' /></td>
                        <td>{item.party}</td>
                        <td>{item.name}</td>
                        <td><input type="radio" id={item.key} name="candidate" className='vote-option' value={item.key} onSelect={handleSelect.bind(this)} /></td>
                    </tr>
                )
            })
        }        
        </tbody>
    </table>
    </div>
  )
}

export default VoteList