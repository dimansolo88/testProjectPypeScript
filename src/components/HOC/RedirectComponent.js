import React, {Component} from 'react';
import Redirect from "react-router-dom/es/Redirect";




export const WithAthREdirect = (Component) => {
    class  WrapRedirectComponent extends React.Component  {
        render () {

            if(!this.props.isAuth) return  <Redirect to="/login"/>;

            return <Component {...this.props} />


        }


    }

    return WrapRedirectComponent;
};


