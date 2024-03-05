import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const Screens = () => {
  return (
    <View style={styles.screens}>
      <View style={styles.startScreen}>
        <Text style={[styles.togetherWeMake, styles.banana1Typo]}>
          Together, We Make Every Bite Count!
        </Text>
        <Image
          style={styles.colorGradientIcon}
          contentFit="cover"
          source={require("../assets/color-gradient.png")}
        />
        <Image
          style={styles.colorGradientIcon1}
          contentFit="cover"
          source={require("../assets/color-gradient1.png")}
        />
        <Image
          style={styles.timeBarIcon}
          contentFit="cover"
          source={require("../assets/time-bar.png")}
        />
        <Image
          style={[styles.saly19Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/saly19.png")}
        />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/08.png")}
        />
      </View>
      <View style={styles.homeScreen}>
        <Image
          style={styles.colorGradientIcon2}
          contentFit="cover"
          source={require("../assets/color-gradient2.png")}
        />
        <Text style={[styles.welcomeBackUploadContainer, styles.banana1Typo]}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.welcome}>{`Back!
`}</Text>
          <Text style={styles.text}>{`

`}</Text>
          <Text
            style={styles.welcome}
          >{`Upload or take a picture of what you eat!
`}</Text>
        </Text>
        <Image
          style={styles.timeBarIcon}
          contentFit="cover"
          source={require("../assets/time-bar.png")}
        />
        <Image
          style={styles.timeBarIcon}
          contentFit="cover"
          source={require("../assets/time-bar.png")}
        />
        <Image
          style={[styles.addBarIcon, styles.addIconLayout]}
          contentFit="cover"
          source={require("../assets/add-bar.png")}
        />
        <View style={styles.homeScreenInner}>
          <View style={styles.seafoodParent}>
            <View style={styles.seafood}>
              <Text style={styles.text2}>🦐</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Seafood
              </Text>
            </View>
            <View style={styles.drinks}>
              <Text style={[styles.text3, styles.textTypo1]}>🧋</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Drinks
              </Text>
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text4, styles.textTypo1]}>🧀</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Dairy
              </Text>
            </View>
            <View style={styles.group}>
              <Text style={[styles.text5, styles.textTypo1]}>🥬</Text>
              <Text style={[styles.vegetable, styles.seafood1Position]}>
                Vegetable
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.text6}>🥫</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Canned
              </Text>
            </View>
            <View style={styles.frameView}>
              <Text style={[styles.text7, styles.textTypo1]}>🍰</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Desert
              </Text>
            </View>
            <View style={styles.parent1}>
              <Text style={[styles.text4, styles.textTypo1]}>🫐</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Fruit
              </Text>
            </View>
            <View style={styles.parent2}>
              <Text style={[styles.text9, styles.textTypo1]}>🍖</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Meat
              </Text>
            </View>
            <View style={styles.parent3}>
              <Text style={[styles.text10, styles.text10Position]}>🥞</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Bread
              </Text>
            </View>
            <View style={styles.parent4}>
              <Text style={[styles.text11, styles.textTypo1]}>🍬</Text>
              <Text style={[styles.seafood1, styles.seafood1Position]}>
                Snacks
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.homeScreenChild, styles.frameParent23Position]}>
          <View style={styles.frameParent}>
            <View style={styles.cartItemLayout}>
              <View style={styles.cartItemShadowBox}>
                <View style={[styles.v4Parent, styles.v4GroupLayout]}>
                  <Image
                    style={styles.v4Icon}
                    contentFit="cover"
                    source={require("../assets/v-4.png")}
                  />
                  <View style={styles.vectorParent}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                    <Image
                      style={[styles.bananaImage1, styles.bananaImage1Position]}
                      contentFit="cover"
                      source={require("../assets/banana-image-1.png")}
                    />
                  </View>
                </View>
                <View style={styles.frameGroup}>
                  <View>
                    <Text style={[styles.mixedBlackCoffee, styles.text12Typo]}>
                      Mixed Black Coffee
                    </Text>
                  </View>
                  <Image
                    style={styles.antDesignheartFilledIcon}
                    contentFit="cover"
                    source={require("../assets/antdesignheartfilled.png")}
                  />
                  <View style={[styles.frameContainer, styles.parent5FlexBox]}>
                    <View style={[styles.parent5, styles.parent5FlexBox]}>
                      <Text style={[styles.text12, styles.text12Typo]}>$</Text>
                      <Text style={[styles.text12, styles.text12Typo]}>12</Text>
                    </View>
                    <View style={styles.frameParent1}>
                      <View
                        style={[
                          styles.lucideminusWrapper,
                          styles.lucideminusFrameShadowBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/lucideminus.png")}
                        />
                      </View>
                      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                        <Text style={styles.text14}>0</Text>
                      </View>
                      <View
                        style={[
                          styles.octiconplus16Wrapper,
                          styles.wrapperFlexBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/octiconplus16.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.frameParent2, styles.frameParentBorder1]}>
                <View
                  style={[
                    styles.lucideminusContainer,
                    styles.lucideminusFrameShadowBox,
                  ]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/lucideminus.png")}
                  />
                </View>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.text14}>0</Text>
                </View>
                <View
                  style={[styles.octiconplus16Container, styles.wrapperFlexBox]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/octiconplus16.png")}
                  />
                </View>
              </View>
              <Text style={[styles.passionFruit, styles.grapeTypo]}>
                Passion Fruit
              </Text>
            </View>
            <View style={[styles.cartItemGroup, styles.cartItemLayout]}>
              <View style={styles.cartItemShadowBox}>
                <View style={[styles.v4Group, styles.v4GroupLayout]}>
                  <Image
                    style={styles.v4Icon}
                    contentFit="cover"
                    source={require("../assets/v-4.png")}
                  />
                  <View style={styles.vectorParent}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                    <Image
                      style={[styles.bananaImage1, styles.bananaImage1Position]}
                      contentFit="cover"
                      source={require("../assets/banana-image-1.png")}
                    />
                  </View>
                </View>
                <View style={styles.frameGroup}>
                  <View>
                    <Text style={[styles.mixedBlackCoffee, styles.text12Typo]}>
                      Mixed Black Coffee
                    </Text>
                  </View>
                  <Image
                    style={styles.antDesignheartFilledIcon}
                    contentFit="cover"
                    source={require("../assets/antdesignheartfilled.png")}
                  />
                  <View style={[styles.frameContainer, styles.parent5FlexBox]}>
                    <View style={[styles.parent5, styles.parent5FlexBox]}>
                      <Text style={[styles.text12, styles.text12Typo]}>$</Text>
                      <Text style={[styles.text12, styles.text12Typo]}>12</Text>
                    </View>
                    <View style={styles.frameParent1}>
                      <View
                        style={[
                          styles.lucideminusFrame,
                          styles.lucideminusFrameShadowBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/lucideminus.png")}
                        />
                      </View>
                      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                        <Text style={styles.text14}>0</Text>
                      </View>
                      <View
                        style={[
                          styles.octiconplus16Frame,
                          styles.wrapperFlexBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/octiconplus16.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.text19, styles.textPosition]}>{`$5
`}</Text>
              <View style={[styles.frameParent2, styles.frameParentBorder1]}>
                <View
                  style={[
                    styles.lucideminusWrapper1,
                    styles.lucideminusFrameShadowBox,
                  ]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/lucideminus.png")}
                  />
                </View>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.text14}>0</Text>
                </View>
                <View
                  style={[styles.octiconplus16Wrapper1, styles.wrapperFlexBox]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/octiconplus16.png")}
                  />
                </View>
              </View>
              <Text style={[styles.avocado, styles.grapeTypo]}>Avocado</Text>
              <Image
                style={[styles.frameChild, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/frame-11.png")}
              />
            </View>
            <View style={[styles.cartItemGroup, styles.cartItemLayout]}>
              <View style={styles.cartItemShadowBox}>
                <View style={[styles.v4Group, styles.v4GroupLayout]}>
                  <Image
                    style={styles.v4Icon}
                    contentFit="cover"
                    source={require("../assets/v-4.png")}
                  />
                  <View style={styles.vectorParent}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                    <Image
                      style={[styles.bananaImage1, styles.bananaImage1Position]}
                      contentFit="cover"
                      source={require("../assets/banana-image-1.png")}
                    />
                  </View>
                </View>
                <View style={styles.frameGroup}>
                  <View>
                    <Text style={[styles.mixedBlackCoffee, styles.text12Typo]}>
                      Mixed Black Coffee
                    </Text>
                  </View>
                  <Image
                    style={styles.antDesignheartFilledIcon}
                    contentFit="cover"
                    source={require("../assets/antdesignheartfilled.png")}
                  />
                  <View style={[styles.frameContainer, styles.parent5FlexBox]}>
                    <View style={[styles.parent5, styles.parent5FlexBox]}>
                      <Text style={[styles.text12, styles.text12Typo]}>$</Text>
                      <Text style={[styles.text12, styles.text12Typo]}>12</Text>
                    </View>
                    <View style={styles.frameParent1}>
                      <View
                        style={[
                          styles.lucideminusWrapper2,
                          styles.lucideminusFrameShadowBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/lucideminus.png")}
                        />
                      </View>
                      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                        <Text style={styles.text14}>0</Text>
                      </View>
                      <View
                        style={[
                          styles.octiconplus16Wrapper2,
                          styles.wrapperFlexBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/octiconplus16.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.text19, styles.textPosition]}>{`$3
`}</Text>
              <View style={[styles.frameParent2, styles.frameParentBorder1]}>
                <View
                  style={[
                    styles.lucideminusWrapper3,
                    styles.lucideminusFrameShadowBox,
                  ]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/lucideminus.png")}
                  />
                </View>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.text14}>0</Text>
                </View>
                <View
                  style={[styles.octiconplus16Wrapper3, styles.wrapperFlexBox]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/octiconplus16.png")}
                  />
                </View>
              </View>
              <Text style={[styles.passionFruit, styles.grapeTypo]}>
                {" "}
                Banana
              </Text>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/frame-111.png")}
              />
            </View>
            <View style={[styles.cartItemGroup, styles.cartItemLayout]}>
              <View style={styles.cartItemShadowBox}>
                <View style={[styles.v4Group, styles.v4GroupLayout]}>
                  <Image
                    style={styles.v4Icon}
                    contentFit="cover"
                    source={require("../assets/v-4.png")}
                  />
                  <View style={styles.vectorParent}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                    <Image
                      style={[styles.bananaImage1, styles.bananaImage1Position]}
                      contentFit="cover"
                      source={require("../assets/banana-image-1.png")}
                    />
                  </View>
                </View>
                <View style={styles.frameGroup}>
                  <View>
                    <Text style={[styles.mixedBlackCoffee, styles.text12Typo]}>
                      Mixed Black Coffee
                    </Text>
                  </View>
                  <Image
                    style={styles.antDesignheartFilledIcon}
                    contentFit="cover"
                    source={require("../assets/antdesignheartfilled.png")}
                  />
                  <View style={[styles.frameContainer, styles.parent5FlexBox]}>
                    <View style={[styles.parent5, styles.parent5FlexBox]}>
                      <Text style={[styles.text12, styles.text12Typo]}>$</Text>
                      <Text style={[styles.text12, styles.text12Typo]}>12</Text>
                    </View>
                    <View style={styles.frameParent1}>
                      <View
                        style={[
                          styles.lucideminusWrapper4,
                          styles.lucideminusFrameShadowBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/lucideminus.png")}
                        />
                      </View>
                      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                        <Text style={styles.text14}>0</Text>
                      </View>
                      <View
                        style={[
                          styles.octiconplus16Wrapper4,
                          styles.wrapperFlexBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/octiconplus16.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.text19, styles.textPosition]}>{`$3
`}</Text>
              <View style={[styles.frameParent2, styles.frameParentBorder1]}>
                <View
                  style={[
                    styles.lucideminusWrapper5,
                    styles.lucideminusFrameShadowBox,
                  ]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/lucideminus.png")}
                  />
                </View>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.text14}>0</Text>
                </View>
                <View
                  style={[styles.octiconplus16Wrapper5, styles.wrapperFlexBox]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/octiconplus16.png")}
                  />
                </View>
              </View>
              <Text style={[styles.passionFruit, styles.grapeTypo]}>Apple</Text>
              <Image
                style={styles.image1Icon}
                contentFit="cover"
                source={require("../assets/image-1.png")}
              />
            </View>
            <View style={[styles.cartItemGroup, styles.cartItemLayout]}>
              <View style={styles.cartItemShadowBox}>
                <View style={[styles.v4Group, styles.v4GroupLayout]}>
                  <Image
                    style={styles.v4Icon}
                    contentFit="cover"
                    source={require("../assets/v-4.png")}
                  />
                  <View style={styles.vectorParent}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                    <Image
                      style={[styles.bananaImage1, styles.bananaImage1Position]}
                      contentFit="cover"
                      source={require("../assets/banana-image-1.png")}
                    />
                  </View>
                </View>
                <View style={styles.frameGroup}>
                  <View>
                    <Text style={[styles.mixedBlackCoffee, styles.text12Typo]}>
                      Mixed Black Coffee
                    </Text>
                  </View>
                  <Image
                    style={styles.antDesignheartFilledIcon}
                    contentFit="cover"
                    source={require("../assets/antdesignheartfilled.png")}
                  />
                  <View style={[styles.frameContainer, styles.parent5FlexBox]}>
                    <View style={[styles.parent5, styles.parent5FlexBox]}>
                      <Text style={[styles.text12, styles.text12Typo]}>$</Text>
                      <Text style={[styles.text12, styles.text12Typo]}>12</Text>
                    </View>
                    <View style={styles.frameParent1}>
                      <View
                        style={[
                          styles.lucideminusWrapper6,
                          styles.lucideminusFrameShadowBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/lucideminus.png")}
                        />
                      </View>
                      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                        <Text style={styles.text14}>0</Text>
                      </View>
                      <View
                        style={[
                          styles.octiconplus16Wrapper6,
                          styles.wrapperFlexBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/octiconplus16.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.text34, styles.text34Typo]}>{`$5
`}</Text>
              <View style={[styles.frameParent18, styles.frameParentBorder1]}>
                <View
                  style={[
                    styles.lucideminusWrapper7,
                    styles.lucideminusFrameShadowBox,
                  ]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/lucideminus.png")}
                  />
                </View>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.text14}>0</Text>
                </View>
                <View
                  style={[styles.octiconplus16Wrapper7, styles.wrapperFlexBox]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/octiconplus16.png")}
                  />
                </View>
              </View>
              <Text style={[styles.grape, styles.grapeTypo]}>Grape</Text>
              <Image
                style={[styles.image12Icon, styles.text10Position]}
                contentFit="cover"
                source={require("../assets/image-12.png")}
              />
            </View>
            <View style={[styles.cartItemGroup, styles.cartItemLayout]}>
              <View style={styles.cartItemShadowBox}>
                <View style={[styles.v4Group, styles.v4GroupLayout]}>
                  <Image
                    style={styles.v4Icon}
                    contentFit="cover"
                    source={require("../assets/v-4.png")}
                  />
                  <View style={styles.vectorParent}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                    <Image
                      style={[styles.bananaImage1, styles.bananaImage1Position]}
                      contentFit="cover"
                      source={require("../assets/banana-image-1.png")}
                    />
                  </View>
                </View>
                <View style={styles.frameGroup}>
                  <View>
                    <Text style={[styles.mixedBlackCoffee, styles.text12Typo]}>
                      Mixed Black Coffee
                    </Text>
                  </View>
                  <Image
                    style={styles.antDesignheartFilledIcon}
                    contentFit="cover"
                    source={require("../assets/antdesignheartfilled.png")}
                  />
                  <View style={[styles.frameContainer, styles.parent5FlexBox]}>
                    <View style={[styles.parent5, styles.parent5FlexBox]}>
                      <Text style={[styles.text12, styles.text12Typo]}>$</Text>
                      <Text style={[styles.text12, styles.text12Typo]}>12</Text>
                    </View>
                    <View style={styles.frameParent1}>
                      <View
                        style={[
                          styles.lucideminusWrapper8,
                          styles.lucideminusFrameShadowBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/lucideminus.png")}
                        />
                      </View>
                      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                        <Text style={styles.text14}>0</Text>
                      </View>
                      <View
                        style={[
                          styles.octiconplus16Wrapper8,
                          styles.wrapperFlexBox,
                        ]}
                      >
                        <Image
                          style={styles.lucideminusIcon}
                          contentFit="cover"
                          source={require("../assets/octiconplus16.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.text39, styles.textPosition]}>{`$5
`}</Text>
              <View style={[styles.frameParent22, styles.frameParentBorder1]}>
                <View
                  style={[
                    styles.lucideminusWrapper9,
                    styles.lucideminusFrameShadowBox,
                  ]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/lucideminus.png")}
                  />
                </View>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.text14}>0</Text>
                </View>
                <View
                  style={[styles.octiconplus16Wrapper9, styles.wrapperFlexBox]}
                >
                  <Image
                    style={styles.lucideminusIcon}
                    contentFit="cover"
                    source={require("../assets/octiconplus16.png")}
                  />
                </View>
              </View>
              <Text style={[styles.mango, styles.grapeTypo]}>Mango</Text>
              <Image
                style={styles.image13Icon}
                contentFit="cover"
                source={require("../assets/image-13.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.vectorParent4}>
          <Image
            style={styles.vectorIcon6}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={styles.vectorIcon7}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={styles.vectorIcon8}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={styles.vectorIcon9}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <View style={[styles.frameParent23, styles.frameParent23Position]}>
          <LinearGradient
            style={styles.wrapperLayout}
            locations={[0, 1]}
            colors={["#ebaecb", "rgba(203, 233, 240, 0.53)"]}
          >
            <Text style={[styles.pantry, styles.pantryTypo]}>Pantry</Text>
          </LinearGradient>
          <LinearGradient
            style={[styles.fridgeWrapper, styles.wrapperLayout]}
            locations={[0, 1]}
            colors={["#ebaecb", "rgba(203, 233, 240, 0.53)"]}
          >
            <Text style={[styles.pantry, styles.pantryTypo]}>Fridge</Text>
          </LinearGradient>
          <LinearGradient
            style={[styles.fridgeWrapper, styles.wrapperLayout]}
            locations={[0, 1]}
            colors={["#ebaecb", "rgba(203, 233, 240, 0.53)"]}
          >
            <Text style={[styles.freeze, styles.pantryTypo]}>Freeze</Text>
          </LinearGradient>
        </View>
        <View style={styles.navigationBar}>
          <View
            style={[styles.navigationBarChild, styles.navigationChildLayout]}
          />
          <Image
            style={styles.subtractIcon}
            contentFit="cover"
            source={require("../assets/subtract.png")}
          />
          <Image
            style={[styles.navigationBarItem, styles.bananaImage1Position1]}
            contentFit="cover"
            source={require("../assets/ellipse-1798.png")}
          />
          <View style={styles.homeParent}>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon10, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
          </View>
          <View style={[styles.homeGroup, styles.homePosition]}>
            <Image
              style={[styles.homeIcon1, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={styles.vectorIcon11}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.homeContainer, styles.homePosition]}>
            <Image
              style={[styles.homeIcon1, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon12, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
          </View>
          <View style={[styles.homeParent1, styles.homePosition]}>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon13, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.marketplaceScreen}>
        <Image
          style={styles.timeBarIcon3}
          contentFit="cover"
          source={require("../assets/time-bar1.png")}
        />
        <View style={[styles.marketplaceItem, styles.marketplaceItemLayout]}>
          <View style={styles.frameParent24}>
            <View style={styles.vectorParent5}>
              <Image
                style={[styles.vectorIcon14, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Image
                style={[styles.bananaImage1, styles.bananaImage1Position]}
                contentFit="cover"
                source={require("../assets/banana-image-11.png")}
              />
            </View>
            <Image
              style={[styles.antDesignheartFilledIcon6, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/antdesignheartfilled1.png")}
            />
            <Text style={[styles.stringValue, styles.stringValueLayout]}>
              Banana
            </Text>
            <Text style={[styles.text41, styles.pantryTypo]}>$3</Text>
            <View style={[styles.frameParent25, styles.frameParentBorder]}>
              <View style={styles.lucideminusWrapperShadowBox}>
                <Image
                  style={styles.lucideminusIcon}
                  contentFit="cover"
                  source={require("../assets/lucideminus.png")}
                />
              </View>
              <View style={styles.octiconplus16WrapperShadowBox}>
                <Image
                  style={styles.lucideminusIcon}
                  contentFit="cover"
                  source={require("../assets/octiconplus16.png")}
                />
              </View>
              <View style={[styles.wrapper11, styles.wrapperBorder]}>
                <Text style={[styles.text42, styles.textTypo]}>0</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent26, styles.frameParentBorder]}>
            <View style={styles.lucideminusWrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/lucideminus.png")}
              />
            </View>
            <View style={styles.octiconplus16WrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/octiconplus16.png")}
              />
            </View>
            <View style={[styles.wrapper11, styles.wrapperBorder]}>
              <Text style={styles.textTypo}>0</Text>
            </View>
          </View>
        </View>
        <View style={[styles.marketplaceItem1, styles.marketplaceItemLayout]}>
          <View style={styles.frameParent24}>
            <View style={styles.vectorParent5}>
              <Image
                style={[styles.vectorIcon14, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Image
                style={[styles.bananaImage1, styles.bananaImage1Position]}
                contentFit="cover"
                source={require("../assets/banana-image-11.png")}
              />
            </View>
            <Image
              style={[styles.antDesignheartFilledIcon6, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/antdesignheartfilled1.png")}
            />
            <Text style={[styles.stringValue, styles.stringValueLayout]}>{`Apple
`}</Text>
            <Text style={[styles.text41, styles.pantryTypo]}>$3</Text>
            <View style={[styles.frameParent25, styles.frameParentBorder]}>
              <View style={styles.lucideminusWrapperShadowBox}>
                <Image
                  style={styles.lucideminusIcon}
                  contentFit="cover"
                  source={require("../assets/lucideminus.png")}
                />
              </View>
              <View style={styles.octiconplus16WrapperShadowBox}>
                <Image
                  style={styles.lucideminusIcon}
                  contentFit="cover"
                  source={require("../assets/octiconplus16.png")}
                />
              </View>
              <View style={[styles.wrapper11, styles.wrapperBorder]}>
                <Text style={[styles.text42, styles.textTypo]}>0</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent26, styles.frameParentBorder]}>
            <View style={styles.lucideminusWrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/lucideminus.png")}
              />
            </View>
            <View style={styles.octiconplus16WrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/octiconplus16.png")}
              />
            </View>
            <View style={[styles.wrapper11, styles.wrapperBorder]}>
              <Text style={styles.textTypo}>0</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.image1Icon1, styles.stringValueLayout]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        <View style={[styles.frameParent30, styles.frameParentLayout]}>
          <View style={styles.vectorParent5}>
            <Image
              style={[styles.vectorIcon14, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
            <Image
              style={[styles.bananaImage1, styles.bananaImage1Position]}
              contentFit="cover"
              source={require("../assets/banana-image-12.png")}
            />
          </View>
          <Image
            style={[styles.antDesignheartFilledIcon6, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/antdesignheartfilled1.png")}
          />
          <Text style={[styles.stringValue, styles.stringValueLayout]}>
            Avocado
          </Text>
          <Text style={[styles.text41, styles.pantryTypo]}>$3</Text>
          <View style={[styles.frameParent31, styles.frameParentBorder]}>
            <View style={styles.lucideminusWrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/lucideminus.png")}
              />
            </View>
            <View style={styles.octiconplus16WrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/octiconplus16.png")}
              />
            </View>
            <View style={[styles.wrapper11, styles.wrapperBorder]}>
              <Text style={styles.textTypo}>0</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent32, styles.frameParentLayout]}>
          <View style={styles.vectorParent5}>
            <Image
              style={[styles.vectorIcon14, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
            <Image
              style={[styles.bananaImage1, styles.bananaImage1Position]}
              contentFit="cover"
              source={require("../assets/banana-image-13.png")}
            />
          </View>
          <Image
            style={[styles.antDesignheartFilledIcon6, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/antdesignheartfilled1.png")}
          />
          <Text style={[styles.stringValue, styles.stringValueLayout]}>
            Passion fruit
          </Text>
          <Text style={[styles.text41, styles.pantryTypo]}>$3</Text>
          <View style={[styles.frameParent31, styles.frameParentBorder]}>
            <View style={styles.lucideminusWrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/lucideminus.png")}
              />
            </View>
            <View style={styles.octiconplus16WrapperShadowBox}>
              <Image
                style={styles.lucideminusIcon}
                contentFit="cover"
                source={require("../assets/octiconplus16.png")}
              />
            </View>
            <View style={[styles.wrapper11, styles.wrapperBorder]}>
              <Text style={styles.textTypo}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.searchForCoffee}>
          <Image
            style={styles.akarIconssearch}
            contentFit="cover"
            source={require("../assets/akariconssearch.png")}
          />
          <Text style={[styles.searchByProduct, styles.grapeTypo]}>
            Search by product name
          </Text>
        </View>
        <View
          style={[styles.navigationBarvariant5, styles.navigationShadowBox]}
        >
          <View
            style={[
              styles.navigationBarvariant5Child,
              styles.navigationChildLayout,
            ]}
          />
          <Image
            style={styles.subtractIcon}
            contentFit="cover"
            source={require("../assets/subtract.png")}
          />
          <Image
            style={[styles.navigationBarvariant5Item, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1798.png")}
          />
          <View style={[styles.homeParent2, styles.homeIconLayout]}>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon10, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </View>
          <View style={[styles.homeParent3, styles.homeIconLayout]}>
            <Image
              style={[styles.homeIcon1, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={styles.vectorIcon11}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.homeParent4, styles.homeParentPosition1]}>
            <Image
              style={[styles.homeIcon1, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon12, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
          </View>
          <View style={[styles.homeParent5, styles.homeParentPosition]}>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon13, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.inventoryScreen}>
        <View style={[styles.rectangleParent, styles.rectanglePosition1]}>
          <View style={styles.instanceChild} />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>Banana</Text>
            <Text
              style={[styles.expOn13124, styles.banana1Typo]}
            >{`Exp. on 1/31/24
Pantry`}</Text>
          </View>
        </View>
        <Image
          style={styles.bananaImage2}
          contentFit="cover"
          source={require("../assets/banana-image-2.png")}
        />
        <View style={[styles.rectangleGroup, styles.rectanglePosition1]}>
          <View style={styles.instanceItem} />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>Apple</Text>
            <Text style={[styles.expOn13124, styles.banana1Typo]}>
              Exp. on 2/2/24Pantry
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={styles.instanceChild} />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>
              Passion fruit
            </Text>
            <Text style={[styles.expOn13124, styles.banana1Typo]}>
              Exp. on 2/2/24Fridge
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
          <View style={styles.instanceChild} />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>Avocado</Text>
            <Text style={[styles.expOn13124, styles.banana1Typo]}>
              Exp. on 2/1/24Fridge
            </Text>
          </View>
        </View>
        <Image
          style={styles.timeBarIcon}
          contentFit="cover"
          source={require("../assets/time-bar1.png")}
        />
        <Image
          style={styles.closeButtonIcon}
          contentFit="cover"
          source={require("../assets/close-button.png")}
        />
        <Text style={[styles.inventory, styles.text34Typo]}>Inventory</Text>
        <Image
          style={[styles.inventoryScreenChild, styles.bananaImage110Layout]}
          contentFit="cover"
          source={require("../assets/frame-112.png")}
        />
        <View
          style={[styles.rectangleParent2, styles.rectangleParentPosition1]}
        >
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-34625148.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>Grape</Text>
            <Text style={[styles.expOn13124, styles.banana1Typo]}>
              Exp. on 2/3/24Fridge
            </Text>
          </View>
        </View>
        <View
          style={[styles.rectangleParent3, styles.rectangleParentPosition1]}
        >
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-346251481.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>Cherry</Text>
            <Text style={[styles.expOn13124, styles.banana1Typo]}>
              Exp. on 2/14/24
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-346251482.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>Mango</Text>
            <Text style={[styles.expOn13124, styles.banana1Typo]}>
              Exp. on 2/15/24
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-346251483.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana1, styles.banana1Typo]}>Strawberry</Text>
            <Text style={[styles.expOn13124, styles.banana1Typo]}>
              Exp. on 2/17/24
            </Text>
          </View>
        </View>
        <View style={styles.image3} />
        <Image
          style={[styles.bananaImage110, styles.bananaImage110Layout]}
          contentFit="cover"
          source={require("../assets/banana-image-14.png")}
        />
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.addBarIcon1, styles.addIconLayout]}
          contentFit="cover"
          source={require("../assets/add-bar.png")}
        />
        <View style={[styles.navigationBar1, styles.navigationShadowBox]}>
          <View
            style={[
              styles.navigationBarvariant5Child,
              styles.navigationChildLayout,
            ]}
          />
          <Image
            style={styles.subtractIcon}
            contentFit="cover"
            source={require("../assets/subtract.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1798.png")}
          />
          <View style={[styles.homeParent2, styles.homeIconLayout]}>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon10, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </View>
          <View style={[styles.homeParent3, styles.homeIconLayout]}>
            <Image
              style={[styles.homeIcon1, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={styles.vectorIcon11}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.homeParent8, styles.homeParentPosition1]}>
            <Image
              style={[styles.homeIcon1, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon12, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector12.png")}
            />
          </View>
          <View style={[styles.homeParent9, styles.homeParentPosition]}>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Image
              style={[styles.vectorIcon13, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banana1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  addIconLayout: {
    height: 216,
    width: 56,
    position: "absolute",
  },
  seafood1Position: {
    top: 38,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
  },
  text10Position: {
    left: 7,
    position: "absolute",
  },
  frameParent23Position: {
    left: 10,
    flexDirection: "row",
    position: "absolute",
  },
  v4GroupLayout: {
    width: 100,
    height: 120,
    backgroundColor: Color.colorWhitesmoke,
  },
  bananaImage1Position: {
    right: "0%",
    width: "100%",
    left: "0%",
    bottom: "0%",
  },
  text12Typo: {
    color: Color.black200,
    fontFamily: FontFamily.gilroy,
    fontWeight: "600",
    textAlign: "left",
  },
  parent5FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  lucideminusFrameShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  wrapperFlexBox: {
    marginLeft: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParentBorder1: {
    left: 123,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  grapeTypo: {
    fontFamily: FontFamily.smallBodyTextLight12,
    fontWeight: "300",
    textAlign: "left",
  },
  cartItemLayout: {
    height: 140,
    width: 271,
  },
  textPosition: {
    left: 127,
    fontSize: FontSize.size_base,
    display: "none",
  },
  framePosition: {
    bottom: "7.14%",
    top: "7.14%",
    height: "85.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text34Typo: {
    top: 55,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  pantryTypo: {
    fontFamily: FontFamily.lexendSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  wrapperLayout: {
    backgroundColor: "transparent",
    width: 106,
    borderColor: Color.colorSienna,
    height: 37,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  navigationChildLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  bananaImage1Position1: {
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  homeIconLayout: {
    height: 40,
    width: 78,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 19,
    marginTop: -9,
  },
  homePosition: {
    bottom: "21.69%",
    top: "30.12%",
    backgroundColor: Color.colorGray_100,
    width: "20.8%",
    height: "48.19%",
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconPosition: {
    marginLeft: -10,
    width: 20,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  marketplaceItemLayout: {
    height: 279,
    width: 162,
    top: 127,
    position: "absolute",
  },
  stringValueLayout: {
    width: 135,
    position: "absolute",
  },
  frameParentBorder: {
    backgroundColor: Color.colorPowderblue,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    position: "absolute",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  textTypo: {
    height: 12,
    width: 17,
    top: 2,
    fontFamily: FontFamily.lexendSemiBold,
    fontSize: FontSize.size_base,
    left: 13,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameParentLayout: {
    top: 427,
    backgroundColor: Color.colorSkyblue_200,
    borderRadius: Border.br_6xs,
    height: 279,
    width: 162,
    overflow: "hidden",
    position: "absolute",
  },
  navigationShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 83,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 56,
    height: 56,
    position: "absolute",
  },
  homeParentPosition1: {
    left: 195,
    height: 40,
    width: 78,
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
    position: "absolute",
  },
  homeParentPosition: {
    left: 266,
    height: 40,
    width: 78,
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
    position: "absolute",
  },
  rectanglePosition1: {
    height: 135,
    left: 36,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rectanglePosition: {
    left: 192,
    height: 135,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  bananaImage110Layout: {
    left: "51.2%",
    right: "12.27%",
    width: "36.53%",
    height: "9.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 430,
    height: 135,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rectangleParentPosition: {
    bottom: "11.21%",
    top: "72.17%",
    height: "16.63%",
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  togetherWeMake: {
    marginLeft: -167.5,
    width: 345,
    height: 36,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    marginTop: -18,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  colorGradientIcon: {
    top: 565,
    left: 100,
    width: 388,
    height: 322,
    position: "absolute",
  },
  colorGradientIcon1: {
    top: -9,
    left: -144,
    width: 438,
    height: 385,
    position: "absolute",
  },
  timeBarIcon: {
    marginLeft: -187.5,
    height: 43,
    left: "50%",
    overflow: "hidden",
    width: 375,
    top: 0,
    position: "absolute",
  },
  saly19Icon: {
    height: "39.78%",
    width: "69.87%",
    top: "60.22%",
    right: "30.13%",
    left: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  icon: {
    top: -49,
    left: 99,
    width: 425,
    height: 425,
    opacity: 0.8,
    position: "absolute",
  },
  startScreen: {
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  colorGradientIcon2: {
    top: -97,
    left: -133,
    width: 497,
    height: 492,
    position: "absolute",
  },
  welcome: {
    color: Color.colorWhite,
  },
  text: {
    color: Color.colorBlack,
  },
  welcomeBackUploadContainer: {
    top: 76,
    fontSize: 25,
    width: 260,
    left: 21,
    position: "absolute",
  },
  addBarIcon: {
    right: 16,
    bottom: 93,
  },
  text2: {
    width: 32,
    height: 26,
    left: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  seafood1: {
    fontSize: FontSize.size_mini,
  },
  seafood: {
    width: 61,
    height: 56,
  },
  text3: {
    left: 9,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  drinks: {
    marginLeft: 16,
    width: 47,
    height: 56,
  },
  text4: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
    position: "absolute",
  },
  parent: {
    width: 39,
    marginLeft: 16,
    height: 56,
  },
  text5: {
    left: 23,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  vegetable: {
    fontSize: 14,
  },
  group: {
    width: 69,
    height: 55,
    marginLeft: 16,
  },
  text6: {
    left: 13,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  container: {
    width: 57,
    marginLeft: 16,
    height: 56,
  },
  text7: {
    left: 11,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  frameView: {
    width: 49,
    marginLeft: 16,
    height: 56,
  },
  parent1: {
    width: 34,
    marginLeft: 16,
    height: 56,
  },
  text9: {
    left: 4,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  parent2: {
    width: 37,
    marginLeft: 16,
    height: 56,
  },
  text10: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_13xl,
    top: 0,
  },
  parent3: {
    width: 43,
    marginLeft: 16,
    height: 56,
  },
  text11: {
    left: 12,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  parent4: {
    width: 53,
    marginLeft: 16,
    height: 56,
  },
  seafoodParent: {
    flexDirection: "row",
  },
  homeScreenInner: {
    top: 416,
    padding: Padding.p_3xs,
    width: 375,
    left: 0,
    position: "absolute",
  },
  v4Icon: {
    left: 20,
    height: 108,
    width: 60,
    top: 6,
    position: "absolute",
  },
  vectorIcon: {
    height: "9.92%",
    width: "12.2%",
    top: "5.25%",
    right: "3%",
    bottom: "84.83%",
    left: "84.8%",
  },
  bananaImage1: {
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  vectorParent: {
    backgroundColor: Color.colorDarkgray_100,
    height: 120,
    width: 100,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  v4Parent: {
    height: 120,
  },
  mixedBlackCoffee: {
    fontSize: FontSize.size_base,
  },
  antDesignheartFilledIcon: {
    height: 24,
    marginTop: 12,
    width: 24,
    display: "none",
    overflow: "hidden",
  },
  text12: {
    fontSize: FontSize.size_lg,
  },
  parent5: {
    width: 60,
  },
  lucideminusIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  lucideminusWrapper: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  text14: {
    textAlign: "center",
    height: 16,
    width: 24,
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontWeight: "700",
  },
  wrapper: {
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_7xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  octiconplus16Wrapper: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  frameParent1: {
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  frameContainer: {
    width: 206,
    justifyContent: "space-between",
    marginTop: 12,
  },
  frameGroup: {
    marginLeft: 12,
    display: "none",
  },
  cartItemShadowBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: Border.br_xs,
    alignItems: "center",
    width: 271,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lucideminusContainer: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Container: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  frameParent2: {
    top: 84,
  },
  passionFruit: {
    top: 20,
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    color: Color.colorBlack,
    left: 125,
    position: "absolute",
  },
  v4Group: {
    display: "none",
    height: 120,
  },
  lucideminusFrame: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Frame: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  text19: {
    top: 48,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lucideminusWrapper1: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper1: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  avocado: {
    top: 21,
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    color: Color.colorBlack,
    left: 125,
    position: "absolute",
  },
  frameChild: {
    width: "36.9%",
    right: "58.67%",
    left: "4.43%",
  },
  cartItemGroup: {
    marginTop: 22,
  },
  lucideminusWrapper2: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper2: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  lucideminusWrapper3: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper3: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  frameItem: {
    width: "41.7%",
    right: "58.3%",
    left: "0%",
  },
  lucideminusWrapper4: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper4: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  lucideminusWrapper5: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper5: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  image1Icon: {
    top: 17,
    left: 8,
    width: 109,
    height: 120,
    position: "absolute",
  },
  lucideminusWrapper6: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper6: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  text34: {
    left: 127,
    fontSize: FontSize.size_base,
    display: "none",
  },
  lucideminusWrapper7: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper7: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  frameParent18: {
    top: 86,
  },
  grape: {
    top: 26,
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    color: Color.colorBlack,
    left: 125,
    position: "absolute",
  },
  image12Icon: {
    top: 24,
    height: 110,
    width: 110,
  },
  lucideminusWrapper8: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper8: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  text39: {
    top: 47,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lucideminusWrapper9: {
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    alignItems: "center",
  },
  octiconplus16Wrapper9: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  frameParent22: {
    top: 83,
  },
  mango: {
    top: 19,
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    color: Color.colorBlack,
    left: 125,
    position: "absolute",
  },
  image13Icon: {
    top: 29,
    left: 6,
    width: 111,
    height: 94,
    position: "absolute",
  },
  frameParent: {
    overflow: "hidden",
  },
  homeScreenChild: {
    top: 502,
    height: 310,
    padding: Padding.p_3xs,
  },
  vectorIcon6: {
    height: 45,
    width: 45,
  },
  vectorIcon7: {
    marginLeft: 18,
    height: 37,
    width: 47,
  },
  vectorIcon8: {
    height: 44,
    marginLeft: 18,
    width: 45,
  },
  vectorIcon9: {
    marginLeft: 18,
    width: 45,
    height: 43,
  },
  vectorParent4: {
    top: 116,
    left: 15,
    flexDirection: "row",
    position: "absolute",
  },
  pantry: {
    left: 19,
    fontSize: FontSize.size_xl,
    top: 6,
  },
  fridgeWrapper: {
    marginLeft: 20,
  },
  freeze: {
    marginTop: -12.5,
    marginLeft: -33,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
  },
  frameParent23: {
    top: 359,
    width: 324,
    height: 30,
  },
  navigationBarChild: {
    height: "91.57%",
    top: "8.43%",
    backgroundColor: "#4eafbc",
    right: "0%",
    width: "100%",
    left: "0%",
    bottom: "0%",
  },
  subtractIcon: {
    height: 63,
    width: 110,
  },
  navigationBarItem: {
    height: "67.47%",
    width: "14.93%",
    right: "73.6%",
    bottom: "32.53%",
    left: "11.47%",
  },
  homeIcon: {
    left: -11,
    top: -83,
    height: 40,
    width: 78,
  },
  vectorIcon10: {
    marginLeft: -9,
    width: 18,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeParent: {
    top: "9.64%",
    right: "70.67%",
    bottom: "42.17%",
    left: "8.53%",
    backgroundColor: Color.colorGray_100,
    width: "20.8%",
    height: "48.19%",
    overflow: "hidden",
    position: "absolute",
  },
  homeIcon1: {
    left: -13,
    top: -83,
    height: 40,
    width: 78,
  },
  vectorIcon11: {
    marginLeft: -13,
    height: 20,
    width: 20,
    marginTop: -9,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeGroup: {
    right: "49.87%",
    left: "29.33%",
  },
  vectorIcon12: {
    height: 19,
    marginTop: -9,
  },
  homeContainer: {
    right: "29.07%",
    left: "50.13%",
  },
  vectorIcon13: {
    marginTop: -10,
    height: 20,
  },
  homeParent1: {
    right: "8.27%",
    left: "70.93%",
  },
  navigationBar: {
    height: 83,
    top: 729,
    width: 375,
    left: 0,
    position: "absolute",
  },
  homeScreen: {
    left: 463,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 812,
  },
  timeBarIcon3: {
    marginLeft: -186.5,
    height: 43,
    left: "50%",
    overflow: "hidden",
    width: 375,
    top: 0,
    position: "absolute",
  },
  vectorIcon14: {
    height: "9.93%",
    width: "12.25%",
    top: "5.26%",
    right: "2.97%",
    bottom: "84.8%",
    left: "84.78%",
  },
  vectorParent5: {
    top: 10,
    height: 152,
    width: 138,
    backgroundColor: Color.colorDarkgray_100,
    left: 12,
    overflow: "hidden",
    position: "absolute",
  },
  antDesignheartFilledIcon6: {
    height: "7.17%",
    width: "12.35%",
    top: "4.66%",
    right: "9.88%",
    bottom: "88.17%",
    left: "77.78%",
  },
  stringValue: {
    top: 170,
    height: 25,
    fontFamily: FontFamily.smallBodyTextLight12,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    left: 12,
  },
  text41: {
    top: 192,
    width: 107,
    height: 16,
    fontSize: FontSize.size_base,
    left: 12,
  },
  lucideminusWrapperShadowBox: {
    left: 3,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
    top: "50%",
    marginTop: -18,
    position: "absolute",
  },
  octiconplus16WrapperShadowBox: {
    left: 98,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 97,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    padding: Padding.p_3xs,
    top: "50%",
    marginTop: -18,
    position: "absolute",
  },
  text42: {
    textDecoration: "underline",
  },
  wrapper11: {
    marginTop: -13,
    marginLeft: -19,
    width: 38,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    height: 26,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  frameParent25: {
    top: 224,
    backgroundColor: Color.colorPowderblue,
    width: 138,
    height: 40,
    left: 10,
    display: "none",
  },
  frameParent24: {
    backgroundColor: Color.colorSkyblue_200,
    borderRadius: Border.br_6xs,
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  frameParent26: {
    height: "14.34%",
    width: "85.19%",
    top: "81.36%",
    right: "7.41%",
    bottom: "4.3%",
    left: "7.41%",
  },
  marketplaceItem: {
    left: 21,
  },
  marketplaceItem1: {
    left: 198,
  },
  image1Icon1: {
    top: 140,
    left: 211,
    height: 149,
  },
  frameParent31: {
    top: 224,
    backgroundColor: Color.colorPowderblue,
    width: 138,
    height: 40,
    left: 10,
  },
  frameParent30: {
    left: 21,
  },
  frameParent32: {
    left: 198,
  },
  akarIconssearch: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  searchByProduct: {
    fontSize: FontSize.smallBodyTextLight12_size,
    color: "#727272",
    marginLeft: 10,
  },
  searchForCoffee: {
    top: 69,
    borderRadius: 6,
    width: 343,
    paddingHorizontal: 20,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorWhitesmoke,
    alignItems: "center",
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  navigationBarvariant5Child: {
    top: 7,
    backgroundColor: Color.colorSkyblue_100,
    height: 76,
    width: 375,
    left: 0,
  },
  navigationBarvariant5Item: {
    left: 277,
    height: 56,
    top: 0,
  },
  homeParent2: {
    left: 32,
    top: 25,
    backgroundColor: Color.colorGray_100,
  },
  homeParent3: {
    left: 110,
    top: 25,
    backgroundColor: Color.colorGray_100,
  },
  homeParent4: {
    top: 25,
  },
  homeParent5: {
    top: 8,
  },
  navigationBarvariant5: {
    top: 729,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
  },
  marketplaceScreen: {
    left: 926,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 812,
  },
  instanceChild: {
    height: 79,
    width: 137,
    backgroundColor: Color.colorGainsboro,
  },
  banana1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  expOn13124: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray_200,
    marginTop: -2,
  },
  bananaParent: {
    paddingVertical: 0,
    marginTop: 8,
    width: 137,
    paddingHorizontal: Padding.p_7xs,
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
  rectangleParent1: {
    top: 118,
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
    left: 70,
    fontSize: FontSize.size_3xl,
  },
  inventoryScreenChild: {
    top: "14.53%",
    bottom: "75.74%",
  },
  rectangleIcon: {
    height: 79,
    width: 137,
  },
  rectangleParent2: {
    left: 41,
  },
  rectangleParent3: {
    left: 197,
  },
  rectangleParent4: {
    marginLeft: -142.5,
  },
  rectangleParent5: {
    marginLeft: 13.5,
  },
  image3: {
    left: 38,
    width: 133,
    top: 274,
    height: 79,
    position: "absolute",
  },
  bananaImage110: {
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
  addBarIcon1: {
    top: 509,
    left: 315,
  },
  ellipseIcon: {
    top: -1,
    left: 206,
    height: 56,
  },
  homeParent8: {
    top: 8,
  },
  homeParent9: {
    top: 25,
  },
  navigationBar1: {
    bottom: 0,
    left: -4,
    width: 379,
  },
  inventoryScreen: {
    left: 1389,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 812,
  },
  screens: {
    width: 1760,
    height: 812,
  },
});

export default Screens;
