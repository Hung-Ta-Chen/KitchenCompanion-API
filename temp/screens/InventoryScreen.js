import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const InventoryScreen = () => {
  return (
    <View style={styles.inventoryScreen}>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={styles.instanceChild} />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Banana</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>{`Exp. on 1/31/24
Pantry`}</Text>
        </View>
      </View>
      <Image
        style={styles.bananaImage2}
        contentFit="cover"
        source={require("../assets/banana-image-2.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.instanceItem} />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Apple</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>
            Exp. on 2/2/24Pantry
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.frameViewPosition]}>
        <View style={styles.instanceChild} />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Passion fruit</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>
            Exp. on 2/2/24Fridge
          </Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.instanceChild} />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Avocado</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>
            Exp. on 2/1/24Fridge
          </Text>
        </View>
      </View>
      <Image
        style={[styles.timeBarIcon, styles.barLayout1]}
        contentFit="cover"
        source={require("../assets/time-bar1.png")}
      />
      <Image
        style={styles.closeButtonIcon}
        contentFit="cover"
        source={require("../assets/close-button.png")}
      />
      <Text style={[styles.inventory, styles.bananaClr]}>Inventory</Text>
      <Image
        style={[styles.inventoryScreenChild, styles.bananaImage1Layout]}
        contentFit="cover"
        source={require("../assets/frame-112.png")}
      />
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition1]}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-34625148.png")}
        />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Grape</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>
            Exp. on 2/3/24Fridge
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition1]}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-346251481.png")}
        />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Cherry</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>
            Exp. on 2/14/24
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-346251482.png")}
        />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Mango</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>
            Exp. on 2/15/24
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-346251483.png")}
        />
        <View style={styles.bananaParent}>
          <Text style={[styles.banana, styles.bananaClr]}>Strawberry</Text>
          <Text style={[styles.expOn13124, styles.bananaTypo]}>
            Exp. on 2/17/24
          </Text>
        </View>
      </View>
      <View style={styles.image3} />
      <Image
        style={[styles.bananaImage1, styles.bananaImage1Layout]}
        contentFit="cover"
        source={require("../assets/banana-image-14.png")}
      />
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.addBarIcon, styles.barLayout]}
        contentFit="cover"
        source={require("../assets/add-bar.png")}
      />
      <View style={styles.navigationBar}>
        <View style={[styles.navigationBarChild, styles.barLayout1]} />
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract.png")}
        />
        <Image
          style={[styles.navigationBarItem, styles.barLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1798.png")}
        />
        <View style={[styles.homeParent, styles.homeParentLayout]}>
          <Image
            style={[styles.homeIcon, styles.homeIconPosition]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
        </View>
        <View style={[styles.homeGroup, styles.homeParentLayout]}>
          <Image
            style={[styles.homeIcon1, styles.homeIconPosition]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </View>
        <View style={[styles.homeContainer, styles.homeParentLayout]}>
          <Image
            style={[styles.homeIcon1, styles.homeIconPosition]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
        </View>
        <View style={[styles.homeParent1, styles.homeParentLayout]}>
          <Image
            style={[styles.homeIcon, styles.homeIconPosition]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    height: 135,
    left: 36,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bananaClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  bananaTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameViewPosition: {
    left: 192,
    height: 135,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  barLayout1: {
    width: 375,
    position: "absolute",
  },
  bananaImage1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "51.2%",
    right: "12.27%",
    width: "36.53%",
    height: "9.73%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParentPosition1: {
    top: 430,
    height: 135,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  rectangleParentPosition: {
    bottom: "11.21%",
    top: "72.17%",
    height: "16.63%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  barLayout: {
    width: 56,
    position: "absolute",
  },
  homeParentLayout: {
    height: 40,
    width: 78,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
    overflow: "hidden",
  },
  homeIconPosition: {
    top: -83,
    height: 40,
    width: 78,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: 19,
    marginTop: -9,
  },
  vectorIconPosition: {
    marginLeft: -10,
    width: 20,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  instanceChild: {
    backgroundColor: Color.colorGainsboro,
    height: 79,
    width: 137,
  },
  banana: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  expOn13124: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray_200,
    marginTop: -2,
    textAlign: "left",
  },
  bananaParent: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    marginTop: 8,
    width: 137,
  },
  rectangleParent: {
    top: 118,
    overflow: "hidden",
  },
  bananaImage2: {
    height: 79,
    width: 137,
    left: 36,
    top: 118,
    position: "absolute",
  },
  instanceItem: {
    height: 79,
    width: 137,
    backgroundColor: Color.colorWhite,
  },
  rectangleGroup: {
    top: 274,
  },
  rectangleContainer: {
    top: 274,
  },
  frameView: {
    top: 118,
    overflow: "hidden",
  },
  timeBarIcon: {
    marginLeft: -187.5,
    top: 0,
    height: 43,
    left: "50%",
    width: 375,
    overflow: "hidden",
  },
  closeButtonIcon: {
    top: 56,
    left: 27,
    width: 28,
    height: 28,
    position: "absolute",
  },
  inventory: {
    top: 55,
    left: 70,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    position: "absolute",
  },
  inventoryScreenChild: {
    top: "14.53%",
    bottom: "75.74%",
  },
  rectangleIcon: {
    height: 79,
    width: 137,
  },
  rectangleParent1: {
    left: 41,
  },
  rectangleParent2: {
    left: 197,
  },
  rectangleParent3: {
    marginLeft: -142.5,
  },
  rectangleParent4: {
    marginLeft: 13.5,
  },
  image3: {
    left: 38,
    width: 133,
    top: 274,
    height: 79,
    position: "absolute",
  },
  bananaImage1: {
    top: "33.74%",
    bottom: "56.53%",
  },
  image4Icon: {
    left: 65,
    width: 79,
    top: 274,
    height: 79,
    position: "absolute",
  },
  addBarIcon: {
    top: 509,
    left: 315,
    height: 216,
  },
  navigationBarChild: {
    top: 7,
    left: 0,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorSkyblue_100,
    height: 76,
  },
  subtractIcon: {
    width: 110,
    height: 63,
  },
  navigationBarItem: {
    top: -1,
    left: 206,
    height: 56,
  },
  homeIcon: {
    left: -11,
  },
  vectorIcon: {
    marginLeft: -9,
    width: 18,
    top: "50%",
    height: 19,
    marginTop: -9,
    left: "50%",
    position: "absolute",
  },
  homeParent: {
    left: 32,
    top: 25,
    width: 78,
    backgroundColor: Color.colorGray_100,
  },
  homeIcon1: {
    left: -13,
  },
  vectorIcon1: {
    marginLeft: -13,
    height: 20,
    width: 20,
    top: "50%",
    marginTop: -9,
    left: "50%",
    position: "absolute",
  },
  homeGroup: {
    left: 110,
    top: 25,
    width: 78,
    backgroundColor: Color.colorGray_100,
  },
  vectorIcon2: {
    height: 19,
    marginTop: -9,
    marginLeft: -10,
  },
  homeContainer: {
    top: 8,
    left: 195,
  },
  vectorIcon3: {
    marginTop: -10,
    height: 20,
  },
  homeParent1: {
    left: 266,
    top: 25,
    width: 78,
    backgroundColor: Color.colorGray_100,
  },
  navigationBar: {
    bottom: 0,
    left: -4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 379,
    height: 83,
    position: "absolute",
  },
  inventoryScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default InventoryScreen;
