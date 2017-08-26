import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import icons from 'sportunity/src/theme/images';
import style from './style';

const ModalSportunity = ({
  isModalVisible,
  openCloseModal,
  children,
  title,
  image
}) => (
  <View>
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={isModalVisible}
      onRequestClose={() => false}
    >

      <View style={style.header}>
        <TouchableOpacity
          onPress={openCloseModal}
          style={style.icon}
        >
          <Image
            source={icons.down_arrow}
          />
        </TouchableOpacity>
        
        <View style={style.titleContainer}>
          {image !== null && <Image style={style.image} source={image} />}
          <Text style={style.title}>
            {title}
          </Text>
        </View>
      </View>
      {children}
    </Modal>
  </View>
);

ModalSportunity.propTypes = {
  isModalVisible: React.PropTypes.bool.isRequired,
  openCloseModal: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.string,
  children: React.PropTypes.node
  
};

export default ModalSportunity;
