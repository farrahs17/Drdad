import React from 'react';
import Tools from "./Tools"
import SearchArea from "./SearchArea"

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <SearchArea/>
                <Tools/>
            </div>
        )
    }
}

export default Sidebar