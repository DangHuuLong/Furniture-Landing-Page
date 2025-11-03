import {Search} from 'lucide-react'
import Card from './card'
import InfoCard from './info_card';
export default function KnowledgeBasePage(){
  const cards = [
    {
      img: '/src/modules/admin/pages/knowledge_base/images/pages.png',
      title: 'Getting Started',
      contents: [
        'Guide to get started faster',
        'Video tutorials for beginners',
        'Moving to Bolt system',
      ],
    },
    {
      img: '/src/modules/admin/pages/knowledge_base/images/users.png',
      title: 'Personal Settings',
      contents: [
        'Setting up your profile',
        'Changing business name',
        'Changing email address',
      ],
    },
    {
      img: '/src/modules/admin/pages/knowledge_base/images/credit card.png',
      title: 'Billing',
      contents: ['Payment declined', 'Get a refund', 'Subscriptions'],
    },
    {
      img: '/src/modules/admin/pages/knowledge_base/images/statistics.png',
      title: 'Commerce',
      contents: ['Add products', 'Selling guide', 'Create categories'],
    },
  ];

  const infoCards = [
    {
      title: 'Community Forum',
      content: 'Get help from community members, ask any questions and get answers faster.',
      action: 'Join Community'
    },
    {
      title: 'Webinars',
      content: 'Join our series of webinars where you can ask questions live and see a presentation.',
      action: 'Register'
    }
  ]
  return (
    <div style={{
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '30px 40px 40px 40px',
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>Knowledge Base</p>

      {/**Search */}
      <div style={{
        marginTop: 54,
        position: 'relative'
      }}>
        <input type="text" 
          placeholder="Search..."
        style={{
          width: '100%',
          height: 48,
          borderRadius: 4,
          border: '1px solid #D9E1EC',
          outline: 'none',
          paddingLeft: 48,
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#A1A7C4',
        }}/>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: 15,
        }}>
          <Search size={24} color='#7E84A3'/>
        </div>
      </div>
      <div style={{
        display: 'flex',
        gap: 30,
        marginTop: 6
      }}>
        {cards.map((card, i)=>{
          return <Card key={i} card={card}/>
        })}
      </div>
      <div style={{
        display: 'flex',
        gap: 30,
        marginTop: 32
      }}>
        {infoCards.map((infoCard, i) => {
          return <InfoCard key={i} infoCard={infoCard} />
        })}
      </div>
    </div>
  )
}