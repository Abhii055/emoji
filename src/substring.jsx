import emojidata from "./emojidata";
const shortlenmeaning = emojidata.map(function (emojidata){
    return(emojidata.meaning.substring(0,101))
})
export default shortlenmeaning;