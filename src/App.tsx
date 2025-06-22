import './App.css'
import { Link } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <h1>動的フォームテスト</h1>
      <ul>
        <li><Link to="/FormGenerator">動的フォーム作成</Link></li>
        <li><Link to="/AnswerForm">質問表回答</Link></li>
      </ul>
    </>
  )
}

export default App
