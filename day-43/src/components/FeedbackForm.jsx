import { useState } from "react"

export default function FeedBackForm(){
const [text, SetText] = useState("")
const [isSending, SetIsSending] = useState(false)
const [isSent, SetIsSent] = useState(false)

async function handleSubmit(e){
  e.preventDefault();
  SetIsSending(true)
  await sendMessage(text)
  SetIsSending(false)
  SetIsSent(true)
}

if(isSent){
  return <h1>Thanks for feedback</h1>
}

function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

return (
  <div className="App">
    <form onSubmit={handleSubmit}>
      <h1>Та текстээ оруулна уу?</h1>
      <textarea 
        value={text} 
        onChange={(e) => SetText(e.target.value)}
        disabled={isSending}>
      </textarea>
      <br />
      <button disabled={isSending}>Send</button>
      {isSending && <p>Sending...</p>}
    </form>
  </div>
);
}