import React from 'react';
import useEditor from '../../../hooks/useEditor';
import ToggleBlockTypeButtonControl from '../core/ToggleBlockTypeButtonControl';
import { FormatListBulleted as FormatListBulletedIcon } from 'mdi-material-ui';

function UnorderedListControl() {
    const editor = useEditor();

    return (
        <ToggleBlockTypeButtonControl
            blockType="unordered-list-item"
            text={editor.translate('controls.unorderedList.title')}>
            <FormatListBulletedIcon />
        </ToggleBlockTypeButtonControl>
    );
}

export default UnorderedListControl;
