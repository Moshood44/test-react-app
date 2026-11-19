import { useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Pressable } from 'react-native';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/theme';
import { HexDisplay } from '@/components/hex-display';

function randomColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function contrastColor(hex: string): 'black' | 'white' {
  return luminance(hex) > 0.5 ? 'black' : 'white';
}

export default function ColorScreen() {
  const bgColor = useState('#ffffff')[0];
  const bgAnim = new Animated.Value(0);

  const [hex, setHex] = useState('#ffffff');
  const [textColor, setTextColor] = useState<'black' | 'white'>('black');

  const handleTap = () => {
    const next = randomColor();
    Animated.timing(bgAnim, {
      toValue: 1,
      duration: theme.motion.transitionMs,
      useNativeDriver: true,
    }).start(() => {
      bgAnim.setValue(0);
    });
    setHex(next);
    setTextColor(contrastColor(next));
    impactAsync(ImpactFeedbackStyle.Light);
  };

  const animatedBg = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff', hex],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={textColor === 'white' ? 'light' : 'dark'} />
      <Animated.View style={[styles.surface, { backgroundColor: animatedBg }]}>
        <Pressable style={styles.pressable} onPress={handleTap}>
          <HexDisplay hex={hex} textColor={textColor} />
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  surface: {
    flex: 1,
  },
  pressable: {
    flex: 1,
  },
});