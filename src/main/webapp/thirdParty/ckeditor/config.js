/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

function isBrowserCheck() {
	var agt = navigator.userAgent.toLowerCase();
	if(agt.indexOf("edge") != -1)    return 'edge';
	if(agt.indexOf("trident") != -1) return 'msie';
	if(agt.indexOf("chrome") != -1)  return 'chrome';
	if(agt.indexOf("firefox") != -1) return 'firefox';
	if(agt.indexOf("safari") != -1)  return 'safari';
	if(agt.indexOf("opera") != -1)   return 'opera';
}

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	/*
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];
	*/
	
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		'/',
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'resize,Checkbox,Radio,Form,TextField,Textarea,Select,Button,ImageButton,HiddenField,Save,ExportPdf,Print,Templates,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,BidiLtr,BidiRtl,Language,Anchor,PageBreak,Iframe,Maximize,ShowBlocks,About';
	

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	//config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	//config.removeDialogTabs = 'image:advanced;link:advanced';
	
	//config.extraPlugins = 'tableresize,font,find,panelbutton,colorbutton';
	config.extraPlugins = 'tableresize,font,find,panelbutton,colorbutton,imagepaste,pasteUploadImage';	/*pasteUploadImage,imagepaste,pasteUploadImage,pastebase64,base64image*/
	
	config.language='ko';
	config.fontSize_defaultLabel='12px';
	config.toolbarCanCollapse=true;
	//config.extraPlugins='autogrow'
	config.width='100%';
	//config.height='100%';
	config.filebrowserUploadUrl = '/ckEditorUpload.do';	
	config.uploadUrl = '/ckEditorUpload.do';
	
	config.resize_dir = 'both';
	config.resize_enabled = false;
};
