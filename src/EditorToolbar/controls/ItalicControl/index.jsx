import React from 'react';
import useEditor from '../../../hooks/useEditor';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import inlineStyles from '../../../types/inlineStyles';
import { FormatItalic as FormatItalicIcon } from 'mdi-material-ui';

function ItalicControl() {
    const editor = useEditor();

    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.ITALIC}
            text={editor.translate('controls.italic.title')}>
            <FormatItalicIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default ItalicControl;
