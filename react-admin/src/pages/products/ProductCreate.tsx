import axios from 'axios';
import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Wrapper from "../../components/wrapper";
import ImageUpload from "../../components/ImageUpload";

const ProductCreate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [showimg, setshowImg] = useState(true);
    const [redirect, setRedirect] = useState(false);


    const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
         setImage(e.target.value);
         setshowImg(false);
        //alert("anjing");
      };

      

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('products', {
            title,
            description,
            image,
            price
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input className="form-control"
                           onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control"
                              onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control"
                               value={image}
                               onChange={e => 
                                setImage(e.target.value)
                                //handleUploadImage(e)
                            }
                        />
                        <ImageUpload uploaded={setImage}/>
                        <br/>
                        
                    </div>
                </div>
              
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" className="form-control"
                           onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductCreate;
