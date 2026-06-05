import './Header.css'

const Header = () => {
  return (
    <header className="app__header">
      <div className="container">
        <div className="app__header-wrapper">
          <div className="app__logo">
            <div className="app__logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="app__file-icon"
                data-fg-d3bl6="0.8:1.8850:/src/app/App.tsx:49:15:1798:58:e:FileText::::::B1i5"
                data-fgid-d3bl6=":r5:"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </div>
            <div className="app__logo-text">
              <h1 className="app__heading">React Forms Playground</h1>
              <h2 className="app__logo-heading">
                Uncontrolled vs React Hook Form
              </h2>
            </div>
          </div>

          <div className="app__type-of-project">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-fg-d3bl13="0.8:1.8850:/src/app/App.tsx:62:13:2316:22:e:BookOpen::::::BP4H"
              data-fgid-d3bl13=":ra:"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            <span>Learning project</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
