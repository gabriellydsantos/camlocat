import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  icon?: string;
  color?: string; // Optional color prop for button
}

const Button: React.FC<ButtonProps> = ({ title, onPress, icon, color = '#E9730F' }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      {icon && <MaterialIcons name={icon} size={24} color="#fff" />}
      {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

export default Button;
