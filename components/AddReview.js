import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddReview = ({ navigation, route: { params: { course } } }) => {
    const [review, setReview] = useState({ name: '', ratingStar: 0, comment: '', submitting: false })
    const [maxRatingStar, setmaxRatingStar] = useState([1, 2, 3, 4, 5])
    React.useEffect(() => {
        readData()
    }, [])
    const saveData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(course.code, jsonValue)
            alert('Data successfully saved')
            navigation.goBack();
        } catch (e) {
        }
    }
    const readData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(course.code)
            if (jsonValue !== null) {
                setReview({ ...review, ...JSON.parse(jsonValue) })
            }
        } catch (e) {
        }
    }
    const submitReviewClick = () => {
        setReview({ ...review, submitting: true })
        setTimeout(() => { saveData(review) }, 2000)
    };

    return (
        <SafeAreaView style={styles.root}>
            <KeyboardAwareScrollView >
                <View>
                    <Text style={styles.addReview}>Add Review</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setReview({ ...review, name: text })}
                        value={review.name}
                        placeholder='Your Full Name'
                    ></TextInput>
                    <Text style={styles.rating}>Your Rating</Text>
                    <View style={styles.stars}>
                        {maxRatingStar.map((item, key) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    key={item}
                                    style={styles.starButton}
                                    onPress={() => setReview({ ...review, ratingStar: item })}
                                >
                                    <AntDesign name="star" size={50} color={item <= review.ratingStar ? '#FFD64C' : 'grey'} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setReview({ ...review, comment: text })}
                        value={review.comment}
                        placeholder='Your Review'
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={submitReviewClick}>
                    <Text style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
                {review.submitting && <ActivityIndicator size='large' color='#00ff00'></ActivityIndicator>}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    button: {
        paddingHorizontal: 10,
    },
    addReview: {
        fontSize: 25,
        color: "#444",
        textAlign: "center",
        margin: 20,
    },
    input: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
    },
    rating: {
        fontSize: 20,
        color: "grey",
        textAlign: "center",
        marginVertical: 40,
    },
    stars: {
        marginBottom: 80,
        flexDirection: "row",
        justifyContent: "center",
    },
    starButton: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#0066cc",
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    submitButtonText: {
        fontSize: 18,
        color: "#ffffff",
        textAlign: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default AddReview;
