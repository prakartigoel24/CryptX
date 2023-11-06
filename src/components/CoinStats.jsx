import React from 'react';

export const CoinStats = ({currency_symbol, market_cap_rank, market_cap, total_supply, liquidity_score, total_volume}) => {
  return (
    <div>
        <h1 className='text-2xl underline font-mono font-extrabold'>Coin Statistics:</h1>
        <table className='table-auto  text-xl font-mono border-indigo-600 columns-lg border-spacing-2 m-2'>
            <tbody>
              <tr>
                <td className='font-bold'>Market Cap Rank : </td>
                <td>{market_cap_rank}</td>
              </tr>
              <tr>
                <td className='font-bold'>Market Cap in {currency_symbol} : </td>
                <td>{market_cap}</td>
              </tr>
              <tr>
                <td className='font-bold'>Liquidity Score : </td>
                <td>{liquidity_score}</td>
              </tr>
              <tr>
                <td className='font-bold'>Total Supply : </td>
                <td>{total_supply}</td>
              </tr>
              <tr>
                <td className='font-bold'>Total Volume in {currency_symbol} : </td>
                <td>{total_volume}</td>
              </tr>
            </tbody>
            </table>
    </div>
  )
}
