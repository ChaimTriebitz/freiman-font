import { ACTIONS } from '../../state'
import { useGlobalState, useUpdateEffect } from '../../hooks'
import { PostDialog } from '..'


export const Dialogs = () => {
   const { dialogs } = useGlobalState()

   return (
      <>
         {dialogs?.postDialog?.isOpen && <PostDialog />}
      </>
   )
}
