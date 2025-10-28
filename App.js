import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const COLORS = {
  BG_DARK: "#0F0A1F",
  NEON_BLUE: "#00F0FF",
  NEON_PINK: "#FF00A6",
  TEXT_PRIMARY: "#E0FFFF",
  GLOW_SHADOW: "rgba(0, 240, 255, 0.7)",
};

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <Image
            source={require('./assets/img_0886.jpg')}
            style={styles.profileImage}
            onError={(e) =>
              console.log("Image Load Error:", e.nativeEvent.error)
            }
          />
          <View style={styles.profileTextGroup}>
            <Text style={styles.title}>ALBAN RRAHMANI</Text>
            <Text style={styles.subtitle}>3RD YEAR STUDENT</Text>
          </View>
        </View>

        <View style={styles.dataModule}>
          <Text style={styles.moduleTitle}>SKILLS & INTERESTS</Text>
          <View style={styles.skillList}>
            <Text style={styles.skillItem}>
              <Text style={{ color: COLORS.NEON_PINK }}>
                {">"}
                {">"}
              </Text>{" "}
              SOTWARE DEVELOPMENT
            </Text>
            <Text style={styles.skillItem}>
              <Text style={{ color: COLORS.NEON_PINK }}>
                {">"}
                {">"}
              </Text>{" "}
              WEB DEVELOPMENT
            </Text>
            <Text style={styles.skillItem}>
              <Text style={{ color: COLORS.NEON_PINK }}>
                {">"}
                {">"}
              </Text>{" "}
              CYBERSECURITY
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.highlightText}>
                {">"}
                {">"}
              </Text>{" "}
              GRAPHIC DESIGN
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.highlightText}>
                {">"}
                {">"}
              </Text>{" "}
              DATABASE MANAGEMENT
            </Text>
          </View>
        </View>

        <View style={styles.dataModule}>
          <Text style={styles.moduleTitle}>EDUCATION & CERTIFICATIONS</Text>
          <View style={styles.skillList}>
            <Text style={styles.skillItem}>
              <Text style={{ color: COLORS.NEON_PINK }}>
                {">"}
                {">"}
              </Text>{" "}
              BACHELOR'S DEGREE OF COMPUTER SCIENCE AND ENGINEERING (2023-2026)
            </Text>
            <Text style={styles.skillItem}>
              <Text style={{ color: COLORS.NEON_PINK }}>
                {">"}
                {">"}
              </Text>{" "}
              HIGH SCHOOL DIPLOMA ON INFORMATICS (2020-2023)
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.highlightText}>
                {">"}
                {">"}
              </Text>{" "}
              JAVASCRIPT ALGORITHMS AND DATA STRUCTURES - freeCodeCamp
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.highlightText}>
                {">"}
                {">"}
              </Text>{" "}
              FOUNDATIONAL C# WITH MICROSOFT - freeCodeCamp
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.highlightText}>
                {">"}
                {">"}
              </Text>{" "}
              C# PROGRAMMING WITH SQL DATABASES - PRISHTINA REA
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.highlightText}>
                {">"}
                {">"}
              </Text>{" "}
              WORDPRESS - PRISHTINA REA
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.highlightText}>
                {">"}
                {">"}
              </Text>{" "}
              GRAPHICAL DESIGN - BONEVET
            </Text>
          </View>
        </View>

        <View style={styles.footerBar}>
          <Text style={styles.footerText}>
            -- [ SYSTEM STATUS: OPTIMAL ] --
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLORS.BG_DARK,
  },
  scrollContent: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 240, 255, 0.3)",
    shadowColor: COLORS.GLOW_SHADOW,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.NEON_BLUE,
    shadowColor: COLORS.NEON_BLUE,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  profileTextGroup: {
    marginLeft: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.NEON_BLUE,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    textShadowColor: "rgba(0, 240, 255, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.NEON_PINK,
    marginTop: 5,
    letterSpacing: 1,
    fontWeight: "bold",
  },

  dataModule: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 15,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.NEON_BLUE,
    shadowColor: COLORS.NEON_PINK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 15,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 240, 255, 0.2)",
    paddingBottom: 8,
    letterSpacing: 1,
  },
  skillList: {
    paddingLeft: 5,
  },
  skillItem: {
    fontSize: 14,
    color: COLORS.TEXT_PRIMARY,
    marginVertical: 6,
    lineHeight: 20,
    fontWeight: "500",
  },
  highlightText: {
    color: COLORS.NEON_PINK,
  },
  footerBar: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 240, 255, 0.4)",
    shadowColor: COLORS.GLOW_SHADOW,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  footerText: {
    color: COLORS.NEON_BLUE,
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: "bold",
  },
});