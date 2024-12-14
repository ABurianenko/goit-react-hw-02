const Feedback = ({ voteData, totalFeedback, positiveFeedback }) => {
    
    return (
        <div>
            <ul>
                <li>Good: {voteData.good}</li>
                <li>Neutral: {voteData.neutral}</li>
                <li>Bad: {voteData.bad}</li>
                {totalFeedback && (
                    <div>
                        <li>
                        Total: {totalFeedback}
                    </li>
                    <li>
                        Positive: {positiveFeedback}%
                    </li>
                    </div>
                )}
            </ul>
        </div>
    )
};

export default Feedback;