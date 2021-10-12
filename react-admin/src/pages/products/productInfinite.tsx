import React, {Component, SyntheticEvent, useEffect, useState} from 'react';
//import '../login.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Product } from '../../models/product';
import ContactSkeletonLoading from '../../components/SkeletonLoading';
import InfiniteScroll from 'react-infinite-scroller';

const ProductInfinite =() => {
  const [productsdata, setProducts] = useState([])
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  
 

  const fetchMoreData = async function (pagenumber:number) {
   
    const {data} = await axios.get(`products?page=${pagenumber}`);
   
    return data.data;
   
  }


  const loadUserList = (page:number) => {
    setTimeout(() => {
      fetchMoreData(page)
      .then((res) => {
        const newPage = page + 1;
        const newList = productsdata.concat(res);
        setProducts(newList);
        console.log(res);
        setPage(newPage);
       
      })
      .catch((err) => {
        console.log(err);
      })
    
    }, 1500)

   
  }


  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if(!noData) {
        loadUserList(page);
      }
    }
  }

  useEffect(() => {
    loadUserList(page);
  }, []);




    return(
        <main>

        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Product</h1>
              <p className="lead text-muted">List Product mantap</p>
              <p>
                <a href={'/'} className="btn btn-primary my-2">Back to Admin Panel</a>
               
              </p>
            </div>
          </div>
        </section>
      
        <div className="album py-5 bg-light">
          <div className="container">
      
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {productsdata.map((p: Product) => {
                        return (
                          <div className="col">
                          <div className="card shadow-sm">
                            <img width="100%" height="225" src= {p.image} className="bd-placeholder-img card-img-top" >
                            </img>
                           
                               <title>{p.title}</title>
                               <rect width="100%" height="100%" fill="#55595c"/>
                              
                            
                             
                
                            <div className="card-body">
                              <p className="card-text">{p.description}</p>
                              <p className="card-text">Rp. {p.price}</p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                
                                </div>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                   )
                  })} 
        {loading ?  <div className="text-center">loading data ...</div> : "" }
        {noData ? <div className="text-center">no data anymore ...</div> : "" }  

          

          
              
              
             
            </div>
          </div>
        </div>
      
      </main>
    );
    
    

}

export default ProductInfinite;