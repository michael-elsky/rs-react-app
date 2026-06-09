import './EntriesOutput.css'

import NoEntries from '../NoEntries/NoEntries'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store'

const EntriesOutput = () => {
  const { submissions, lastAddedId } = useSelector(
    (state: RootState) => state.submissions,
  )

  return (
    <div className="app__output">
      {!submissions.length && <NoEntries />}
      {submissions.length > 0 && (
        <div className="app__output">
          <ul className="app__output-list">
            {submissions.map((submission) => {
              const lastAddedItem = lastAddedId === submission.id
              return (
                <li
                  className={`app__output-item ${lastAddedItem ? 'app__output-item--active' : ''}`}
                  key={submission.id}
                >
                  <h3>{submission.name}</h3>
                  <p>{submission.age}</p>
                  <p>{submission.gender}</p>
                  <p>{submission.country}</p>
                  {submission.profileImage && (
                    <img src={submission.profileImage} alt={submission.name} />
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EntriesOutput
