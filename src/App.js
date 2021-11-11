import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="37d6c40b-1cf1-41da-b73e-ea39df301a59"
      userName="Alex"
      userSecret="1234"
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
