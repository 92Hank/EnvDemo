import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";
import { Button, Container, TextField, Typography } from "@mui/material";

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Container style={{ marginBottom: "25px" }}>
          <Button
            aria-label="Decrement value"
            variant="outlined"
            style={{
              padding: "15px",
              background: "lightblue",
              fontStyle: "bold",
            }}
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
          <Typography style={{ padding: "10px", fontSize: 28 }}>
            {count}
          </Typography>
          <Button
            aria-label="Increment value"
            variant="outlined"
            style={{
              padding: "15px",
              background: "lightblue",
              fontStyle: "bold",
            }}
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </Container>
        <Container className={styles.row}>
          <TextField
            id="outlined-basic"
            label="Set increment amount"
            variant="outlined"
            value={incrementAmount}
            onChange={(e: { target: { value: any } }) =>
              setIncrementAmount(e.target.value)
            }
          />
          <Button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </Button>
          <Button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </Button>
          <Button
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </Button>
        </Container>
      </Container>
    </>
  );
}
