import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBasket } from './Slice/BasketSlice';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaSearchSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Product = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const dispatch = useDispatch();

    const addedBasket = (product) => {
        dispatch(addBasket(product));
    };

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        <div className='products flex justify-center gap-6 flex-wrap text-center'>
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


                </p>
            ))}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" className='flex gap-[30px]'>
                            <img className='w-[360px]' src={selectedProduct ? selectedProduct.ProductImage : ''} alt="" />
                            <div>
                                <div className='text-[25px]'>
                            {selectedProduct ? selectedProduct.Name : ''}
                            </div>
                            <div></div>
                            <div className='text-[15px]'>
                            ${selectedProduct ? selectedProduct.Price : ''}.00 USD 
                            </div>
                            <hr style={{color:"rgb(231,231,231)"}} className='w-[400px] mt-[20px]'/>
                            <div>
                                <p className='text-[15px] mt-[30px] w-[340px]'>Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...</p>
                            </div>
                            <div>
                            <button onClick={() => addedBasket(selectedProduct)} className='modalbuton mt-[35px] w-[200px] h-[50px] text-[16px]'>ADD TO CARD</button>
                            </div>
                            </div>
                            
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <div className='flex gap-[15px]'>
                        <img className='w-[110px]' src={selectedProduct ? selectedProduct.ProductImage : ''} alt="" />
                        <img className='w-[110px]' src={selectedProduct ? selectedProduct.ProductImage : ''} alt="" />
                        <img className='w-[110px]' src={selectedProduct ? selectedProduct.ProductImage : ''} alt="" />
                        </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Product;
