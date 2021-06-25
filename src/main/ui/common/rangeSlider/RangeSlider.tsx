import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 196,
    },
    rail: {
        backgroundColor: "#919DC8",
        height: 5,  
    },
    track: {
        backgroundColor: "#21268F",
        height: 5,  
    },
    thumb: {
        width:16,
        height: 16,
        boxSizing: "border-box",
        border: "4px solid #21268F",
        backgroundColor: "#fff"
    }
});

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    };

return (
        <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        classes={classes}
        />
);
}
