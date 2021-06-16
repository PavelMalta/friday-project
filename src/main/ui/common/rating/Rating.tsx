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


  return (
    <div>
        {/* <Rating name="size-small" defaultValue={2} size="small" /> */}
      <Rating name="half-rating" defaultValue={props.grade} precision={1} size="small"  classes={classes}/>
    </div>
  );
}
