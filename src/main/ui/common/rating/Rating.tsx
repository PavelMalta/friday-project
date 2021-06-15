import React, {ChangeEvent} from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {rateCardTC} from "../../../store/cards-reducer";


type RatingPropsType = {
    rating: number
    id: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        color: "#21268F",
    },
  }),
);

export default function HalfRating(props: any) {
  const classes = useStyles();

    const dispatch = useDispatch();

  const onChangeHandler = (e: ChangeEvent<{}>, newValue: any) => {
       const value = +newValue
      dispatch(rateCardTC(value, props.id))
  }

    // const onSendRating = (value: number) => {
    //     dispatch(rateCardTC(value, '1'))
    // }

  return (
    <div>
        {/* <Rating name="size-small" defaultValue={2} size="small" /> */}
      <Rating name="half-rating" defaultValue={props.rating} precision={1} size="small"  classes={classes} onChange={onChangeHandler}/>
    </div>
  );
}
