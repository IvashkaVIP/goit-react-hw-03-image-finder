import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = () => {
    
    return (
      <li className={css.ImageGalleryItem}>
        <img className={css['ImageGalleryItem-image']} src="" alt="" />
      </li>
    );
}