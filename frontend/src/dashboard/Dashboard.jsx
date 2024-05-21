import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { useNavigate } from "react-router-dom";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="static"
        sx={{ height: "60px", backgroundColor: "#7469B6" }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h4" align="center">
            Admin Tools
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 60px)",
          backgroundColor: "#AD88C6",
        }}
      >
        <Grid container spacing={3} justify="center">
          <Grid item xs={6}>
            <Card
              sx={{
                minWidth: 200,
                minHeight: 200,
                backgroundColor: "#FFE6E6",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/news-management")}
            >
              <CardContent>
                <Typography variant="h4" component="h2">
                  <NewspaperIcon fontSize="large" /> News Management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                minWidth: 200,
                minHeight: 200,
                backgroundColor: "#FFE6E6",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/users")}
            >
              <CardContent>
                <Typography variant="h4" component="h2">
                  <AccountCircle fontSize="large" /> User Management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                minWidth: 200,
                minHeight: 200,
                backgroundColor: "#FFE6E6",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/hotel-management")}
            >
              <CardContent>
                <Typography variant="h4" component="h2">
                    <LocalActivityIcon fontSize="large" /> Tickets
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                minWidth: 200,
                minHeight: 200,
                backgroundColor: "#FFE6E6",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/users")}
            >
              <CardContent>
                <Typography variant="h4" component="h2">
                  <LiveHelpIcon fontSize="large" /> FAQ Management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
