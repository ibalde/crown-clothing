import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = (props) => {
    const {categories} = props;
    return (
        <div className="directory-container">
            {categories.map((item) => {
                return (
                    <CategoryItem category={item} key={item.id}/>
                );
            })}
        </div>
    )
}

export default Directory;