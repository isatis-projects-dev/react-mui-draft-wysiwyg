import React from 'react';
import useEditor from '../../../hooks/useEditor';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import { CodeTags as CodeIcon } from "mdi-material-ui";
import inlineStyles from '../../../types/inlineStyles';

function CodeControl() {
    const editor = useEditor();

    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.CODE}
            text={editor.translate('controls.code.title')}>
            <CodeIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default CodeControl;
