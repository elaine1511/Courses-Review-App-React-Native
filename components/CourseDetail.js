import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Stars from './Stars'

const CourseDetails = ({ navigation: { navigate }, route: { params: { course } } }) => {

    const addReview = () => {
        return navigate('Add Review', { course })
    }

    return (
        <ScrollView style={styles.root}>
            <View>
                <View style={styles.infoHeader}>
                    <Text style={styles.name}>{course.title}</Text>
                    <Text style={styles.faculty}>{course.code}</Text>
                    <Text style={styles.faculty}>{course.faculty}</Text>
                    <Stars rating={course.rating} />
                    <TouchableOpacity style={styles.button} onPress={addReview}>
                        <Text style={styles.buttonText}>Add Review</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infoHeader: {
        padding: 20
    },
    info: {
        marginTop: 20,
    },
    name: {
        fontSize: 24,
    },
    faculty: {
        color: 'grey',
        marginBottom: 5,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066cc',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default CourseDetails;