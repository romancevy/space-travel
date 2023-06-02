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
  const itemName = item?.name;
  const itemImages = item?.images;

  return (
    <picture id="moon-image" className="fade-in">
      <source srcSet={itemImages?.webp} type="image/webp" />
      <img src={itemImages?.png} alt={itemName} />
    </picture>
  );
};
export default Picture;
