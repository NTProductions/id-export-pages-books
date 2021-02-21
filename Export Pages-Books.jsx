var document = app.activeDocument;
// ExportFormat.PNG_FORMAT
// ExportFormat.EPUB
// ExportFormat.HTML
// ExportFormat.JPG
// ExportFormat.PDF_TYPE

document.exportFile(ExportFormat.PNG_FORMAT, File("~/Desktop/documentExport.png"), false);

// book.exportFile();