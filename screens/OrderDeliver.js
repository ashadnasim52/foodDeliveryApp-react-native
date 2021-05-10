import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {
  COLORS,
  FONTS,
  GOOGLE_API_KEY,
  icons,
  images,
  SIZES,
} from '../constants';
import MapViewDirections from 'react-native-maps-directions';

const OrderDeliver = ({route, navigation}) => {
  const fromLoc = {
    latitude: 1.5496614931250685,
    longitude: 110.36381866919922,
  };
  const toLoc = {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  };

  const [region, setRegion] = useState({
    latitude: (fromLoc.latitude + toLoc.latitude) / 2,
    longitude: (fromLoc.longitude + toLoc.longitude) / 2,
    latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
    longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
  });

  const renderMap = () => {
    const destinationMarker = () => {
      return (
        <Marker coordinate={toLoc}>
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Image
                source={icons.pin}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.white,
                }}
              />
            </View>
          </View>
        </Marker>
      );
    };

    const carIcon = () => {
      return (
        <Marker
          coordinate={fromLoc}
          flat={true}
          anchor={{
            x: 0.5,
            y: 0.5,
          }}>
          <Image
            source={icons.car}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </Marker>
      );
    };
    return (
      <View
        style={{
          flex: 1,
        }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{
            flex: 1,
          }}>
          {/* <MapViewDirections
            origin={fromLoc}
            destination={toLoc}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
          /> */}
          {destinationMarker()}
          {carIcon()}
        </MapView>
      </View>
    );
  };

  const renderDeliveryInfo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding * 3,
            paddingHorizontal: SIZES.padding * 2,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={images.avatar_1}
              style={{
                height: 50,
                width: 50,
                borderRadius: SIZES.radius,
              }}
              resizeMode="center"
            />
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.padding,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{...FONTS.h4}}>Temp Name</Text>
                  <Text style={{...FONTS.body4}}>SOme Description...</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={icons.star}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: COLORS.primary,
                      marginRight: SIZES.padding,
                    }}
                    resizeMode="center"
                  />
                  <Text style={{...FONTS.body3}}>3.5</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: SIZES.padding,
                borderRadius: SIZES.radius * 0.3,
                marginHorizontal: SIZES.padding * 0.3,
              }}>
              <Text
                style={{
                  ...FONTS.body2,
                  color: COLORS.white,
                }}>
                Call
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: COLORS.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: SIZES.padding,
                borderRadius: SIZES.radius * 0.3,
                marginHorizontal: SIZES.padding * 0.3,
              }}>
              <Text
                style={{
                  ...FONTS.body2,
                  color: COLORS.white,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.padding * 3,
            paddingVertical: SIZES.padding * 2,
            width: SIZES.width * 0.9,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={icons.red_pin}
            style={{
              height: 30,
              width: 30,
            }}
            resizeMode="center"
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.body3,
              }}>
              Kampung
            </Text>
          </View>
          <Text
            style={{
              ...FONTS.body3,
            }}>
            10 mins
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      {renderMap()}

      {renderHeader()}

      {renderDeliveryInfo()}
    </View>
  );
};

export default OrderDeliver;

const styles = StyleSheet.create({});
