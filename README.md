# Courses-Review-App-React-Native

Start by creating a new expo project, copy the provided components, and then start working on the requirements, you will need to add additional dependencies based on the requirements.   
* To start, install and update all dependencies.
* Complete the code in `App.js` to render an application with the following structure:
  * Material Bottom Tab Navigator
    * Stack Navigator
      * CoursesList screen
      * CourseDetails screen
      * AddReview screen
    * About screen
* Complete the code in `/components/CoursesList.js` to display the Live Search and list of courses using `FlatList`. The `Course` reusable component renders a single course, you will need to implement `infoPressed` method and make it functional.
* Complete the code in `/components/CourseDetails.js` to display the course details, you will also need to implement `addReview` method.
* Complete the code in `/components/AddReview.js` to meet the following requirements:
  * Create a controlled form with the following state: `{ name: '', rating: 0, comment: '', submitting: false }`.
  * After the first submit, the form will persist the review details in the phone storage using `AsyncStorage`. The next time a user opens the screen, the review details will be fetched from the phone storage. Use `https://react-native-async-storage.github.io/async-storage/`. (install and use).
  * Use `import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';` component to avoid a situation where the keyboard slides over the form element. (install and use)
  * When users click `Submit Review` display an `ActivityIndicator`, save their review details in the phone storage, and navigate back to the course details screen.

    


