import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', paddingHorizontal: 20}}>
        <Image 
          source={require('./assets/img_0886.jpg')} 
          style={styles.image}
        />
        <View style={{marginLeft: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>Alban Rrahmani</Text>
          <Text style={styles.subtitle}>3rd year student</Text>
        </View>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.skillsTitle}>Skills & Interests:</Text>
        <Text style={styles.skill}>- Programming</Text>
        <Text style={styles.skill}>- Web Development</Text>
        <Text style={styles.skill}>- Cybersecurity</Text>
        <Text style={styles.skill}>- Graphic Design</Text>
        <Text style={styles.skill}>- Database Management</Text>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.skillsTitle}>Education:</Text>
        <Text style={styles.skill}>- Bachelor's degree of Computer Science and Engineering (2023-2026)</Text>
        <Text style={styles.skill}>- High School Diploma on Informatics (2020-2023)</Text>
        <Text style={styles.skill}>- JavaScript Algorithms and Data Structures - freeCodeCamp</Text>
        <Text style={styles.skill}>- Foundational C# with Microsoft - freeCodeCamp</Text>
        <Text style={styles.skill}>- C# PROGRAMMING WITH SQL DATABASES - PRISHTINA REA</Text>
        <Text style={styles.skill}>- WordPress - PRISHTINA REA</Text>
        <Text style={styles.skill}>- Graphical Design - BONEVET</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    paddingVertical: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c593faff',
  },
  subtitle: {
    fontSize: 18,
    color: '#00eeffff',
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  skillsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    width: '100%',
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c593faff',
    marginBottom: 10,
    textAlign: 'left',
  },
  skill: {
    fontSize: 16,
    color: '#00eeffff',
    marginVertical: 5,
    paddingLeft: 20,
  },
});
