import React from 'react';
import useEditor from '../../../hooks/useEditor';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import { FormatUnderlined as FormatUnderlinedIcon } from 'mdi-material-ui';
import inlineStyles from '../../../types/inlineStyles';

function UnderlineControl() {
    const editor = useEditor();

    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.UNDERLINE}
            text={editor.translate('controls.underline.title')}>
            <FormatUnderlinedIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default UnderlineControl;
