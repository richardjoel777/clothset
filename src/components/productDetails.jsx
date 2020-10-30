import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/categoryService';
import { getProduct } from '../services/productservices';
import { getProducts } from './../services/productservices';

class ProductDetails extends Component {

    state = {
        data : { _id: '', title: '', category : '', price: '', description: '', image: ''  } , similiarItems : [] , categories : [] }

    componentDidMount()
   {
     this.populateCategory();
     this.populateProduct();
    }

    populateCategory()
    {
      const categories = getCategories();
        this.setState({ categories });
    }

    populateProduct()
    {
      try
       {
         const productId = this.props.match.params.id;
          const product =  getProduct(productId);
          if(productId>13)
          {
            this.props.history.replace("/not-found");
          }
          const similiarItems = getProducts().filter(p => p.category._id === product.category._id && p._id !== product._id )
          this.setState({ data: this.mapToViewModel(product), similiarItems });
        }

        catch(ex)
         {
          if (ex.response && ex.response.status === 404 )
          this.props.history.replace("/not-found");
        }
    }

    mapToViewModel(product){
       return { 
        _id : product._id,
        category : product.category.name,
        price : product.price,
        title : product.title,
        description: product.description,
        image: product.image
       }
    } 

handleSubmit(){
    window.alert("your order placed successfully");
    window.location = "/";
    render() { 
        const { data : product, similiarItems } = this.state;
        const { onClick } = this.props;
        return <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8 shadow p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col">
                        <img src={product.image} height="420px" width="327px"></img>
                    </div>
                    <div className="col p-5">
                        <div className="row">
                            <h2 style={{fontFamily : 'Bentham'}}>{product.title}</h2>
                            </div>
                            <div className="row" >
                                   <p>{product.description}</p>
                                    <p className="font-weight-bold">&#x20B9; {product.price}</p>
                            </div>
                            <div className="row justify-content-center">
                                <Link to="/">
                                <button className="btn btn-primary m-2" onClick={this.handleSubmit}>Buy Now</button>
                                </Link>
                            </div>
                    </div>
                </div>
      </div>
      </div>
      <h2 className="shadow bg-white rounded" style={{width:"300px", height:"40px", textAlign:"center"}}>Items You May Like</h2>
      <div className="row p-3">
                 { similiarItems.map( p => (
                <div className="col-md-3 mt-3">
                <Link to={`/products/${p._id}`}> 
                <div key={p._id} className="card" style={{color: "black"}}>
               <img src={p.image} className="card-img-top"></img>
               <div className="card-body">
              <p className="card-text">{p.title}</p>
                 <p className="card-text">&#x20B9; <small>{p.price}</small></p>
              </div>
              </div>
              </Link>
                </div>     
            ))}
            </div>
      </div>
    }
}
 
export default ProductDetails;
