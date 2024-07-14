// // src/App.tsx
// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import SearchInput from './Components/SearchInput'
// import SearchResults from './Components/SearchResult'
// import SearchResultDetails from './Components/SearchResultDetails'
// import NotFound from './Components/NotFound'
// import ErrorBoundary from './Components/ErrorBoundry' // Import the ErrorBoundary component

// const App: React.FC = () => {
//   return (
//     <Router>
//       <ErrorBoundary>
//         <div>
//           <SearchInput />
//           <div style={{ display: 'flex' }}>
//             <div style={{ flex: 1, marginRight: '10px' }}>
//               <Routes>
//                 <Route path="/" element={<SearchResults />} />
//                 <Route path="/details/:id" element={<SearchResultDetails />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </ErrorBoundary>
//     </Router>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchInput from './Components/SearchInput'
import SearchResults from './Components/SearchResult'
import SearchResultDetails from './Components/SearchResultDetails'
import NotFound from './Components/NotFound'
import ErrorBoundary from './Components/ErrorBoundry'

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div>
          <SearchInput />
          <Routes>
            <Route path="/" element={<SearchResults />} />
            <Route path="/details/:id" element={<SearchResultDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
