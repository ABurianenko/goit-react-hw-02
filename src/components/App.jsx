import {useEffect, useState} from 'react'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'
import './App.css'


function App() {
  const [voteData, setVoteData] = useState(() => {
    const savedStatistics = window.localStorage.getItem("statistics");
    if (savedStatistics !== null) {
      return JSON.parse(savedStatistics)
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
    window.localStorage.setItem("statistics", JSON.stringify(voteData));
  }, [voteData])

  const updateFeedback = (feedbackType) => {
        setVoteData(prev => ({...prev, [feedbackType]: prev[feedbackType]+1}))
    }

  const totalFeedback = voteData.good + voteData.bad;
  const positiveFeedback = Math.round(((voteData.good + voteData.neutral) / totalFeedback) * 100)

  return (
    <>
      <Description />
      <Options setVoteData={setVoteData} updateFeedback={updateFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback ? <Feedback voteData={voteData} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
    </>
  )
}

export default App
