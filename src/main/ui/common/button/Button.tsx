import s from "./Button.module.scss";


export const Button = (props: any) => {
    return (
        <button
			className={s.btn}
			style={props.style}
			onClick={props.onclick}
		> 
			{props.value}
		</button>
    );
}