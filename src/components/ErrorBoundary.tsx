import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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
 * puede depender de useLanguage() para mostrarse.
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
          <Button title="Reintentar · Try again" onPress={this.handleReset} />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  title: { color: '#fff', fontSize: 20, fontWeight: '800' },
  body: { color: '#aaa', fontSize: 14, lineHeight: 20 },
});
