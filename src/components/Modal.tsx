type Props = {
    image: string;
    closeModal: () => void;
  }
  
  export const Modal = ({ image, closeModal }: Props) => {
    const overlayStyle = {
      position: 'fixed' as 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 1000
    };
  
    const imageStyle = {
      maxWidth: '100%',
      maxHeight: '100%'
    };
  
    const closeButtonStyle = {
      position: 'fixed' as 'fixed',
      top: '1.25rem', // equivalent to 5px
      right: '1.25rem', // equivalent to 5px
      width: '2.5rem', // equivalent to 10px
      height: '2.5rem', // equivalent to 10px
      cursor: 'pointer',
      color: 'white',
      fontSize: '2.5rem', // equivalent to 5xl
      zIndex: 1001
    };
  
    return (
      <>
        <div style={overlayStyle}>
          <img src={`/assets/${image}`} alt="" style={imageStyle} />
        </div>
        <div style={closeButtonStyle} onClick={closeModal}>
          x
        </div>
      </>
    );
  }
  