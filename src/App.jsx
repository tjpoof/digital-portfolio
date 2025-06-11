import { Route, Routes } from 'react-router-dom'

import './styles/App.scss'

import { HeaderNav } from './components/HeaderNav.jsx'
import { FooterNav } from './components/FooterNav.jsx'
import { PageWrapper } from './components/PageWrapper.jsx'
import { AboutPage } from './views/AboutPage.jsx'
import { HomePage } from './views/HomePage.jsx'
import { ProjectsPage } from './views/ProjectsPage.jsx'
import { ProjectDetailsPage } from './views/ProjectDetailsPage.jsx'

export function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="*" element={<PageWrapper />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectName" element={<ProjectDetailsPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
      <FooterNav />
    </>
  )
}

export default App
