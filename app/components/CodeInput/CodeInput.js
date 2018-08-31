import React, { Component } from 'react';
import { View, Text, TextInput, Alert, DeviceEventEmitter } from 'react-native';
import styles from './styles'

// const BTextInput = (props)=>{
//     const inputRefs = []
//     const handleChange = (name)=>{
//         const thisInput = parseInt(name)
//         console.log('sdfsdfsdf')
//         const nextInput = String(thisInput+1)
//         if(typeof inputRefs[nextInput]!='undefined' ){
//             inputRefs[nextInput].focus();
//         }


//     }


    
//     return(
//         <View style={styles.inputWrapper}>
//             <TextInput
//                 underlineColorAndroid="transparent"
//                 keyboardType="numeric"
//                 style={styles.input}
//                 ref={(input)=>inputRefs[props.inputRef]=input}
//                 onChangeText={(text) => handleChange(props.inputRef)}
//                 value={props.text}
                
//                 {...this.props}
//             />
//         </View>
//     )
// }

class CodeInput extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        letterCount: 6,
        text: '',
        textArr: [],
        
      };
      // this.onChangeText = this.onChangeText.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.inputRefs = []
      this.onFocus = this.onFocus.bind(this)
    }
    // onChangeText(name){
    //     this.inputRefs[name].focus();
    // }
    componentWillMount(){
        DeviceEventEmitter.addListener('onKeyPressed', ()=>Alert.alert('sss'))
    }
    componentDidMount(){
        this.inputRefs[0].focus()
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeListener('onKeyPressed', ()=>Alert.alert('sss'))
    }

    handleKeyPress(e){
        Alert.alert(e.nativeEvent.key+'')
    }
    async handleChange(text, name){

        let splitText = text.split('')
        // Alert.alert(JSON.stringify(splitText))
        let textArr = [...this.state.textArr]
        textArr[name] = splitText[0]
        // Alert.alert(JSON.stringify(textArr), name+'')
        if(name+1<this.state.letterCount && splitText.length>1) textArr[name+1] = splitText[1]
        await this.setState({textArr})
    // Alert.alert(String(this.state.textArr.length))
    // Alert.alert(JSON.stringify(textArr), name+'')
        this.inputRefs[textArr.length-1].focus();
        if(text.length==0 && name!=0) {
            this.inputRefs[name-1].focus();
            this.state.textArr.pop()
        }
        // Alert.alert(String(this.state.textArr.length+1))
        // const code = this.state.textArr.join('')
        // 
        // const thisInput = parseInt(name)
        // Array.from(this.state.textArr).map((e, i)=>{
        //     this.inputRefs[i].value = e
        // })
        
        // const nextInput = String(thisInput+1)
        // const prevInput = String(thisInput-1)
        // if (text!='') {
        //     if(typeof this.inputRefs[nextInput]!='undefined' ){
        //         // this.inputRefs[nextInput].focus();
        //         // this.inputRefs[nextInput].value = null
        //     }
        // } else {
        //     if(typeof this.inputRefs[prevInput]!='undefined' ){
        //         // this.inputRefs[prevInput].focus();
        //         // this.inputRefs[prevInput].value = null;
        //     }
        // }

    }
    onFocus(id){
        if(id<this.state.textArr.length-1) {
            this.setState({textArr: []})
            this.inputRefs[0].focus()
        }
    }
    render(){
        const inputs = [];
        
        for (var i=0; i < this.state.letterCount; i++) {
            const id = i;
            inputs.push(
                <View style={styles.inputWrapper} key={id}>
                    <TextInput
                    keyboardType={'numeric'}
                        underlineColorAndroid="transparent"
                        keyboardType="default"
                        style={styles.input}
                        textAlign={'right'}
                        ref={(input)=>this.inputRefs[id] = input}
                        // maxLength={1}
                        onChangeText={(text)=>this.handleChange(text, id)}
                        blurOnSubmit={true}
                        onKeyPress={this.handleKeyPress} 
                        onKeyDown={(e)=> Alert.alert("onKeyDown") } 
                        onSubmitEditing={()=>Alert.alert('Enter')}
                        onFocus={this.onFocus.bind(this, id)}
                        value={this.state.textArr[id]}

                        
                        
                    />
                    <View style={styles.inputVisualizer} >
                        <Text style={styles.inputVisualizerText}>
                            {this.state.textArr[id]}
                        </Text>
                     </View>
                </View>
            );
        }
        return (
          <View style={styles.inputContainer}>
            
            

            {inputs}
            
            
          </View>
        )
    }
	
}

export default CodeInput