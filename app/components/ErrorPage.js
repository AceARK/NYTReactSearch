import React from 'react';

class ErrorPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        	<div className="container">
            	<h1>404 Error: Page Not Found</h1>
            </div>
        );
    }
}

module.exports = ErrorPage;