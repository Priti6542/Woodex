import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Container } from "@mui/material";
import BlogData from "../../datafiles/BlogData";

function Blog() {
  return (
    <Container sx={{ py: 5 }}> {/* Adds proper top & bottom padding */}
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
        {BlogData?.BlogHeading}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {BlogData?.blog?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card sx={{ boxShadow: 3, display: "flex", flexDirection: "column", height: "100%"}}>
              <CardMedia
                component="img"
                image={item.BlogImage}
                alt={item.BlogName}
                sx={{ width: "100%", height: 250, objectFit: "cover" }} // Ensures image consistency
              />

              <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 2 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {item.BlogName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.BlogDate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
