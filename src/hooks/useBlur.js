import { useEffect, useRef } from 'react';

const blurRefs = [];

export function useBlur(callback) {
   const ref = useRef(null);

   useEffect(() => {
      blurRefs.push(ref);

      const handleBlur = (e) => {
         for (const componentRef of blurRefs) {
            if (componentRef.current && !componentRef.current.contains(e.target)) {
               if (e.target.tagName !== 'DIV' && e.target.tagName !== 'DIALOG') continue
               // console.log(e.target.tagName);
               callback();
            }
         }
      };

      document.addEventListener('mousedown', handleBlur);

      return () => {
         document.removeEventListener('mousedown', handleBlur);
         const index = blurRefs.indexOf(ref);
         if (index !== -1) {
            blurRefs.splice(index, 1);
         }
      };
   }, [callback, ref]);

   return ref;
}
