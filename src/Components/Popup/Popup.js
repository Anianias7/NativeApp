import React from 'react'
import Dialog, { SlideAnimation, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import { ScrollView } from 'react-native'


const Popup = ({
    children,
    visible,
    title,
    popoutStyle,
    onPopoutClose
}) => {
    return (
        <Dialog
            visible={visible}
            style={popoutStyle.Dialog}
            onTouchOutside={onPopoutClose}
            width={0.9}
            dialogTitle={<DialogTitle align='left' title={title} style={popoutStyle.Title} />}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
        >
            <DialogContent style={popoutStyle.Content}>
                {children}
            </DialogContent>
        </Dialog>

    )
}

export default Popup;

