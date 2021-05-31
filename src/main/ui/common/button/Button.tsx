import s from "./Button.module.scss";

type ButtonPropsType = {
	style?: {}
	onClick: ()=>void
	value?: string
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
		> 
			{props.value}
		</button>
    );
}