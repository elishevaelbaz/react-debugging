import React from 'react';
import './App.css';
import InstructorContainer from './InstructorContainer'
import Header from './Header'

const mod4instructors = [
  {
    name: "Ian Hollander",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-UD54WDGFP-ca9e4fa7fa57-512",
    hired: 2019,
    position: "Lead Instructor"
  },
  {
    name: "Jack Hilscher",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-UGTTQ1ZEJ-efb9f4228c5f-512",
    hired: 2019,
    position: "Software Engineering Coach"
  },
  {
    name: "Rei Reynoso",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-UHBJ9SLFR-fdd5c76c5e0a-512",
    hired: 2019,
    position: "Software Engineering Coach"
  }
]

class App extends React.Component {
  render(){
    return <div>
      <header/>
      <InstructorContainer instructors = {mod4instructors}/> 
    </div>
  }
}

export default App;
