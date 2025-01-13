import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link // 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜 주는 컴포넌트
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App () {
  return <Router>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;

// react-router-dom의 컴포넌트들이 하는 일은 URL을 바라보고 URL이 바뀌면 어떤 컴포넌트를 보여 줄지 결정함
// Routes: Route를 찾음 (여기에서 Route는 URL을 의미) 그리고 Route를 찾으면 컴포넌트를 렌더링함 (기존 Switch 컴포넌트에서 대체됨)
/*
  - BrowserRouter: URL이 보통의 웹사이트 같음, 대부분 이걸 사용
  - HashRouter: http://localhost:3000/#/movie 이런 형태가 됨
*/
// Routes 컴포넌트를 넣어 준 이유는 한 번에 하나의 Route만 렌더링하기 위해서임

// React Router는 다이나믹(동적) url 지원 ➡️ 다이나믹하다는 건 URL에 변수를 넣을 수 있다는 의미
/*
  [:id]
  - 동적 라우팅을 위한 문법
  - URL 경로에서 변경될 수 있는 부분을 나타냄
  - 실제 URL에서 특정 영화의 고유 ID를 받아오는 부분이 됨
  ➡️ URL에서 특정 값을 동적으로 받기 위한 방식
*/
