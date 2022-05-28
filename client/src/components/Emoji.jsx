import {useState} from 'react'
import Picker from 'emoji-picker-react'
function Emoji({setText}) {

    const [showEmojies, setShowEmojies] = useState(false)
    const onEmojiClick = (event, emojiObject) => {
        setText(prev => prev + emojiObject.emoji)
    }
  return (
    <div>
        <button className='emoji-button' onClick={() => setShowEmojies(!showEmojies)}>
            {showEmojies ? "-" : "+"}
        </button>
        {showEmojies && <Picker pickerStyle={{width: "100%", height:"220px"}} onEmojiClick={onEmojiClick} />}
    </div>
  )
}

export default Emoji