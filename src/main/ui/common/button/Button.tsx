import s from "./Button.module.scss";

type ButtonPropsType = {
	style?: {}
	onClick?: () => void
	value?: string
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button
			className={s.btn}
			style={props.style}
			onClick={props.onClick}
		> 
			{props.value}
		</button>
    );
}