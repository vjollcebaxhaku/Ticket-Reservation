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
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { useNavigate } from "react-router-dom";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import EventIcon from "@mui/icons-material/Event";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Sidebar from './Sidebar'; // Import Sidebar component

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar /> {/* Include the Sidebar component */}
      <AppBar
        position="static"
        sx={{ height: "100px", backgroundColor: "#fff", paddingTop: "120px" }} // Added padding top
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h4" align="center" sx={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 'bold', color: '#630a87' }}> {/* Changed text color */}
            Admin Tools
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 100px)", // Adjusted height
          backgroundColor: "#fff",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Grid container spacing={3} justify="center">
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: 140,
                minHeight: 140,
                backgroundColor: "#FF69B4",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "2px solid #000",
              }}
              onClick={() => navigate("/news-management")}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: "'Roboto Mono', monospace", textTransform: 'uppercase' }}>
                  <NewspaperIcon fontSize="large" /> News Management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Repeat the following for each additional box */}
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: 140,
                minHeight: 140,
                backgroundColor: "#FF69B4",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "2px solid #000",
              }}
              onClick={() => navigate("/users")}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: "'Roboto Mono', monospace", textTransform: 'uppercase' }}>
                  <AccountCircle fontSize="large" /> User Management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more Grid items for additional boxes */}
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: 140,
                minHeight: 140,
                backgroundColor: "#FF69B4",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "2px solid #000",
              }}
              onClick={() => navigate("/ticket-management")}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: "'Roboto Mono', monospace", textTransform: 'uppercase' }}>
                  <LocalActivityIcon fontSize="large" /> Tickets
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: 140,
                minHeight: 140,
                backgroundColor: "#FF69B4",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "2px solid #000",
              }}
              onClick={() => navigate("/faq-management")}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: "'Roboto Mono', monospace", textTransform: 'uppercase' }}>
                  <LiveHelpIcon fontSize="large" /> FAQ Management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Additional box 1 */}
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: 140,
                minHeight: 140,
                backgroundColor: "#FF69B4",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "2px solid #000",
              }}
              onClick={() => navigate("/Lineup")}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: "'Roboto Mono', monospace", textTransform: 'uppercase' }}>
                  <EventIcon fontSize="large" /> LINE-UP
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Additional box 2 */}
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: 140,
                minHeight: 140,
                backgroundColor: "#FF69B4",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "2px solid #000",
              }}
              onClick={() => navigate("/ticket-selling")}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: "'Roboto Mono', monospace", textTransform: 'uppercase' }}>
                  <MonetizationOnIcon fontSize="large" /> TICKET MANAGEMENT
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
