import React from 'react'
import '../../styles/style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useSelector } from 'react-redux';

export const ForecastsCard = ({ forecast }) => {
    const unit = useSelector(state => state.toggleReducer.toggleTemp);
    const { Maximum, Minimum } = forecast.Temperature;
    const { IconPhrase } = forecast.Day;
    let { currentDay } = forecast;
    let currentTime = new Date().toLocaleString().replace(',', '');
    currentDay = new Date(currentDay).toLocaleString('en-us', { weekday: 'long' });
    currentTime = currentTime.slice(currentTime.length - 2);


    const variants = {
        transition: { duration: 7, delay: 1.5 },
        visible: { opacity: 1, y: "0px" },
        hidden: { opacity: 0, y: "40vh" },
    }

    const isDayOrNight = () => {
        return currentTime === "AM" ? <WbSunnyIcon variants={variants}
            initial="hidden"
            animate="visible"
            component={motion.svg} style={{ color: "yellow", fontSize: "3rem" }} className={`weather-icon-${currentTime}`}
        /> : <NightlightIcon variants={variants}
            initial="hidden"
            animate="visible"
            component={motion.svg} style={{ color: "black", fontSize: "3rem" }} className={`weather-icon-${currentTime}`}
        />
    }

    const convertFerToCel = (fer) => {
        return Math.floor((fer - 32) * 5 / 9);
    }

    return (
        <motion.div
            className="ForecastsCard-container">
            <Card component={motion.div}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="ForecastsCard" >
                <CardContent className="card-content">
                    <Typography gutterBottom variant="h3" component="div">
                        {currentDay}
                        {isDayOrNight()}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        {IconPhrase}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Min:{unit === "Imperial" ? convertFerToCel(Minimum.Value) : Minimum.Value}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Max:{unit === "Imperial" ? convertFerToCel(Maximum.Value) : Maximum.Value}
                    </Typography>

                </CardContent>
                <div class="custom-shape-divider-bottom-1637765530">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            style={{ fill: currentTime === "AM" ? "#9af2ff" : "#2f2b3c" }}>

                        </path>
                    </svg>
                </div>
            </Card>

        </motion.div >

    )
}
