import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Cover.css'
import Home from "../Home";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const Cover = () => {
    const navigate = useNavigate();

    const renderHome = async event => {
        await delay(2000);
        console.log("Now");
        navigate("/pufflequack/home/");
    }

    useEffect(() => {
        renderHome();
    }, []);

    return(
        <div className="cover">
            <div className="cover-title">
                easydineouts
            </div>
        </div>
    )
}

export default Cover