import { StyleSheet, Text } from 'react-native';
import { theme } from '@/theme';

type HexDisplayProps = {
  hex: string;
  textColor: string;
};

export function HexDisplay({ hex, textColor }: HexDisplayProps) {
  return (
    <Text style={[styles.text, { color: textColor }]}>{hex}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: 'center',
  },
});