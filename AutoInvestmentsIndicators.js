import React, { useState, Fragment } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Text, View, TouchableOpacity} from "react-native";
import AnimatableProgressBar from "./AnimatableProgressBar";
import {indicators} from './dataMock';

export default function AutoInvestmentsIndicators() {
  const [showIndicators, setShowIndicators] = useState(true);

  const hideIndicators = () => {
    setShowIndicators(false);
  };

  
  return (
    showIndicators && (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textContent}>
            <Text style={styles.question}>Why invest automatically?</Text>
            <Text>
              If someone invest $50 each month from age 0, today you could have
              had $xx,xxx.
            </Text>
          </View>
          <TouchableOpacity onPress={() => hideIndicators()}>
            <Text>{'X'}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Fragment>
              <StatusBar barStyle='dark-content' />
              <SafeAreaView
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: "flex-end",
                  justifyContent: 'space-between'
                }}
              >
                {indicators.map((item, index) => {
                  return (
                    <AnimatableProgressBar
                      current={item.current}
                      maximum={item.maximum}
                      width={item.width}
                      borderColor='transparent'
                      height={20}
                      borderRadius={30}
                      borderWidth={2}
                      minimum={item.minimum}
                      backgroundColor={(index <= indicators.length - 1 || index !== 0) ? 'gray' : 'black'}
                      type='increase'
                      textColor='white'
                      interval={500}
                    />
                  );
                })}
              </SafeAreaView>
            </Fragment>
          </View>
          <View style={styles.legends}>
            <Text style={styles.ageZero}>Age 0</Text>
            <Text>Age 35</Text>
          </View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10
  },
  header: {
    flexDirection: "row",
  },
  textContent: {
    width: "95%",
  },
  question: {
    fontWeight: 800,
  },
  legends: {
    flexDirection: "row",
  },
  ageZero: {
    width: "80%",
  },
});
