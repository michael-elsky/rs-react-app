import './NoEntries.css'

const NoEntries = () => {
  return (
    <div className="app__no-entries">
      <div className="app__no-entries-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-fg-d3bl73="0.8:1.8850:/src/app/App.tsx:160:17:7473:61:e:ClipboardList::::::CPfu"
          data-fgid-d3bl73=":r1g:"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="M12 11h4"></path>
          <path d="M12 16h4"></path>
          <path d="M8 11h.01"></path>
          <path d="M8 16h.01"></path>
        </svg>
      </div>

      <div className="app__no-entries-header">
        <p className="app__no-entries-heading">No submissions yet</p>
        <p className="app__no-entries-description">
          Open a form above and submit your first entry to see it here
        </p>
      </div>
    </div>
  )
}

export default NoEntries
