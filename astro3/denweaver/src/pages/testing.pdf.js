import pdf from 'pdfjs';
 import helvetica from 'pdfjs/font/Helvetica';

export const get = async function get() {
   try {
     const doc = new pdf.Document({ font: helvetica, padding: 10 });
     const text = doc.text({ fontSize: 12 });
     text.add('Example PDF');
     const buffer = await doc.asBuffer();
 
return{ body: buffer.toString('binary'), encoding:'binary'};
   } catch (error) {
     throw new Error(`Something went wrong in pdf-resource.pdf route!: ${error}`);
   }
 };
