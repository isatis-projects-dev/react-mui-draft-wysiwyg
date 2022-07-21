import React from 'react';
import useEditor from '../../../hooks/useEditor';
import ToggleBlockTypeButtonControl from '../core/ToggleBlockTypeButtonControl';
import blockStyles from '../../../types/blockStyles';
import { FormatListNumbered as FormatListNumberedIcon } from 'mdi-material-ui';

function OrderedListControl() {
    const editor = useEditor();

    return (
        <ToggleBlockTypeButtonControl
            blockType={blockStyles.OL}
            text={editor.translate('controls.orderedList.title')}>
            <FormatListNumberedIcon />
        </ToggleBlockTypeButtonControl>
    );
}

export default OrderedListControl;
