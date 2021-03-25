import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {

    return (
        <ChatEngine 
            height= '100vh'
            projectID = '76a98183-845e-4b09-adbb-95e3d7b6bf4a'
            userName='dave'
            userSecret='1234'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App