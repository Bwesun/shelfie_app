import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/images/censono-logo.png'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
      <StatusBar barStyle="light-content" backgroundColor="#071228" />

      <View style={styles.heroPanel}>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>Welcome to Shelfie</Text>
        </View>

        <View style={styles.heroHeader}>
          <Image source={Logo} style={styles.logo} />
          <View>
            <Text style={styles.brand}>Censono Tech Ltd</Text>
            <Text style={styles.brandSub}>Modern inventory, smarter shelves.</Text>
          </View>
        </View>

        <Text style={styles.heading}>A sleek landing page for fast inventory & shelf control.</Text>
        <Text style={styles.description}>
          Discover a clean, intuitive experience designed to welcome users and surface
          essential actions instantly.
        </Text>

        <View style={styles.actions}>          
          <Link href="/about" style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Explore Features</Text>
          </Link>
          <Link href="/contact" style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Contact Us</Text>
          </Link>
        </View>
      </View>

      <View style={styles.sectionGrid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fast onboarding</Text>
          <Text style={styles.cardDescription}>Start with a welcoming dashboard and immediate next steps.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Clean visuals</Text>
          <Text style={styles.cardDescription}>A modern palette and refined spacing make the screen feel elegant.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Built for action</Text>
          <Text style={styles.cardDescription}>Quick access to about and contact pages encourages user engagement.</Text>
        </View>
      </View>

      <View style={styles.footerNote}>
        <Text style={styles.footerText}>Your inventory story starts here — with clarity, speed, and style.</Text>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#071228',
  },
  pageContent: {
    padding: 24,
    paddingBottom: 40,
  },
  heroPanel: {
    backgroundColor: '#0E2142',
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 16 },
    elevation: 8,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1D3A72',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginBottom: 18,
  },
  heroBadgeText: {
    color: '#A7C1FF',
    fontSize: 12,
    fontWeight: '600',
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 16,
    marginRight: 14,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  brandSub: {
    color: '#9AB1FF',
    fontSize: 13,
    marginTop: 2,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
    marginBottom: 12,
  },
  description: {
    color: '#B4C4FF',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  primaryButton: {
    marginRight: 12,
    marginBottom: 12,
    backgroundColor: '#5C7CFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  secondaryButton: {
    borderColor: '#5C7CFF',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    color: '#B4C4FF',
    fontWeight: '700',
    fontSize: 15,
  },
  sectionGrid: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#12254D',
    borderRadius: 22,
    padding: 20,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#AAB8FF',
    fontSize: 14,
    lineHeight: 20,
  },
  footerNote: {
    marginTop: 18,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#0B1835',
  },
  footerText: {
    color: '#8EA6FF',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 14,
  },
})