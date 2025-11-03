import ChatContent from "./chat_content";
import Conversations from "./conversations";
import Header from "./header";

export default function InboxPage(){
  const inboxConversations = [
    {
      avatar: 'https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg', 
      name: 'Tom Anderson',
      messageNoRead: 8,
      timeLastSeen: '12:24 AM',
      lastMessage: 'Hello, I’m interested in this item you posted yesterday. Could you please provide more details and let me know if it’s still available?',
      isOnline: true,
    },
    {
      avatar: 'https://people.com/thmb/gzHtG_UnZBsUuHVJx9xjB5yAfIQ=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/people-headshot-nick-maslow-f21ef38676504bc89a091ec9a5c95e4b.jpg',
      name: 'Luis Pittman',
      messageNoRead: 5,
      timeLastSeen: '10:50 AM',
      lastMessage: 'Hi, can I ask if there is anything I should know before confirming my order? Thank you!',
      isOnline: true,
    },
    {
      avatar: 'https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg',
      name: 'Alisson Mack',
      messageNoRead: 0,
      timeLastSeen: 'Yesterday',
      lastMessage: 'I want to complain about an item I received recently, it seems to be defective.',
      isOnline: false,
    },
    {
      avatar: 'https://images.squarespace-cdn.com/content/v1/6253c0a34c71c941801fde7c/1736089525421-KSNFA4VJ1NMC1PQUMT1L/2024-street-portraits-106.jpg',
      name: 'Barry George',
      messageNoRead: 0,
      timeLastSeen: '09:54 AM',
      lastMessage: 'Is there any chance to get a refund for the product I purchased last week?',
      isOnline: true,
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xZ-Dad8MElzAFU9iBlSx4qAMtYpnKzEt_Q&s',
      name: 'Jenny Lloyd',
      messageNoRead: 0,
      timeLastSeen: 'Yesterday',
      lastMessage: 'I’m not sure if this is what I want. Can I exchange it for another item?',
      isOnline: false,
    },
    {
      avatar: 'https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q',
      name: 'Andrew Larson',
      messageNoRead: 0,
      timeLastSeen: 'Yesterday',
      lastMessage: 'Can you help me choose from the available options before I make the purchase?',
      isOnline: false,
    },
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <Header />
      {/**Chat */}
      <div style={{
        marginTop: 28,
        width: '100%',
        borderRadius: 6,
        backgroundColor: 'white',
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
        display: 'flex',
        overflow: 'hidden',
      }}>
        <Conversations inboxConversations={inboxConversations}/>
        <ChatContent />
      </div>
    </div>
  )
}