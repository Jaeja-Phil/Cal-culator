import React from "react";
import './Home.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '@rmwc/typography/styles';
import { Typography } from '@rmwc/typography'


const Home = () => {
    return (
        <body>
            <div>
                <nav className="nav">
                    <Typography use="headline3" className="title">Cal-culator</Typography>
                    <div>
                    <Typography use="headline1" className="desc">
                        a web application that calculates your daily food intake.
                </Typography>
                    </div>
                    
                    <ul className="subdesc">
                        Some of its features:
                    <li>
                    <div>
                    <Typography use="headline5">Creates an archive to visulaize your calorie intake history</Typography>
                    </div>
                            
                    </li>
                        <li>
                            Recommend a diet plan based on your nutrition status
                    </li>
                    </ul>
                    <header className="header"></header>
                </nav>
                <main>
                    <div>
                    </div>
                </main>
            </div>
        </body>
    );
}

export default Home;