import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBasket } from './Slice/BasketSlice';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaSearchSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Section7 = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setData(response.data.slice(2,6));
            } catch (error) {
                console.error('ERROR', error);
            }
        };

        fetchData();
    }, []);

    const dispatch = useDispatch();

    const addedBasket = (product) => {
        dispatch(addBasket(product));
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = (product) => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    return (
        <div className='lastproduct flex justify-center gap-6 flex-wrap text-center'>
            {data.map((product) => (
                <p key={product.id}>
                      <div class='product'>
                        <div class='image-container'>
                            <img class='w-[330px]' src={product.ProductImage} />
                        </div>
                        <div class='productinfo'>
                                <div>
                                    <span onClick={() => addedBasket(product)}><LiaShoppingBagSolid /></span>
                                </div>
                                <div>
                                    <span onClick={() => handleOpen(product)}><LiaSearchSolid /></span>
                                </div>
                            <div>
                                <span><CiHeart /></span>
                            </div>
                        </div>
                    </div>
                    <h4 class='font-semibold'>{product.Name}</h4>
                    <p class='text-green font-bold'>${product.Price}</p>
                  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <img src={product.ProductImage} alt="" />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {product.Name}
              ${product.Price}
            </Typography>
          </Box>
        </Fade>
      </Modal>
                </p>
                
            ))}
             <div>
     
    </div>
        </div>
    );
};

export default Section7;
