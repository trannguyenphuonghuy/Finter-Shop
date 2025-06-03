import { PublicRouter } from './router'
import { DefaultLayout } from './Component/Layout'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Fragment } from 'react'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {PublicRouter.map((router, index) => {
          let Layout = DefaultLayout;
          if (router.layout === null) {
            Layout = Fragment
          } else if (router.layout) {
            Layout = router.layout
          }
          const Page = router.component
          return <Route key={index} path={router.path} element={<Layout><Page/></Layout>}/>
        })}
      </Routes> 
    </Router>
  )
}
export default App;