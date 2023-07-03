import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {MainPage, TestPage, Nav} from "./components/pages"; //페이지 추가시 여기서 추가.

const App = () => {
  return (
      <BrowserRouter>
          {/*네비게이터는 언제나 렌더링됩니다*/}
          <Nav />
          <Switch>
              <Route exact path="/" component={MainPage}/>
              {/*path를 바꿔 다른 페이지로 이동 가능. 전달할 props가 존재한다면, 아래의 코드를 예시로 사용*/}
              {/*<Route exact path="/info" render={() => <Info userInfo={userInfo} />} />*/}
              {/*for first commit*/}
              <Route exact path="/test" component={TestPage}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;