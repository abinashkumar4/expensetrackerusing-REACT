import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
 

export const Transaction = ({transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const signcolor = (sign) =>{
        if(sign === '-')
        return "minus";
        else 
        return "plus";
    }
    return (
        <li className={ signcolor(sign)}>
              {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn"
              onClick = {() => deleteTransaction(transaction.id)}>x</button>
            </li> 
    )
}
