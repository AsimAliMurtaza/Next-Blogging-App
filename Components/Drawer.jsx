import React from "react";
import { Drawer, Button, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

const DrawerExample = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div
        style={{
          padding: "20px",
          color: "black",
          textAlign: "left",
          marginLeft: "10px",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Menu
      </div>
      <List
        sx={{
          width: 250,
          color: "black",
        }}
      >
        {["Home", "Categories", "About", "Contact"].map((text, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            href={text === "Home" ? "/" : "/"}
            onClick={onClose}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              },
              marginLeft: "20px",
            }}
          >
            <ListItemText
              primary={text}
              sx={{
                color: "black",
                "&:hover": {
                  color: "green",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            color: "black",
            borderColor: "black",
            "&:hover": {
              borderColor: "green",
              color: "green",
            },
          }}
        >
          Close
        </Button>
      </div>
    </Drawer>
  );
};

export default DrawerExample;
