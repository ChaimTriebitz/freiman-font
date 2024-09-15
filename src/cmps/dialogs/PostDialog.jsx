import { OPTIONS } from '../../data'
import { useDialog, useGlobalState } from '../../hooks'

export const PostDialog = () => {
   const { page, dialogs } = useGlobalState()
   const { dialogRef, closeDialog } = useDialog('postDialog')
   const { category, currency, description, images, price, title, user } = dialogs.postDialog
   const { avatar, email, posts, username } = user

   return (
      <dialog ref={dialogRef} onClose={closeDialog} className='dialog post'>
         <div className='dialog-content'>
            <section>
               <h1>category<span>:</span>{category}</h1>
               <h1>title<span>:</span>{title}</h1>
               <h1>description<span>:</span>{description}</h1>
               <h1>price<span>:</span>{OPTIONS.currencies.find(c => c.name === currency).symbol}{price}</h1>
            </section>
            <section>
               <h1>username<span>:</span>{username}</h1>
               <h1>email<span>:</span>{email}</h1>
            </section>
         </div>
      </dialog >
   )
}
