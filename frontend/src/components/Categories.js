import { Link } from 'react-router-dom';
import logo from '../logo.svg';
function Categories(){
    return(
        <section className="container mt-5">
            <h3 className="text-center mb-4">All Categories <a href='#' className='float-end btn btn-light m-2'></a></h3>
            <div className="row mb-2">
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/jewelleries/1'>Handmade Jewelleries</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/necklace/1'>Category Title</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/necklace/1'>Category Title</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/necklace/1'>Category Title</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            </div>
            <div className="row mb-2">
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/necklace/1'>Category Title</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/bracelet/2'>Category Title</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/hairpin/3'>Category Title</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card shadow">
                <img src={logo} className="card-img-top" alt="Category" />
                <div className="card-body">
                    <h4 className="card-title"><Link to='/category/art/4'>Category Title</Link></h4>
                </div>
                <div className='card-footer'>
                    <p>Products Sold: 120</p>
                </div>
                </div>
            </div>
            {/* Category Box End */}
            {/* Pagination */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        </section> 
    );
}

export default Categories;