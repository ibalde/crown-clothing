import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = (props) => {
    const {categories} = props;
    return (
        <div className="directory-container">
            {categories.map((item) => {
                return (
                    <DirectoryItem category={item} key={item.id}/>
                );
            })}
        </div>
    )
}

export default Directory;