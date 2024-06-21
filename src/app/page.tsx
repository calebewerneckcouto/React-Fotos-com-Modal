"use client";

import { Modal } from "@/components/Modal";
import { PhotItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useEffect, useState } from "react";

const Page = () => {
  const [columns, setColumns] = useState(1);
  const [imageOfModal,setImageOfModal]= useState('');
  const [showModal,setShowModal] = useState(false);

  const closeModal = ()=>{
    setShowModal(false);
  }

  const openModal = (id:number)=>{
    const photo = photoList.find(item => item.id ===id);
    if(photo){
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setColumns(3);
    } else if (window.innerWidth >= 600) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial number of columns
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px',textAlign:"center" }}>Fotos Intergalacticas</h1>
      <section style={gridStyle}>
        {photoList.map(item => (
          <PhotItem 
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {showModal &&
      <Modal  image={imageOfModal} closeModal={closeModal} />
      }
    </div>
  );
}

export default Page;
