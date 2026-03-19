import React from 'react'
import Card from './components/Card'
import { StarOffIcon } from 'lucide-react'

const App = () => {

  const openings = [
    {
      logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      companyName: "Google",
      post: "Frontend Developer",
      datePosted: "5 days ago",
      jobType: "Full Time",
      level: "Senior Level",
      payPerHour: "$65/hr",
      location: "Mumbai, India"
    },
    {
      logo: "https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg",
      companyName: "Amazon",
      post: "Backend Developer",
      datePosted: "2 weeks ago",
      jobType: "Part Time",
      level: "Mid Level",
      payPerHour: "$45/hr",
      location: "Bangalore, India"
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoGhnWW9wN-P9X7Ckt3y0snA59WDlcsjeHg&s",
      companyName: "Apple",
      post: "UI/UX Designer",
      datePosted: "1 week ago",
      jobType: "Full Time",
      level: "Entry Level",
      payPerHour: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      logo: "https://i.ytimg.com/vi/GV3HUDMQ-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDX0meXWntQams20Wn3jArUnablg",
      companyName: "Netflix",
      post: "Full Stack Developer",
      datePosted: "3 days ago",
      jobType: "Full Time",
      level: "Senior Level",
      payPerHour: "$80/hr",
      location: "Remote"
    },
    {
      logo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      companyName: "Meta",
      post: "React Developer",
      datePosted: "10 days ago",
      jobType: "Part Time",
      level: "Mid Level",
      payPerHour: "$55/hr",
      location: "Delhi, India"
    },
    
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR3neyop9Cpm0RBJU4pRFAXIpYAk6qqf2OA&s",
      companyName: "Tesla",
      post: "iOS Developer",
      datePosted: "4 weeks ago",
      jobType: "Part Time",
      level: "Senior Level",
      payPerHour: "$70/hr",
      location: "Mumbai, India"
    },
    {
      logo: "https://logoeps.com/wp-content/uploads/2011/05/oracle-logo-vector.png",
      companyName: "Oracle",
      post: "DevOps Engineer",
      datePosted: "8 days ago",
      jobType: "Full Time",
      level: "Mid Level",
      payPerHour: "$75/hr",
      location: "Remote"
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AjLz2Ze01BXCesLCvOhwrlz9qHboz6XEwQ&s",
      companyName: "Microsoft",
      post: "Data Scientist",
      datePosted: "12 days ago",
      jobType: "Full Time",
      level: "Senior Level",
      payPerHour: "$85/hr",
      location: "Bangalore, India"
    }
  ];



  return (

    <div className='parent'>
      {openings.map(function (el) {

        return <Card company={el.companyName}
          job={el.jobType}
          post={el.post}
          logo={el.logo} 
          date={el.datePosted}
          level={el.level}
          payPerHour={el.payPerHour}
          location={el.location}
          />

      })}
    </div>
  )
}

export default App
