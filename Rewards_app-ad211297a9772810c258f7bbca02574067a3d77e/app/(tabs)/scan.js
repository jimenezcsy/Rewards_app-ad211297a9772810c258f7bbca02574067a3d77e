import React, { useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function Tab() {
  const svgRef = useRef(null); // Ref to access the QRCode component for getting data URL

  const getDataURL = () => {
    if (svgRef.current) {
      svgRef.current.toDataURL(callback);
    }
  };

  const callback = (dataURL) => {
    console.log(dataURL); // Logs the base64 string of the QR code
  };

  const base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..'; // Example base64 logo

  return (
    <View style={styles.container}>
            {/* Single QR Code with logo */}
      <View style={styles.qrCodeContainer}>
        <QRCode
          value="Just some string value"
          logo={{ uri: base64Logo }} // Base64 logo
          logoSize={50} // Set logo size to 50x50
          logoBackgroundColor='transparent'
          size={150} // Set QR code size to 150
          getRef={svg => (svgRef.current = svg)} // Set the ref
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCodeContainer: {
    width: 150, // Set container width to 150
    height: 150, // Set container height to 150
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
