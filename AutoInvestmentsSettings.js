import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AutoInvestmentsIndicators(props) {
  const listItems = props.item.items;
  const portFolio = props.item.portfolio;
  
  const renderItem = (item) => {
    return (
      <View style={styles.items}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ width: '80%', fontWeight: 800  }}>{item.title}</Text>
          <Text  style={{ fontWeight: 800 }}>{item.amount}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ width: '80%' }}>
            Next Transfer {item.nextTransferDate}
          </Text>
          <Text style={{ fontWeight: 800 }}>{item.type}</Text>
        </View>
      </View>
    );
  };

  const renderPortfolioItem = (item) => {
    return (
      <View style={{ flexDirection: 'row',alignItems:"center", marginBottom: 10 }}>
        <View
          style={{
            flexDirection: 'column',
            width: 50,
            borderRadius: 40,
            height: 50,
            borderColor: 'black',
            borderWidth: '1px',
            marginRight: 5,
          }}></View>
        <View style={{ flexDirection: 'column', width: '70%' }}>
          <Text style={{ fontWeight: 800 }}>{item.title}</Text>
          <Text>Balance {item.balance}</Text>
        </View>
        <View>
          <Text  style={{ fontWeight: 800 }}>{item.status}</Text>
        </View>
      </View>
    );
  };

  const renderPortfolio = () => {
    return ( <View style={styles.portFolio}>
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '80%',fontWeight: 800 }}>PortFolio</Text>
            <Text style={{ fontWeight: 800 }}>{portFolio.type}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>Next Transfer {portFolio.nextTransferDate}</Text>
          </View>
           </View>
          {portFolio.items.map((item, index) => renderPortfolioItem(item))}
      </View>)
  };

  return (
    <View style={styles.container}>
      <Text style={{ display: 'flex',  marginBottom:10, fontWeight: 800 }}>                   Automatic setting for {props.item.title}
       </Text>
      {listItems.map((item, index) => renderItem(item))}
      {renderPortfolio()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 10,
    margin: -20,
    borderRadius: 10
  },
  items: {
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    padding: 10,
    borderRadius: '10px',
  },
  portFolio: {
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    padding: 10,
    borderRadius: '10px',
  },
});
