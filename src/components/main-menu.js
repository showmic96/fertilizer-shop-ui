import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    textAlign: 'center',
    width: '200px',
    margin: theme.spacing(5)
  }
}));

export default function MainMenu() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container component={'main'} maxWidth={'xs'}>
      <div className={classes.paper}>
        <form>
          <Typography style={{ fontSize: '20px', textAlign: 'center' }}>
            Select Operation
          </Typography>
          <Button
            color={'primary'}
            variant={'contained'}
            className={classes.button}
            onClick={() => {
              history.push('/allotment-creation');
            }}
          >
            Create Allotment
          </Button>
          <br />

          <Button
            color={'primary'}
            variant={'contained'}
            className={classes.button}
          >
            Create Sell
          </Button>
          <br />

          <Button
            color={'primary'}
            variant={'contained'}
            className={classes.button}
          >
            Dashboard
          </Button>

        </form>
      </div>
    </Container>
  )
}