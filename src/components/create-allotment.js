import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { InputLabel, MenuItem, FormControl } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        showmic96
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  header: {
    margin: theme.spacing(3),
  },
  fromControlContainer: {
    marginTop: theme.spacing(10),
    width: "50%",
  },
  headerContainer: {
    marginTop: theme.spacing(10),
    borderColor: "black",
  },
  formElement: {
    margin: theme.spacing(5),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [location, setLocation] = useState("");
  const [time, setTime] = useState(0);
  const [fertilizerNameList, setFertilizerNameList] = useState(["TSP", "Urea"]);

  function handleOnClick() {
    const allotmentCreateData = {
      name: name,
      amount: amount,
      location: location,
      time: time,
    };

    axios
      .post("http://localhost:2000/addUser", allotmentCreateData)
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <body>
      <Container maxWidth="lg">
        <Container className={classes.headerContainer}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom="true"
            display="block"
            className={classes.header}
          >
            New Allotment
          </Typography>
        </Container>

        <Container className={classes.fromControlContainer}>
          <FormControl fullWidth="true">
            <Container className={classes.formElement}>
              <InputLabel id="fertilizer-name">Fertilizer Name</InputLabel>
              <Select
                labelId="fertilizer-name"
                id="demo-simple-select"
                fullWidth={true}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              >
                {fertilizerNameList.map((fertilizerName) => {
                  return (
                    <MenuItem value={fertilizerName}>{fertilizerName}</MenuItem>
                  );
                })}
              </Select>
            </Container>

            <TextField
              placeholder="Amount"
              label="Amount"
              className={classes.formElement}
              defaultValue={null}
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            >
              Amount
            </TextField>
          </FormControl>
        </Container>
      </Container>
    </body>
  );
}
