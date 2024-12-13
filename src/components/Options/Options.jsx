import {icon, feedbackButton, feedbackContainer, smileButtons} from './Options.module.css'

const Options = ({ setVoteData, totalFeedback }) => {
    const updateFeedback = (feedbackType) => {
        setVoteData(prev => ({...prev, [feedbackType]: prev[feedbackType]+1}))
    }

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
                    <svg className={icon}>
                        <use href='/src/svg/symbol-defs.svg#icon-satisfied'></use>
                    </svg>
                </button>
                <button className={feedbackButton} onClick={() => updateFeedback('neutral')}>
                    <svg className={icon}>
                        <use href='/src/svg/symbol-defs.svg#icon-neutral'></use>
                    </svg>
                </button>
                <button className={feedbackButton} onClick={() => updateFeedback('bad')}>
                    <svg className={icon}>
                        <use href='/src/svg/symbol-defs.svg#icon-sad'></use>
                    </svg>
                </button>
            </div>
            
            
            {totalFeedback!==0 && (
                <button onClick={handleReset}>Reset</button>
            )}
        </div>
    )
}

export default Options