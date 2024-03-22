import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const Course = ({ title, description, onPressRate }) => {
  return (
    <View style={styles.courseContent}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity style={styles.rateButton} onPress={onPressRate}>
        <Text style={styles.rateButtonText}>Rate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const [ratings, setRatings] = useState({
    businessManagement: 0,
    informationTechnology: 0,
    fashion: 0,
    buildAndEnvironment: 0,
    communications: 0
  });

  const rateCourse = (course) => {
    const newRating = Math.min(ratings[course] + 1, 6);
    setRatings(prevRatings => ({
      ...prevRatings,
      [course]: newRating
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY LESOTHO</Text>
        <Text>Innovative programmes that shape careers of the future</Text>
      </View>

      <ScrollView>

        <View style={styles.faculty}>
          <Image source={require("./assets/IT.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF INFORMATION COMMUNICATION TECHNOLOGY" 
            description="Learn technology with us and gain more knowledge." 
            onPressRate={() => rateCourse('informationTechnology')} 
          />
          <Text style={styles.rating}>{ratings.informationTechnology}</Text>
        </View>

        <View style={styles.faculty}>
          <Image source={require("./assets/building.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF BUILD AND ENVIRONMENT" 
            description="Learn more about building and house planning." 
            onPressRate={() => rateCourse('buildAndEnvironment')} 
          />
          <Text style={styles.rating}>{ratings.buildAndEnvironment}</Text>
        </View>

        <View style={styles.faculty}>
          <Image source={require("./assets/commu.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF COMMUNICATIONS" 
            description="Learn more about media broadcasting and producing more effective communication." 
            onPressRate={() => rateCourse('communications')} 
          />
          <Text style={styles.rating}>{ratings.communications}</Text>
        </View>

        <View style={styles.faculty}>
          <Image source={require("./assets/fashion.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF FASHION" 
            description="Devulge your creativity unlimitedly." 
            onPressRate={() => rateCourse('fashion')} 
          />
          <Text style={styles.rating}>{ratings.fashion}</Text>
        </View>

        <View style={styles.faculty}>
          <Image source={require("./assets/Business.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF BUSINESSS MANANEMENT" 
            description="Learn the bast way to communicate with customers and know what they like most." 
            onPressRate={() => rateCourse('businessManagement')} 
          />
          <Text style={styles.rating}>{ratings.businessManagement}</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fffff0',
    padding: 10,
  },
  header: {
    backgroundColor: '#fffff0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    marginBottom: 40,
    marginTop: 20,
    borderRadius: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  faculty: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  courseContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  rateButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  rateButtonText: {
    color: 'white',
  },
  rating: {
    fontSize: 18,
    marginLeft: 10,
  },
});
