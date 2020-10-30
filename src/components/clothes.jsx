import React, { Component } from 'react';
import _ from 'lodash';
import { toast } from 'react-toastify';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import ProductComponent from './productsComponent';
import ProductDetails from './productDetails';
import NavBar from './navBar';
import { paginate } from './utils/paginate';
import { getCategories } from '../services/categoryService';
import { getProducts } from './../services/productservices';
import SearchBox from './searchBox';


class Clothes extends Component {
    state = {
        products: [],
        categories: [],
        pageSize: 4,
        currentPage: 1,
        selectedCategory : null,
        searchQuery : '',
        sortColumn: { path: "price", order: "asc" },
        cartItems : []
      };

       componentDidMount() {
        const data = getCategories();
        const products = getProducts();
         const categories = [{ _id: "", name: "All Categories" }, ...data];
         this.setState({ products, categories });
    }

    // handleDelete = async (product) => {
    //     const originalProducts = this.state.products;
    //     const products = originalProducts.filter((p) => p._id !== product._id);
    //     this.setState({ products });
    
    //     try{
    //       await deleteproduct(product._id);
    //     }
    
    //     catch(ex)
    //     {
    //       if(ex.response && ex.response.status === 404) 
    //       {
    //         toast.error("This product is already deleted");
    //       }
    //       this.setState({ mvoies : originalProducts });
    //     }
    //   };

      handlePageChange = (page) => {
        this.setState({ currentPage: page });
      };
    
      handleCategorySelect = (category) => {
        this.setState({ selectedCategory: category, searchQuery : '', currentPage: 1 });
      };
    
      handleSearch = query => {
        this.setState({searchQuery : query, selectedCategory : null, currentPage : 1 })
      }
    
      handleSort = (sortColumn) => {
        this.setState({ sortColumn });
      };
    
      getPageData = () => {
        const {
          pageSize,
          currentPage,
          products: allProducts,
          selectedCategory,
          sortColumn,
          searchQuery,
        } = this.state;
        let filtered = allProducts;
        if(searchQuery) 
        filtered = allProducts.filter( p=> p.title.toLowerCase().startsWith(searchQuery.toLocaleLowerCase()));
        else if( selectedCategory && selectedCategory._id)
            filtered = allProducts.filter((p) => p.category._id === selectedCategory._id)

        const sorted = sortColumn.order === "asc" ? filtered.sort((a,b) => a.price - b.price ) : filtered.sort((a,b) => b.price - a.price );
    
        const products = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, products };
      };
    

    render() {
        const { length: count } = this.state.products;
    const { pageSize, currentPage, searchQuery, selectedCategory} = this.state;
    const { user } = this.props;

    const { totalCount, products } = this.getPageData();
    if (count === 0) return <p>There are no Products in the database</p>; 
        return <div>
        <div className="container container-fluid">
          <div className="row" style={{width: "100px"}}>
          <SearchBox onChange={this.handleSearch} value={ searchQuery }/>
          </div>
            <div className="row p-3">
             <div className="col-3">  
          <ListGroup
            items={this.state.categories}
            onCategorySelect={this.handleCategorySelect}
            selectedCategory={selectedCategory}
            nameProperty="name"
            idProperty="_id"
          />
             </div>
             <div className="col">
                 <img className="img-fluid banner" alt="Responsive image" src="https://image.freepik.com/free-vector/happy-diwali-festival-lights-website-banner_30996-1417.jpg"></img>
             </div>
            </div>
            <div className="row">
            <ProductComponent 
            products={products}
            onSort={this.handleSort}
            />
            </div>
            <div className="row mt-3 justify-content-center">
                <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
            </div>
            </div>
            </div>
            
    }
}
 
export default Clothes;