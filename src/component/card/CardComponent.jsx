import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CardData from "../../datafiles/CardData"; // Import the data file
import styles from "./CardComponent.module.css"; // Import CSS file

function CardComponent() {
    return (
        <div className={styles.cardContainer}>

            {/* Text Content */}
            <CardContent>
                <Typography variant="h5" className={styles.cardTitle}>
                    {CardData.CardName}
                </Typography>
                <Typography variant="body2" className={styles.cardDescription}>
                    {CardData.CardDescription}
                </Typography>
            </CardContent>

             {/* Image */}
             <CardMedia 
                component="img" 
                image={CardData.cardimg} 
                alt={CardData.CardName} 
                className={styles.cardImage}
            />
        </div>
    );
}

export default CardComponent;
