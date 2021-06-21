import s from "./Button.module.scss";

type ButtonPropsType = {
	style?: {}
	onClick: () => void
	value?: string
	disabledButton?: boolean
}

export const Button = (props: ButtonPropsType) => {

	const onClickHandler = () => {
		props.onClick()
	}

    return (
        <button
			className={s.btn}
			style={props.style}
			onClick={onClickHandler}
			disabled={props.disabledButton}
		> 
			{props.value}
		</button>
    );
}