import React from "react";
import SearchInput from "../components/SearchInput";

class MainPage extends React.Component{
  render(){
    return(
      <>
        <SearchInput />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </>
    )
  }
}

export default MainPage;
