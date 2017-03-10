export const gradient = 'to bottom, rgba(12, 29, 97, 0.1), #081340';

const ImageGradient = image => ({
  backgroundImage: `linear-gradient(${gradient}), url(${image})`,
});

export default ImageGradient;
