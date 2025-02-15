import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import HeroData from "../../datafiles/HeroData"; // Import the data file
import styles from "./Hero.module.css"; // Import CSS module

function Hero() {
    
    return (
        <div className={styles.heroContainer}>
            <Grid container spacing={2}>
                {/* First Row (3 Items - Second Item is Larger) */}
                {HeroData.slice(0, 3).map((item, index) => (
                    <Grid 
                        item 
                        xs={12} 
                        sm={index === 1 ? 6 : 3} // Second item is larger
                        key={index}
                        className={styles.gridItem} 
                    >
                        <Card className={styles.heroCard}>
                            <CardMedia 
                                component="img" 
                                image={item.img} 
                                alt={item.title} 
                                className={styles.heroImage} 
                            />
                            {/* Text Overlay */}
                            <div className={styles.textOverlay}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2">{item.subtitle}</Typography>
                            </div>
                        </Card>
                    </Grid>
                ))}

                {/* Second Row (2 Items) */}
                {HeroData.slice(3, 5).map((item, index) => (
                    <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        key={index}
                        className={styles.gridItem} 
                    >
                        <Card className={styles.heroCard}>
                            <CardMedia 
                                component="img" 
                                image={item.img} 
                                alt={item.title} 
                                className={styles.heroImage} 
                            />
                            {/* Text Overlay */}
                            <div className={styles.textOverlay}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2">{item.subtitle}</Typography>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Hero;
