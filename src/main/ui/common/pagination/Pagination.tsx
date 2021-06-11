import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        // marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function PaginationRounded(props: any) {
  const classes = useStyles();

  const count = Math.ceil(props.totalCount / props.pageCount)
    const onChangeHandler = (event: object, page: number) => {
      props.onChangePage(page)
    }

  return (
    <div className={classes.root}>
      <Pagination count={count} shape="rounded" onChange={onChangeHandler} page={props.page}/>
    </div>
    
  );
}
