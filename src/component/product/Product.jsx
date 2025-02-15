import React, { useState } from "react";
import ProductData from "../../datafiles/ProductData";
import { Card, CardMedia, CardContent, Typography, Grid, Container, IconButton, Box } from "@mui/material";
import { Add, ShoppingCart, Favorite } from "@mui/icons-material"; // Icons

function ProductGrid() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Container sx={{ py: 10 }}>
            <Typography variant="h4" sx={{ pb: 5, textAlign: "center" }}>
                {ProductData.ProductHeading}
            </Typography>

            <Grid container spacing={3}>
                {ProductData.Products.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                boxShadow: 3,
                                position: "relative",
                                overflow: "hidden",
                                "&:hover .hover-icons": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                },
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Product Image */}
                            <CardMedia
                                component="img"
                                height="300"
                                image={item.ProductImage}
                                alt={item.ProductName}
                                sx={{
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            />

                            {/* Hover Icons */}
                            <Box
                                className="hover-icons"
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "20%",
                                    transform: "translate(-50%, -50%)",
                                    display: "flex",
                                    gap: 1,
                                    opacity: 0,
                                    transition: "opacity 0.10s ease, transform 0.5s ease",
                                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                                    padding: "10px",
                                    borderRadius: "10px",
                                }}
                            >
                                <IconButton color="primary" sx={{ color: "white" }}>
                                    <Add />
                                </IconButton>
                                <IconButton color="primary" sx={{ color: "white" }}>
                                    <ShoppingCart />
                                </IconButton>
                                <IconButton color="primary" sx={{ color: "white" }}>
                                    <Favorite />
                                </IconButton>
                            </Box>
                        </Card>

                        {/* Product Details */}
                        <CardContent>
                            <Typography variant="h6" sx={{ textAlign: "center" }}>
                                {item.ProductName}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center" }}>
                                {item.ProductPrice}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProductGrid;
