import CategoryItem from "../category-item/category-item.component";
import "./directory.component.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
