import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, type } from '../theme/theme';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Red de seguridad de último recurso: sin esto, cualquier excepción en el
 * render deja la pantalla en blanco sin ninguna forma de recuperarse. El
 * texto queda fijo en español e inglés a la vez a propósito — este límite
 * puede activarse por un fallo en el propio LanguageProvider, así que no
 * puede depender de useLanguage() para mostrarse. Solo importa theme.ts
 * (constantes puras, sin dependencias de React) para no perder ni siquiera
 * el color de la marca en el peor caso.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: { componentStack?: string | null }) {
    console.error('Encuadre — error no capturado:', error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Algo salió mal · Something went wrong</Text>
          <Text style={styles.body}>
            Encuadre encontró un error inesperado. Nada de tu información se perdió — no
            guardamos nada fuera de tu preferencia de idioma y si viste el tutorial.
          </Text>
          <Text style={styles.body}>
            Encuadre hit an unexpected error. Nothing was lost — we don't store anything besides
            your language preference and whether you've seen the tutorial.
          </Text>
          <Pressable
            onPress={this.handleReset}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            accessibilityRole="button"
            accessibilityLabel="Reintentar · Try again"
          >
            <Text style={styles.buttonText}>Reintentar · Try again</Text>
          </Pressable>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: spacing.xl,
    gap: spacing.lg,
  },
  title: { color: colors.text, ...type.title2 },
  body: { color: colors.textSecondary, ...type.callout, lineHeight: 21 },
  button: {
    backgroundColor: colors.accent,
    borderRadius: radius.medium,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonPressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  buttonText: { color: colors.text, ...type.headline },
});
