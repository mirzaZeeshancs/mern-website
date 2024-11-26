import React from "react";
import ReactDOM from "react-dom";
import TechClan from "./app.js"

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-X8RE1TMH1X');
}

ReactDOM.render(<TechClan />, document.getElementById("techClan"));
