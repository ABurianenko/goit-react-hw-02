const Feedback = ({ voteData, totalFeedback }) => {
    const positiveFeedback = Math.round(((voteData.good + voteData.neutral) / totalFeedback) * 100)
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