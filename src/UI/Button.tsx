import React, { CSSProperties } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface IProps {
       buttonProps: React.CSSProperties | any
      handleClick?(): void
}
 const WrapButton = (props: IProps) => {
    const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
      button:  props.buttonProps ,
    }),
  );
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary"
       className={classes.button}onClick={props.handleClick} >
         {props.buttonProps.text}
      </Button>
    </div>
  )
}
export default WrapButton