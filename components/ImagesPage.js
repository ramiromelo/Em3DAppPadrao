

import React, { Component }  from 'react';
import { Text, View, Modal, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
    url: '',
    props: {
        source: require('./images/01.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/02.jpg')
    }
}]

class ImagesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visibleModal: false,
         }
    }
    render() { 
        return ( 
            <View>
            <Modal visible={this.state.visibleModal} transparent={true} enableSwipeDown={true}>
                
                <TouchableOpacity
                    onPress={() => {
                        this.setState({visibleModal: false})
                } }>
                    {/* <Image
                    style={[styles.modalBackIcon]}
                    source={require('../../theme/images/back-icon.png')} /> */}
                    <Text style={styles.back}>VOLTAR</Text>
                </TouchableOpacity>
                <ImageViewer imageUrls={images}/>
            </Modal>
            <Button
            title="INTERNAS"
            onPress={() => {
                this.setState({visibleModal: true})}}
            />
            <Button
            title="EXTERNAS"
            onPress={() => {
                this.setState({visibleModal: true})}}
            />
            <Button
            title="PLANTAS"
            onPress={() => {
                this.setState({visibleModal: true})}}
            />
            </View>
         );
    }
}

const styles = StyleSheet.create({
    back: {
      //flex: 1,
      backgroundColor: '#fff',
      fontSize: 20,
        fontWeight: "bold"
    //   alignItems: 'center',
    //   justifyContent: 'center',
    }
  })

export default ImagesPage;

// function ImagesPage() {

 
    
//         return (
//             <View>
//             <Modal visible={true} transparent={true} enableSwipeDown={true}>
//                 <ImageViewer imageUrls={images}/>
//                 <TouchableOpacity
//                     onPress={() => {
//                         this.setState({visibleModal: false})
//                 } }>
//                     {/* <Image
//                     style={[styles.modalBackIcon]}
//                     source={require('../../theme/images/back-icon.png')} /> */}
//                     <Text>Close</Text>
//                 </TouchableOpacity>
                 
          
             
                
                
//             </Modal>
//             </View>
//         );
    
// }


// export default ImagesPage;