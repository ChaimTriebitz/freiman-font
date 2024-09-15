export const strings = {
   getLastWord,
   cutStrAndAddDots
}

function getLastWord(str, sep) {
   const words = str.split(sep);
   if (words.length > 0) {
      return words[words.length - 1];
   }
   return '';
}

export function cutStrAndAddDots(str, length) {
   if (str.length <= length) {
      return str;
   } else {
      return str.substring(0, length) + '...';
   }
}