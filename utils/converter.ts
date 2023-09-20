export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => resolve(fileReader.result as string);
    fileReader.onerror = err => reject(err);
  });
};

export const fileBuffer = async (file: File) => {
  const extensionToPhoto: {
    [key: string]: string;
  } = {
    png: 'png',
    jpg: 'jpg',
    jpeg: 'jpeg',
  };
  const photoExtension = file && file.name.split('.')[1];
  const fileName: string = extensionToPhoto[photoExtension]
    ? `photo.${photoExtension}`
    : file.name;
  const bufferType: RegExp = extensionToPhoto[photoExtension]
    ? /^data:image\/\w+;base64,/
    : /^data:application\/\w+;base64,/;
  const base64 = await convertFileToBase64(file);
  const buffer: Buffer | string = Buffer.from(
    base64.replace(bufferType, ''),
    'base64',
  );
  return { buffer, base64 };
};
