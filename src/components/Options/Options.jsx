import {feedbackButton, feedbackContainer, smileButtons, resetButton, resetSection} from './Options.module.css'

const Options = ({ setVoteData, totalFeedback, updateFeedback }) => {

    const handleReset = () => {
        setVoteData({
            good: 0,
	        neutral: 0,
	        bad: 0
        })
    }

    return (
        <div className={feedbackContainer}>
            <div className={smileButtons}>
                <button className={feedbackButton} onClick={()=>updateFeedback('good')}>
                    Good
                </button>
                <button className={feedbackButton} onClick={() => updateFeedback('neutral')}>
                    Neutral
                </button>
                <button className={feedbackButton} onClick={() => updateFeedback('bad')}>
                    Bad
                </button>
            </div>
            
            <div className={resetSection}>
                {totalFeedback!==0 && (
                <button className={resetButton} onClick={handleReset}>Reset</button>
            )}
            </div>
            
        </div>
    )
}

export default Options