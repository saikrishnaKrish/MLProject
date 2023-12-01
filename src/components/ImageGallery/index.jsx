import obj  from '../../utils/content'

import  { useEffect, useState } from 'react';
import Modal from 'react-modal';



const ImageGallery = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }


      // Object.values(obj).length
    const [imageArray, setImageArray] = useState(Object.values(obj));
    const [currentImage,setCurrentImage]=useState({})
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    const handleCurrentImage=(e)=>{
      setCurrentImage(e);
      openModal()
    }

    return (
      <div>
        <h1>Graphs </h1>
        {imageArray.map((ele, index) => (
          <img key={index} src={ele.image} alt={`Image ${index + 1}`} onClick={()=>handleCurrentImage(ele)} className='imageContainer'/>
        ))}


   
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modalContainer'>

        <button onClick={closeModal} className='modalClosebtn'>close</button>
       
       <div>
             <img src={currentImage.image} className='cardImage' />
             <p >
             {currentImage.content}
            </p>

       </div> 
        </div>
     

      </Modal>
      </div>
    );
  };
  

  export default ImageGallery;