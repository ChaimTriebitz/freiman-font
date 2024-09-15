import { useState } from 'react'
import { useDebounce, useGlobalState } from '../hooks'
import { svgs } from '../assets/svgs'
import { ACTIONS } from '../state'

export const Search = () => {
   const { rows, page, dispatch } = useGlobalState()
   const [isLoading, setIsLoading] = useState(false)
   const [value, setValue] = useState('')

   useDebounce(() => {
      setIsLoading(false)
      dispatch({ type: ACTIONS.SET, entity: 'search', payload: value })
   }, 500, [value])

   const handleChange = (e) => {
      setIsLoading(true)
      setValue(e.target.value)
   }

   return (
      <div className='search'>
         <input id={`search${page}`} value={value || ''} onChange={handleChange} placeholder='search' />
         <label htmlFor={`search${page}`} onClick={() => setValue('')}>
            {!isLoading && value && <button onClick={() => setValue('')} className='clear-search'>{svgs.clear}</button>}
            {!isLoading && !value && svgs.search}
            {isLoading && <div id='searchLoader'></div>}
         </label>
      </div>
   )
}
