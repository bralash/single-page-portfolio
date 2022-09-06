import React from "react";

interface headerProps {
    logo: string;
    button: string;
}

function Header(props: headerProps) {
    return (
        <div className="flex justify-between items-center mb-16">
            <div className="logo">
                <img src={props.logo} alt="Logo" />
            </div>
            <div className="button px-11 py-3.5 bg-sp_black text-sp_white rounded-3xl hover:bg-sp_purple cursor-pointer">
                {props.button}
            </div>
        </div>
    );
}

export default Header;
