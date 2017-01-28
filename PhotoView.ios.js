import React, {Component} from 'react';
import {
    View,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import Image from 'react-native-image-progress';

export default class PhotoView extends Component {
    render() {
        return (
            <ScrollView
                contentContainerStyle={{ alignItems:'center', justifyContent:'center' }}
                centerContent={true}
                maximumZoomScale={this.props.maximumZoomScale}
                minimumZoomScale={this.props.minimumZoomScale} 
                showsHorizontalScrollIndicator={this.props.showsHorizontalScrollIndicator} 
                showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator} 
                >

                <TouchableWithoutFeedback
                    onPress={this.props.onTap ? this.props.onTap : function() {}}>

                    <Image indicator={ProgressCircle} indicatorProps={{color: 'gray'}} {...this.props}/>

                </TouchableWithoutFeedback>

            </ScrollView>
        );
    }
}
