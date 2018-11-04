import React , {Component} from 'react';
import './styles.css';
class NotFound extends Component{

    render(){
        return (
            <div className="container_background">
                <div className="inner_container">
                    <div className="container_404">
                        <div className="char_4">4</div>
                        <div className="oval_main">
                            <div className="oval_inner">
                            <div className="oval-1"/>
                            <div className="oval-2"/>
                            </div>
                        </div>
                        <div className="char_4">4</div>
                    </div>
                    <div className="page-not-found">Page not found</div>
                    <a href = '/'>
                        <button className="btn_browse">Go to Home</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default NotFound;