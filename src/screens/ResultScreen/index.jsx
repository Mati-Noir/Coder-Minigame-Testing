import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./styles";

import Card from "../../components/Card";
import SupremeVictory from "../../assets/images/SupremeVictory.jpg";
import MissionFailed from "../../assets/images/MissionFailed.jpg";

const ResultScreen = ({ result }) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        handleImage();
    }, []);

    const handleImage = () => {
        if (result === "win") {
            setImage(SupremeVictory);
            return;
        }
        setImage(MissionFailed);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Card>
                    <Text>{`You ${result}`}</Text>
                    <Image style={styles.imageContainer} source={image} />
                </Card>
            </View>
        </SafeAreaView>
        );
    };

export default ResultScreen;