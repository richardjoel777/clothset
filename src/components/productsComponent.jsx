import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductComponent extends Component {
    
    raiseSort = (order) => {
        const sortColumn = { ...this.props.sortColumn };
        sortColumn.order = order;
        this.props.onSort(sortColumn);
      };

    render() { 
        const { products } = this.props;
        return (
            <div className="row p-3">
                <div className="row-1 justify-content-center">
                    <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={() => this.raiseSort("desc")} className="btn btn-secondary">Price High to Low</button>
                <button type="button" onClick={() => this.raiseSort("asc")} className="btn btn-secondary">Price Low to High</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                 { products.map( p => (
                 
                <div key={p._id} className="col-md-3 mt-3">
                     <Link to={`/products/${p._id}`}>  
                <div className="card" style={{color: "black"}}>
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
            
        );
    }
}
 
export default ProductComponent;