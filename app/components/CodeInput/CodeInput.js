import React, { Component } from 'react';
import { View, TextInput, Alert } from 'react-native';
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
        
      };
      // this.onChangeText = this.onChangeText.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.inputRefs = []
    }
    // onChangeText(name){
    //     this.inputRefs[name].focus();
    // }

    handleKeyDown(e){
        Alert.alert('salam')
    }
    handleChange(text, name){
        const thisInput = parseInt(name)
        const nextInput = String(thisInput+1)
        const prevInput = String(thisInput-1)
        if (text!='') {
            if(typeof this.inputRefs[nextInput]!='undefined' ){
                this.inputRefs[nextInput].focus();
            }
        } else {
            if(typeof this.inputRefs[prevInput]!='undefined' ){
                this.inputRefs[prevInput].focus();
            }
        }

    }
    render(){
        const inputs = [];
        
        for (var i=0; i < this.state.letterCount; i++) {
            const id = i;
            inputs.push(
                <View style={styles.inputWrapper} key={id}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        style={styles.input}
                        ref={(input)=>this.inputRefs[id] = input}
                        onChangeText={(text)=>this.handleChange(text, id)}
                        onKeyPress={this.handleKeyDown}
                        // value={props.text}
                        
                    />
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