import { type } from "os";
import React from "react";
import Style from './Button.module.scss';

class Button extends React.Component<
{
    children: string, type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}> {
    render() {
        // const estaAtivo = true
        // const style = {
        //     backgroundColor: estaAtivo ? "green" : "red"
        // }
        const {type = "button"} = this.props
        return (
            <button onClick={this.props.onClick} type={type} className={Style.botao}>{this.props.children}</button>
        )
    }
}

export default Button;