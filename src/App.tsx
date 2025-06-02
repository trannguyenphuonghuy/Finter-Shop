import { PublicRouter } from './router'
import { DefaultLayout } from './Component/Layout'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {PublicRouter.map((router, index) => {
          const Layout = router.layout || DefaultLayout
          const Page = router.component
          return <Route key={index} path={router.path} element={<Layout><Page/></Layout>}/>
        })}
      </Routes> 
    </Router>
  )
}
export default App;