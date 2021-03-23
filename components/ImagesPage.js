import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function ImagesPage() {
    
        return (
            <Card 
                featuredTitle={ 'IMAGENS'}
                image={require('./images/01.jpg')}
            >
                <Text style={{margin: 10}}>
                    IMAGEM 1
                </Text>
            </Card>
        );
    
}


export default ImagesPage;