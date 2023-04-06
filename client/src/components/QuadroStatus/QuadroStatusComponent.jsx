import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

function QuadroStatusComponent({ items }) {
  return (
    <>
      <Grid container>
        {items.data.map((row) => (
          <Card
            sx={{
              maxWidth: "20vw",
              minWidth: "15vw",
              margin: "10px",
              backgroundColor: row.status == true ? "#a2f1a2" : "#efc4d3",
            }}
          >
            <CardContent
              style={{
                border:
                  row.status == true ? " 2px solid green" : " 2px solid red",
              }}
            >
              <Typography variant="h5" component="div">
                {row.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {row.status == true ? "ON" : "OFF"}
              </Typography>
              <Typography variant="body2">Verificado em: {row.date}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default QuadroStatusComponent;
