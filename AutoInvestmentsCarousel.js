import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import {dataList} from './dataMock';

export default function AutoInvestmentsCarousel(props) {
  const [carousel, setCarousel] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselItems = dataList;
  props.onChangeSetting(dataList[1]); 
  const renderActiveItem = (index) => {
    let bgColor = "#f0f0f0",
      foreColor = "gray";
    if (activeIndex === index) {
      bgColor = "#000";
      foreColor = "#fff";
    }

    return {
      bgColor,
      foreColor,
    };
  };
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: renderActiveItem(index).bgColor,
          borderRadius: 10,
          padding: 10,
          height: 80,
          marginLeft: 25,
          marginRight: 25,
          justifyContent: "start",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ fontSize: 12, color: renderActiveItem(index).foreColor }}
          >
            {"User icon"}
          </Text>
          {activeIndex === index && (
            <Text style={{ fontSize: 12, color: "#fcba03" }}>{"Open"}</Text>
          )}
        </View>
        <Text
          style={{
            position: "absolute",
            bottom: 10,
            fontWeight: 600,
            color: renderActiveItem(index).foreColor,
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 20}}>
      <Carousel
        ref={(c) => {
          setCarousel(c)
          props.onChangeSetting(dataList[activeIndex]);
        }}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={250}
        itemWidth={150}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          props.onChangeSetting(dataList[index]);
        }}
      />
    </View>
  );
}
