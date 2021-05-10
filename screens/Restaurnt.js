import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const Restaurnt = ({route}) => {
  const [currentLocation, setCurrentLocation] = useState(
    route.params.currentLocation,
  );
  const [restaurant, setRestaurant] = useState(route.params.item);
  const nav = useNavigation();

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => nav.goBack()}>
          <Image
            style={{width: 30, height: 30}}
            source={icons.back}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}>
            <Text
              style={{
                ...FONTS.h4,
              }}>
              {restaurant?.name}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          // onPress={() => nav.goBack()}
        >
          <Image
            style={{width: 30, height: 30}}
            source={icons.list}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFoodInfo = () => {
    console.log(restaurant);
    const {menu} = restaurant;
    console.log('menuuu');
    console.log(menu);
    if (menu)
      return (
        <View>
          <View
            style={{
              height: SIZES.height * 0.3,
            }}>
            <Image
              source={restaurant.menu[0].photo}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: '100%',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: -20,
                width: SIZES.width,
                height: 50,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}>
                <Text
                  style={{
                    ...FONTS.body1,
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.h2,
                  }}>
                  5
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}>
                <Text
                  style={{
                    ...FONTS.body1,
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: SIZES.width,
                alignItems: 'center',
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.h2,
                  marginHorizontal: 10,
                }}>
                {menu[0].name} - {menu[0].price.toFixed(2)}
              </Text>

              <Text style={{...FONTS.body3, textAlign: 'center'}}>
                {menu[0].description}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={icons.fire}
              />
              <Text style={{...FONTS.h3, color: COLORS.darkgray}}>
                {' '}
                {menu[0].calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        </View>
      );
    else return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
    </SafeAreaView>
  );
};

export default Restaurnt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
