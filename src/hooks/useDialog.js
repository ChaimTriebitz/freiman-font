import { useEffect } from 'react'
import { ACTIONS } from '../state'
import { useBlur } from './useBlur'
import { useGlobalState } from './useGlobalState'

export const useDialog = (entity) => {
   const { dispatch } = useGlobalState()

   const dialogRef = useBlur(() => dialogRef.current.close())

   useEffect(() => dialogRef.current.showModal(), [dialogRef])

   const closeDialog = () => dispatch({ type: ACTIONS.CLOSE_DIALOG, entity })

   return {
      closeDialog,
      dialogRef
   }

}
