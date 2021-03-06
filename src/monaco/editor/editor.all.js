/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import './browser/controller/coreCommands.js';
import './browser/widget/codeEditorWidget.js';
import './contrib/bracketMatching/bracketMatching.js';
import './contrib/caretOperations/caretOperations.js';
import './contrib/caretOperations/transpose.js';
import './contrib/clipboard/clipboard.js';
import './contrib/colorPicker/colorDetector.js';
import './contrib/comment/comment.js';
import './contrib/contextmenu/contextmenu.js';
import './contrib/cursorUndo/cursorUndo.js';
import './contrib/find/findController.js';
import './contrib/folding/folding.js';
import './contrib/fontZoom/fontZoom.js';
import './contrib/inPlaceReplace/inPlaceReplace.js';
import './contrib/linesOperations/linesOperations.js';
import './contrib/multicursor/multicursor.js';
import './contrib/parameterHints/parameterHints.js';
import './contrib/rename/rename.js';
import './contrib/smartSelect/smartSelect.js';
import './contrib/tokenization/tokenization.js';
import './contrib/toggleTabFocusMode/toggleTabFocusMode.js';
import './contrib/wordHighlighter/wordHighlighter.js';
import './contrib/wordOperations/wordOperations.js';
import './contrib/wordPartOperations/wordPartOperations.js';
// Load up these strings even in VSCode, even if they are not used
// in order to get them translated
import './common/standaloneStrings.js';
