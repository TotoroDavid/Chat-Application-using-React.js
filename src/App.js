import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine 
            height= '100vh'
            projectID = '76a98183-845e-4b09-adbb-95e3d7b6bf4a'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App