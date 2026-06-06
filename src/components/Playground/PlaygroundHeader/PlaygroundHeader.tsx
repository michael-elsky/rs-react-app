import './PlaygroundHeader.css'

const PlaygroundHeader = () => {
  return (
    <div className="app__playground-header playground-header">
      <div className="playground-header__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-fg-d3bl22="0.8:1.8850:/src/app/App.tsx:73:13:2712:57:e:GitBranch::::::BofC"
          data-fgid-d3bl22=":rg:"
        >
          <line x1="6" x2="6" y1="3" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 9a9 9 0 0 1-9 9"></path>
        </svg>
        <span>react-forms</span>
        <span>/</span>
        <span>playground</span>
      </div>
      <h2 className="playground-header__heading">Choose a form pattern</h2>
      <p className="playground-header__heading-description">
        Compare two approaches to building forms in React. Fill out and submit
        either form to see how the data is collected and displayed below.
      </p>
    </div>
  )
}

export default PlaygroundHeader
