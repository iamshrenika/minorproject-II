import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

function AllProducts() {
    const [Products,setProducts]=useState([])

    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/products/');
    });

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => setProducts(data.results));
    }

    return (
        <section className='container mt-4'>
            <h3 className="text-center mb-4">All Products</h3>
                <div className="row mt-4">
                    {
                        Products.map((product)=><SingleProduct product={product}/>)
                    }
                </div>
                {/* Pagination */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
        </section>
    );
  }
  
  export default AllProducts;