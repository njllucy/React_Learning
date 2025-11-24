import Section1 from './components/Section1/Section1'
import Section2 from './components/section2/Section2'

function App() {

  const users=[
    {
      id:1,
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      id:2,
      img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underserved'
    },
    {
      id:4,
      img:'https://plus.unsplash.com/premium_photo-1688822011902-55a31e5a17a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Satisfied'
    },
  ]
  return (
    <>
     <Section1 users={users}/>
     <Section2 /> 
    </>
  )
}

export default App
