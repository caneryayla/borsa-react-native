import React, { View, Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from 'react';
import axios from "axios";


const InputCardCoin = () => {

  const [input, setInput] = useState("")
  const [price, setPrice] = useState("")
  const [todayhigh, settodayHigh] = useState("")
  const [todaylow, settodayLow] = useState("")
  const [volume, setVolume] = useState("")
  const [priceChangePercent, setPriceChangePercent] = useState("")
  const [priceChange, setPriceChange] = useState("")
  const [openPrice, setopenPrice] = useState("")

  useEffect(() => {
    console.log(input.toUpperCase())

    axios.get('https://api2.binance.com/api/v3/ticker/24hr')
      .then((response) => {

        for (let i = 0; i < 2084; i++) {

          if (response.data[i].symbol == input.toUpperCase()) {
            setPrice(response.data[i].lastPrice)
            settodayHigh(response.data[i].highPrice)
            settodayLow(response.data[i].lowPrice)
            setVolume(response.data[i].volume)
            setPriceChangePercent(response.data[i].priceChangePercent)
            setPriceChange(response.data[i].priceChange)
            setopenPrice(response.data[i].openPrice)
            setlastQty(response.data[i].lastQty)
            setquoteQty(response.data[i].quoteQty)
          }
        }
      })

  }, [input])

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#483838', paddingTop: 100 }}>
      <TextInput
        style={style.input}
        placeholder="Arama..."
        autoCapitalize='none'
        onChangeText={(val) => setTimeout(() => { setInput(val) }, 2000)}
      ></TextInput>
      <View style={style.coincard}>
        <View style={style.maincard}>
          <View style={style.cointop}>
            <View style={style.topleft}>
              <Image
                style={style.imgs}
                source={{
                  uri: "https://cdn.freebiesupply.com/logos/large/2x/blackcoin-logo-png-transparent.png",
                }}
              />
            </View>

            <View style={style.topright}>
              <Text style={{ fontSize: 20, fontWeight: "800", marginBottom: 2 }}>
                {input}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "200", marginBottom: 2 }}>
                {input}/TetherUs
              </Text>
            </View>
          </View>

          <View style={style.coinbottom}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "200", marginBottom: 10, fontFamily: 'Verdana' }}>
                Price: <Text style={{ fontWeight: '600' }}>{price}</Text>
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "200", marginBottom: 10, fontFamily: 'Verdana' }}>
                Price Change Percent: <Text style={{ color: priceChangePercent > 0 ? 'green' : 'red', fontWeight: '600' }}>{priceChangePercent}</Text>
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "200", marginBottom: 10, fontFamily: 'Verdana' }}>
                Price Change: <Text style={{ color: priceChange > 0 ? 'green' : 'red', fontWeight: '600' }}>{priceChange}</Text>
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "200", marginBottom: 10, fontFamily: 'Verdana' }}>
                Volume: <Text style={{ fontWeight: '600' }}>{volume}</Text>
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "200", marginBottom: 10, fontFamily: 'Verdana' }}>
                Max Price: <Text style={{ color: 'green', fontWeight: '600' }}>{todayhigh}</Text>
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "200", marginBottom: 10, fontFamily: 'Verdana' }}>
                Min Price: <Text style={{ color: 'red', fontWeight: '600' }}>{todaylow}</Text>
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "200", marginBottom: 10, fontFamily: 'Verdana' }}>
                Open Price: <Text style={{ fontWeight: '600' }}>{openPrice}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
};

const style = StyleSheet.create({
  coincard: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  maincard: {
    width: "94%",
    height: "100%",
  },
  cointop: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
  },
  topleft: {
    width: "20%",
    height: "100%",
    backgroundColor: "#BF9742",
    alignItems: "center",
    justifyContent: "center",
  },
  topright: {
    width: "80%",
    height: "100%",
    backgroundColor: "#A47E3B",
    alignItems: "center",
    justifyContent: "center",
  },
  coinbottom: {
    backgroundColor: "#DCD7C9",
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 15,
    justifyContent: "center",
  },
  imgs: {
    width: "65%",
    height: "92%",
  },
  input: {
    width: "95%",
    height: 30,
    borderWidth: 3,
    borderColor: "black",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 8,
    backgroundColor: "#fff",
  },
});

export default InputCardCoin;
