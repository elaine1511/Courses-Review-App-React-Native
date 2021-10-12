import React, { useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, View, Image, TextInput, FlatList } from 'react-native';
import Course from './Course';
import Header from './Header.ios';
import { Searchbar } from 'react-native-paper';

const data = [
    { title: 'Web Application Programming', faculty: 'Asaad Saad', code: 'CS472', rating: 4 },
    { title: 'Modern Web Application', faculty: 'Asaad Saad', code: 'CS572', rating: 5 },
    { title: 'Enterprise Architecture', faculty: 'Joe Bruen', code: 'CS557', rating: 4 },
    { title: 'Algorithms', faculty: 'Clyde Ruby', code: 'CS421', rating: 5 },
    { title: 'Object Oriented JavaScript', faculty: 'Keith Levi', code: 'CS372', rating: 3 },
    { title: 'Big Data', faculty: 'Prem Nair', code: 'CS371', rating: 5 },
    { title: 'Web Application Architecture', faculty: 'Rakesh Shrestha', code: 'CS377', rating: 5 },
    { title: 'Big Data Analytics', faculty: 'Mrudula Mukadam', code: 'CS378', rating: 5 },
];

export default function CoursesList() {
    const [courses, setCourses] = useState([])
    React.useEffect(() => {
        setCourses(data)
    }, [])
    const [searchValue, setSearchValue] = useState('')
    const arrayHolder = data;

    const contains = ({ title, faculty, code }, searchValue) => {
        if (title.includes(searchValue) || faculty.includes(searchValue) || code.includes(searchValue)) {
            return true;
        }
        return false;
    }
    const handleSearch = (text) => {
        const updatedData = arrayHolder.filter((course) => {
            return contains(course, text)
        })
        setSearchValue(text);
        setCourses(updatedData)
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                paddingTop: Platform.OS === 'android' ? 30 : 0,
                paddingBottom: 200
            }}>
            <View>
                <Header />
                <Searchbar
                    placeholder='Live Search'
                    LightTheme round
                    value={searchValue}
                    onChangeText={handleSearch}
                ></Searchbar>
                <FlatList
                    data={courses}
                    renderItem={({ item, index }) => {
                        // console.log(`item=${JSON.stringify(item)}, index=${index}`);
                        return (
                            <Course
                                //item={(data,...item)}
                                index={index}
                                data={item}
                            />
                        )
                    }}
                    keyExtractor={course => course.code}
                ></FlatList>
            </View >
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5',
    },
});