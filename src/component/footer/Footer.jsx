import React, { useState } from "react";
import { Container, Typography, Box, IconButton, TextField, Button, Grid, Stack } from "@mui/material";
import FooterData from "../../datafiles/FooterData";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    // EmailJS parameters
    const templateParams = {
      to_email: email,
      message: "Thank you for subscribing to our newsletter!",
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_70nizos",  // Replace with your EmailJS service ID
        "template_cw3z8np",  // Replace with your EmailJS template ID
        templateParams,
        "K6cyaZrhz1z6LTGHU"    // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Subscription successful! Check your email.");
          setEmail("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to subscribe. Please try again.");
        }
      );
  };

  return (
    <Box component="footer" sx={{ backgroundColor: "whitesmoke", color: "black", py: 6 }}>
      <Container>
        {/* Newsletter Section */}
        <Box
          sx={{
            backgroundColor: "rgb(213, 210, 208)",
            borderRadius: "10px",
            px: 3,
            py: 4,
            textAlign: "center",
            mb: 5,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            {FooterData.Newsletter[0].FooterHeading}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {FooterData.Newsletter[0].SubHeading}
          </Typography>

          {/* Email Input Field */}
          <form onSubmit={handleSubscribe}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <TextField
                variant="filled"
                size="small"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: { xs: "100%", sm: "300px" }, backgroundColor: "#fff", borderRadius: "4px" }}
              />
              <Button type="submit" variant="contained" color="primary" sx={{ textTransform: "none" }}>
                Subscribe
              </Button>
            </Stack>
          </form>
        </Box>

        {/* Footer Sections */}
        <Grid container spacing={5} justifyContent="center">
          {/* Contact Details */}
          <Grid item xs={12} sm={6} md={3}>
            {FooterData.Woodex.map((contact, index) => (
              <Box key={index}>
                <Typography variant="h6" fontWeight="bold">
                  {contact.name}
                </Typography>
                <Typography variant="body2">{contact.location}</Typography>
                <Typography variant="body2">{contact.call}</Typography>

                {/* Social Icons */}
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <IconButton color="primary">
                    <Facebook />
                  </IconButton>
                  <IconButton color="primary">
                    <Twitter />
                  </IconButton>
                  <IconButton color="primary">
                    <Instagram />
                  </IconButton>
                  <IconButton color="primary">
                    <LinkedIn />
                  </IconButton>
                </Stack>
              </Box>
            ))}
          </Grid>

          {/* Information Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Help & Information
            </Typography>
            {FooterData.Information.map((info, idx) => (
              <Typography key={idx} variant="body2">
                {info.title}
              </Typography>
            ))}
          </Grid>

          {/* About Us Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              About Us
            </Typography>
            {FooterData.AboutUs.map((about, idx) => (
              <Typography key={idx} variant="body2">
                {about.title}
              </Typography>
            ))}
          </Grid>

          {/* Google Map Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Our Location
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4805444381873!2d73.80296337496489!3d18.59744348251118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b95d8c1f62cf%3A0xa88ec1997c7acf8b!2sDevcons%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1739612248930!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ mt: 5, textAlign: "center", borderTop: "1px solid #666", pt: 3 }}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} ABC. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
