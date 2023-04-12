import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  const [ num1, setNum1 ] = useState(0)
  const [ num2, setNum2 ] = useState(0)
  const [ result, setResult ] = useState(0)

  function Add(): any{
    setResult(Number(num1) + Number(num2))    
  }

  function Subtract(): any{
    setResult(Number(num1) - Number(num2))   
  }

  function Multiply(): any{
    setResult(Number(num1) * Number(num2))    
  }

  function Divide(): any{
    setResult(Number(num1) / Number(num2))    
  }

  return (
    <div className='container'>
      <div className='result' data-testid="result">{result}</div>
      <input className='input' type="number" value={num1} data-testid="num1" onChange={(e:any) =>{setNum1(e.target.value)} }/>
      <input className='input' type="number" value={num2} data-testid="num2" onChange={(e:any) =>{setNum2(e.target.value)} }/>
      <button className='button' data-testid="add" onClick={Add}>ADD</button>
      <button className='button' data-testid="subtract" onClick={Subtract}>Subtract</button>
      <button className='button' data-testid="multiply" onClick={Multiply}>Multiply</button>
      <button className='button' data-testid="divide" onClick={Divide}>Divide</button>
    </div>
    )
}
