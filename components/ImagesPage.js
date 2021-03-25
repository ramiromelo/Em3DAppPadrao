

import React, { Component }  from 'react';
import { Text, View, ScrollView, Modal, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Icon } from 'react-native-elements';

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
}, {
    url: '',
    props: {
        source: require('./images/03.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/04.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/05.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/06.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/07.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/08.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/09.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/10.jpg')
    }
}, {
    url: '',
    props: {
        source: require('./images/11.jpg')
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
            <ScrollView>
            <Modal visible={this.state.visibleModal} transparent={true} enableSwipeDown={true}>
                
                <TouchableOpacity
                    onPress={() => {
                        this.setState({visibleModal: false})
                } }>
                    {/* <Image
                    style={[styles.modalBackIcon]}
                    source={require('../../theme/images/back-icon.png')} /> */}
                    <Text style={styles.back}>
                        FECHAR
                        {/* <Icon
                            name='bars'
                            type='font-awesome'
                            style={styles.closeIcon}
                        /> */}
                    </Text>
                </TouchableOpacity>
                <ImageViewer imageUrls={images}/>
            </Modal>
            <Tile
                    imageSrc={require('./images/01.jpg')}
                    title="IMAGENS INTERNAS"
                    featured
                    onPress={() => {
                        this.setState({visibleModal: true})}}
                    //caption="Some Caption Text"
                    />
            <Tile
                    imageSrc={require('./images/13.jpg')}
                    title="IMAGENS EXTERNAS"
                    featured
                    onPress={() => {
                        this.setState({visibleModal: true})}}
                    //caption="Some Caption Text"
                    />
            <Tile
                    imageSrc={require('./images/02.jpg')}
                    title="PLANTAS"
                    featured
                    onPress={() => {
                        this.setState({visibleModal: true})}}
                    //caption="Some Caption Text"
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
            </ScrollView>
         );
    }
}

const styles = StyleSheet.create({
    back: {
      //flex: 1,
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        height: 50,
        alignItems: 'center',
        textAlign: 'right',
        backgroundColor: 'black',
        color: 'white',
       justifyContent: 'center',
       textAlignVertical: 'center'
    },
    closeIcon: {
        color: 'white',
        backgroundColor: 'black',
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