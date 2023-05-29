interface PictureProps {
  item?: {
    name: string;
    images: {
      webp: string;
      png: string;
    };
  };
}

const Picture = ({ item }: PictureProps) => {
  return (
    <picture id="moon-image" className="fade-in">
      <source srcSet={item?.images.webp} type="image/webp" />
      <img src={item?.images.png} alt={item?.name} />
    </picture>
  );
};
export default Picture;
